<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> default header </slot>
        </div>

        <div class="modal-body">
          <slot name="carousel">
            <carousel :carouselData="sliderItemsOrder" />
          </slot>
          <slot name="body"> default body </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="main_btn"><p>Купить</p></button>
            <button @click="closeModal">
              <p>Отмена</p>
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 280px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<script>
import carousel from "./carousel.vue";

export default {
  props: {
    order: {
      type: String,
    },
  },
  components: {
    carousel,
  },
  name: "Modal",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  data() {
    return {
    //   sliderItems: [
    //     { id: 1, name: "img1", img: "1.jpg" },
    //     { id: 2, name: "img2", img: "2.jpg" },
    //     { id: 3, name: "img3", img: "3.jpg" },
    //     { id: 4, name: "img4", img: "4.jpg" },
    //     { id: 5, name: "img5", img: "5.jpg" },
    //     { id: 6, name: "img6", img: "6.jpg" },
    //     { id: 7, name: "img7", img: "7.jpg" },
    //     { id: 8, name: "img8", img: "8.jpg" },
    //     { id: 9, name: "img9", img: "9.jpg" },
    //   ],
       sliderItems_1: [
        { id: 1, name: "img1", img: "1.jpg" },
        { id: 2, name: "img2", img: "2.jpg" },
        { id: 3, name: "img3", img: "3.jpg" },
       
      ],
       sliderItems_2: [
      
        { id: 1, name: "img4", img: "4.jpg" },
        { id: 2, name: "img5", img: "5.jpg" },
        { id: 3, name: "img6", img: "6.jpg" },
      
      ],
       sliderItems_3: [
        { id: 1, name: "img7", img: "7.jpg" },
        { id: 2, name: "img8", img: "8.jpg" },
        { id: 3, name: "img9", img: "9.jpg" },
      ],
    };
  },
  computed: {
    sliderItemsOrder() {
      return this.order === "first"
        ? this.sliderItems_1
        : this.order === "second"
        ? this.sliderItems_2
        : this.order === "third"
        ? this.sliderItems_3
        : this.sliderItems;
    },
  },
};
</script>
