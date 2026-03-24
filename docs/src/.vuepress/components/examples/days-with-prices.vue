<template>
  <ClientOnly>
    <easepick :options="options" />
  </ClientOnly>
</template>

<script>
export default {
  computed: {
    options() {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = `0${now.getMonth() + 1}`.slice(-2);
      const dates = [
        `${yyyy}-${mm}-03`,
        `${yyyy}-${mm}-07`,
        `${yyyy}-${mm}-08`,
        `${yyyy}-${mm}-11`,
        `${yyyy}-${mm}-15`,
        `${yyyy}-${mm}-16`,
        `${yyyy}-${mm}-17`,
        `${yyyy}-${mm}-21`,
      ];
      const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const prices = {};
      dates.forEach(x => { prices[x] = randomInt(50, 200); });

      return {
        css: ['/css/demo_prices.css'],
        setup(picker) {
          picker.on('view', (evt) => {
            const { view, date, target } = evt.detail;
            const d = date ? date.format('YYYY-MM-DD') : null;
            if (view === 'CalendarDay' && prices[d]) {
              const span = target.querySelector('.day-price') || document.createElement('span');
              span.className = 'day-price';
              span.innerHTML = `$ ${prices[d]}`;
              target.append(span);
            }
          });
        }
      };
    },
  },
};
</script>
