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
        inline: true,
        viewMode: 'month',
      },
    };
  },
};
</script>
