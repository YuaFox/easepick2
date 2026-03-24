<template>
  <div>
    <div id="app-configurator" :class="{ loading: isLoading }">
      <ClientOnly>
        <spinner v-if="isLoading" />
      </ClientOnly>
      <div class="app-picker-layout">
        <div>
          <input id="app-picker" />
          <input id="app-picker-end" />
        </div>
      </div>
      <div class="app-wrapper">
        <div class="packages-list"></div>
        <div class="package-options">
          <div class="pkg-options-content"></div>
        </div>
      </div>

      <div class="custom-block tip">
        <p>Currently some options may not be available in the configurator.</p>
        <p>
          <span>You want to display all options anyway ?</span>
          <a href="#" id="yes-btn">Yes</a> <a href="#" id="no-btn">No</a>
        </p>
      </div>

      <h2 id="installation">
        <a href="#installation" class="header-anchor"># </a>
        Installation
      </h2>

      <div class="package-install">
        <div class="tabs-wrapper tabs-horizontal">
          <div class="tabs uppercase">
            <div class="tab active">
              <input type="radio" name="package_install" checked />
              bundle
            </div>
            <div class="tab">
              <input type="radio" name="package_install" />
              modular
            </div>
          </div>
          <div class="contents">
            <div class="tab-content active">
              <div class="tabs-wrapper tabs-vertical">
                <div class="tabs uppercase">
                  <div class="tab active">npm</div>
                  <div class="tab">cdn</div>
                </div>
                <div class="contents bg">
                  <div class="tab-content active" id="bundle-npm">
                    bundle npm
                  </div>
                  <div class="tab-content" id="bundle-cdn">bundle cdn</div>
                </div>
              </div>
            </div>
            <div class="tab-content">
              <div class="tabs-wrapper tabs-vertical">
                <div class="tabs uppercase">
                  <div class="tab active">npm</div>
                  <div class="tab">cdn</div>
                </div>
                <div class="contents bg">
                  <div class="tab-content active" id="modular-npm">
                    modular npm
                  </div>
                  <div class="tab-content" id="modular-cdn">modular cdn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 id="quick-example">
        <a href="#quick-example" class="header-anchor">#</a>
        Quick example
      </h2>

      <div class="language-html extra-class">
        <pre class="language-html"><code id="quick-example-code"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (typeof gh !== "undefined" && typeof easepick !== "undefined") {
        if (gh.configurator) {
          gh.configurator();
          return;
        }

        this.isLoading = true;

        // Configurator not available for easepick2 yet
        this.isLoading = false;
      } else {
        setTimeout(this.init, 300);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
#app-configurator.loading {
  position: relative;
  max-height: 150px;
  overflow: hidden;
}

#app-configurator .spinner-layout {
  position: absolute;
  inset: 0;
  background-color: #fff;
}
</style>
