<template>
  <ClientOnly>
    <easepick :options="options" :input_styles="{ width: '250px' }" />
  </ClientOnly>
</template>

<script>
export default {
  data() {
    return {
      options: {
        css: [
          '/css/demo_hotelcal.css',
        ],
        plugins: ['RangePlugin', 'LockPlugin'],
        RangePlugin: {
          tooltipNumber(num) {
            return num - 1;
          },
          locale: {
            one: 'night',
            other: 'nights',
          },
        },
        LockPlugin: {
          minDate: new Date(),
          minDays: 2,
          inseparable: true,
        }
      },
    };
  },
};
</script>
