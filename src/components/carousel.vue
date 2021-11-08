<template>
  <div class="wrapper">
    <div
      class="carouselTest"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <carouselPhoto
        v-for="item in carouselData"
        :key="item.id"
        :itemData="item"
      />
    </div>
    <button @click="prevSlide"><p>Предыдущая</p></button>
    <button @click="nextSlide"><p>Следущая</p></button>
  </div>
</template>

<style>
.wrapper {
  max-width: 280px;
  overflow: hidden;
  margin: 0 auto;
}
.carouselTest {
  display: flex;
  transition: all ease .5s;
}
</style>

<script>
import carouselPhoto from "./carouselPhoto.vue";

export default {
  props: {
    carouselData: {
      type: Array,
      defoult: () => [],
    },
  },
  components: {
    carouselPhoto,
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },

  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
        if (this.currentSlideIndex >= this.carouselData.length - 1) {
      this.currentSlideIndex = 0;
     }
     else {
         this.currentSlideIndex++
     }
    },
  },
};
</script>
