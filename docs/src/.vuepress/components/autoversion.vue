<template>
  <div style="display: none"></div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (typeof gh === "object" && typeof gh.version === "string") {
        this.replace_version_number(gh.version);
      } else {
        setTimeout(this.init, 300);
      }
    },
    replace_version_number(version) {
      const tree = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
      );
      for (; tree.nextNode(); ) {
        const node = tree.currentNode;

        const now = new Date();
        const mapObj = {
          "[version.number]": version,
          "[js.date.yyyy]": now.getFullYear(),
          "[js.date.mm]": `0${now.getMonth() + 1}`.slice(-2),
          "[js.date.dd]": `0${now.getDate()}`.slice(-2),
        };

        if (node.nodeType === Node.TEXT_NODE) {
          node.nodeValue = node.nodeValue.replace(
            /\[(version\.number|js\.date\.(yyyy|mm|dd))\]/g,
            (m) => mapObj[m]
          );
        }
      }

      const images = document.querySelectorAll('[src*="[version.number]"]');
      [...images].forEach((img) => {
        img.src = img.src.replace(
          /\[version\.number\]/,
          version.replace(/-/, "--")
        );
      });
    },
  },
};
</script>
