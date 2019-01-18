<template>
  <div>
    <div class="fixed background main-background" />
    <div
      :class="{opacity: page < 1}"
      class="fixed background blur-background"
    />
    <div
      :class="{opacity: page < 2}"
      class="fixed background circle-left-top"
    />
    <div
      :class="{opacity: page < 3}"
      class="fixed background circle-right-top"
    />
    <div
      :class="{opacity: page < 4}"
      class="fixed background circle-right-bottom"
    />
    <div
      :class="{opacity: page < 5}"
      class="fixed background circle-left-bottom"
    />
    <div
      :class="{opacity: page < 6}"
      class="fixed background white-background"
    />
    <div class="fixed">
      <div class="container">
        <div class="row header">
          <div class="col-md-6 col-sm-4 col-3">
            <Transition
              name="fade-logo"
              mode="out-in"
              duration="500"
            >
              <img
                v-if="page === 6"
                key="black"
                src="/img/smena-b.svg"
                alt="Logo"
              >
              <img
                v-else
                key="white"
                src="/img/smena-w.svg"
                alt="Logo"
              >
            </Transition>
          </div>
          <!--<div class="col-3 col-md-6">-->
          <!--<div class="row">-->
          <div
            :class="page < 6 ? 'white-text' : 'black-text'"
            class="col hidden-md-down link"
          >
            О нас
          </div>
          <div
            :class="page < 6 ? 'white-text' : 'black-text'"
            class="col hidden-md-down link"
          >
            Как это работает
          </div>
          <div
            :class="page < 6 ? 'white-text' : 'black-text'"
            class="col hidden-md-down link outlined"
          >
            Связаться с нами
          </div>
          <!--</div>-->
          <!--</div>  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Background',
  props: {
    page: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap-grid-only-css/scss/functions";
@import "../node_modules/bootstrap-grid-only-css/scss/variables";
@import "../node_modules/bootstrap-grid-only-css/scss/mixins/breakpoints";

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.background {
  transition: opacity 1s linear;
}

.main-background {
  background-size: cover;
  background-image: url('/img/imagesaved.jpg');
}

.blur-background {
  background-size: cover;
  background-image: url('/img/imageblur.jpg');
}

.opacity {
  opacity: 0;
}

.circle-left-top {
  background-image: radial-gradient(circle at 0 0, #009cf7, #0148de);
}

.circle-right-top {
  background-image: radial-gradient(circle at 100% 0, #009cf7, #0148de);
}

.circle-right-bottom {
  background-image: radial-gradient(circle at 100% 100%, #009cf7, #0148de);
}

.circle-left-bottom {
  background-image: radial-gradient(circle at 0 100%, #009cf7, #0148de);
}

.white-background {
  background: white;
}

.fade-logo-enter-active, .fade-logo-leave-active {
  transition: opacity .5s linear;
}

.fade-logo-enter, .fade-logo-leave-to {
  opacity: 0;
}

.link {
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: right;
  transition: all 1s linear;
  transition-property: color, border;
  cursor: pointer;
}

.white-text {
  color: #ffffff;
}

.black-text {
  color: #1f2d3d;
}

.outlined {
  font-size: 16px;
  text-align: center;
  margin-left: 1em;
  padding: 11px 20px;
  border-radius: 21px;
}

.outlined.white-text {
  border: 2px solid rgba(223, 233, 244, 0.3);
}

.outlined.black-text {
  border: 2px solid rgba(129, 146, 168, 0.3);
}
.header {
  align-items: center;
  height: 80px;
}

@include media-breakpoint-up(md) {
  .header {
    align-items: center;
    height: 160px;
  }
}

</style>
