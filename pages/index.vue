<template>
  <section class="bootstrap-wrapper">
    <Background :page="pageNumber" />
    <Pages :page="pageNumber" />
  </section>
</template>

<script>
import Background from '~/components/background.vue';
import Pages from '~/components/pages.vue';


export default {
  components: {
    Background,
    Pages,
  },
  data() {
    return {
      pageNumber: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      const height = window.innerHeight;
      this.pageNumber = Math.round(offset / height);
    });
  },
};
</script>

<style>

</style>
