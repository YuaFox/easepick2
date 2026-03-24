<template>
  <ClientOnly>
    <easepick :options="options" />
  </ClientOnly>
</template>

<script>
export default {
  data() {
    return {
      options: {
        css: ['/css/customize_sample.css'],
      },
    };
  },
};
</script>
