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
        plugins: ['RangePlugin'],
        RangePlugin: {
          tooltipNumber(num) {
            return num - 1;
          },
          locale: {
            one: 'night',
            other: 'nights',
          },
        },
      },
    };
  },
};
</script>
