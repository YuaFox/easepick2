<template>
  <div class="demo-wrapper" :id="id">
    <ClientOnly>
      <easepick :options="opts" @ready="$emit('ready')" />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    opts: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
