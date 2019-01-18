<template>
  <div class="fixed">
    <div class="container center">
      <div
        :key="style.animationDirection"
        :style="style"
        class="opacity animate"
      >
        <h1 class="title white-text mb-5">
          Интеллектуальный поиск лучших сотрудников
        </h1>
        <h2 class="where white-text">
          В сфере обслуживания |
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { animateDataMixin, animateWatcherMixin } from '../../utils';

export default {
  name: 'PageZero',
  mixins: [animateDataMixin, animateWatcherMixin],
  data() {
    return {
      current: 0,
    };
  },
};
</script>

<style>

</style>
