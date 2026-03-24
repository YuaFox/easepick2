<template>
  <ParentLayout />
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  name: "Layout",
  components: {
    ParentLayout,
  },
  mounted() {
    document.documentElement.dataset.mounted = "true";
  },
};
</script>
