<template>
  <div>
    <PageZero
      :page="page"
      :direction="direction"
    />
    <PageOne
      :page="page"
      :direction="direction"
    />
    <PageTwo
      :page="page"
      :direction="direction"
    />
  </div>
</template>

<script>
import PageZero from './text-pages/PageZero.vue';
import PageOne from './text-pages/PageOne.vue';
import PageTwo from './text-pages/PageTwo';

export default {
  name: 'Pages',
  components: {
    PageTwo,
    PageOne,
    PageZero,
  },
  props: {
    page: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      direction: 0,
    };
  },
  watch: {
    page: {
      handler(newVal, oldVal) {
        this.direction = Math.sign(newVal - oldVal) || 0;
      },
      immediate: true,
    },
  },
};
</script>


<style lang="scss">
@import "../node_modules/bootstrap-grid-only-css/scss/functions";
@import "../node_modules/bootstrap-grid-only-css/scss/variables";
@import "../node_modules/bootstrap-grid-only-css/scss/mixins/breakpoints";

.title {
  font-family: GeometricSansSerifv1, sans-serif;
  font-size: 1.5em;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: -1.2px;
}

.where {
  font-family: Roboto, sans-serif;
  font-size: 1.375em;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.47;
  letter-spacing: normal;
}

.plain-text {
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.44;
  letter-spacing: normal;
}

@include media-breakpoint-up(md) {
  .title {
    font-size: 4.5em;
  }
  .where {
    font-size: 2.375em;
  }
  .plain-text {
    font-size: 1em;
  }
}

.mb-5 {
  margin-bottom: 50px;
}

.center {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animate {
  animation: .7s ease-out forwards;
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes moveup {
  100% {
    transform: translateY(-250px);
  }
}

@keyframes movedown {
  100% {
    transform: translateY(250px);
  }
}
</style>
