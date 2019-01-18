<template>
  <div class="fixed">
    <div
      :key="style.animationDirection"
      :style="style"
      class="container opacity animate"
    >
      <div class="header"/>
      <div class="about white-text">
        <div class="row">
          <div class="col-12">
            <h1 class="title title-second">
              О нас
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-12">
            <div class="intro">
              <h3 class="plain-text">
                Мы берем на себя всю работу по сбору и фильтрации кандидатов
                массового найма.
              </h3>
              <h3>&nbsp;</h3>
              <h3 class="plain-text">
                Вам остается лишь пригласить успешных кандидатов на финальное
                собеседование.
              </h3>
            </div>
          </div>
          <div class="col-md-7 col-12 right-block">
            <div class="hidden-md-up mobile-spacer"/>
            <img
              class="img-fluid"
              src="img/group8.svg"
              alt="Image"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { animateDataMixin, animateWatcherMixin } from '../../utils';

export default {
  name: 'PageOne',
  mixins: [animateDataMixin, animateWatcherMixin],
  data() {
    return {
      current: 1,
    };
  },
};
</script>

<style>
.intro {
  margin-top: 28px;
}

.title-second {
  margin-bottom: 22px;
}

.mobile-spacer {
  height: 50px;
  content: " ";
}
</style>
