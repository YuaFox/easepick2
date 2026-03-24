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
    const ver = JSON.parse(localStorage.getItem("version")) || { v: "2.0.0" };
    return {
      id: `id-${new Date().getTime()}`,
      picker: null,
      default_options: {
        css: [
          `https://cdn.jsdelivr.net/npm/@yuafox/easepick2@${ver.v}/dist/index.css`,
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
