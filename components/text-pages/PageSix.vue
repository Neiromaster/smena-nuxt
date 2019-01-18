<template>
  <div class="fixed center">
    <div>
      <h1 class="title">
        Интеллектуальный поиск лучших сотрудников
      </h1>
      <h2 class="where">
        В сфере обслуживания |
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSix',
  props: {
    page: {
      type: Number,
      default: 0,
    },
    direction: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.title {
  font-family: GeometricSansSerifv1, sans-serif;
  font-size: 72px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: -1.2px;
  color: #ffffff;
  margin-bottom: 50px;
}

.where {
  font-family: Roboto, sans-serif;
  font-size: 38px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.47;
  letter-spacing: normal;
  color: #ffffff;
}
</style>
