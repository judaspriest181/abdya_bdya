<template>
<div class="carouselPhoto">
    <img :src=" require('../assets/' + itemData.img)" alt="">
</div>
</template>

<style></style>

<script>
export default {
      props: {
    itemData: {
        type: Object,
        default: () => {}
    }
  }
};
</script>
