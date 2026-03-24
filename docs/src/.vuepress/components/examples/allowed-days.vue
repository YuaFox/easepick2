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
      const allowedDates = [
        `${yyyy}-${mm}-01`,
        `${yyyy}-${mm}-03`,
        `${yyyy}-${mm}-07`,
        `${yyyy}-${mm}-11`,
        `${yyyy}-${mm}-17`,
        `${yyyy}-${mm}-21`,
      ];
      return {
        plugins: ['LockPlugin'],
        LockPlugin: {
          filter(date) {
            return !allowedDates.includes(date.format('YYYY-MM-DD'));
          },
        },
      };
    },
  },
};
</script>
