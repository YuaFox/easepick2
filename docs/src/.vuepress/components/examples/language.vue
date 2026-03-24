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
        lang: 'sv-SE',
        plugins: ['RangePlugin'],
        RangePlugin: {
          locale: {
            one: 'dag',
            other: 'dagar',
          },
        },
      },
    };
  },
};
</script>
