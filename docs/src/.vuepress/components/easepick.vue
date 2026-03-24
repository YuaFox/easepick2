<template>
  <div>
    <input type="text" :id="id" />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default() {},
    },
    input_styles: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      id: `id-${new Date().getTime()}`,
      picker: null,
      default_options: {
        css: [
          '/easepick2/lib/easepick2.css',
        ],
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (typeof easepick !== "undefined") {
        const self = this;
        const element = document.getElementById(this.id);
        Object.assign(element.style, this.input_styles);

        const opts = {
          ...{ element: element },
          ...self.default_options,
          ...self.options,
        };

        if ("css" in self.options) {
          opts.css = [...self.default_options.css, ...self.options.css];
        }

        this.picker = new easepick.create(opts);

        this.$emit("ready");
      } else {
        setTimeout(this.init, 300);
      }
    },
  },
};
</script>

<style scoped>
.easepick-wrapper {
  min-height: 280px;
}
</style>
