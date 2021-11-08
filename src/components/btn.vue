<template>
  <div class="btn-container">
    <button @click="onClick">
      <span v-if="!isLoading" class="text">{{ isClicked ? 'В корзине' : btnText }}</span>
      <span v-if="isLoading" role="status" class="spinner-border">
        <span class="sr-only">Spinning</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String
    }
  },
  data() {
    return {
      isLoading: false,
      isClicked: false
    };
  },
  methods: {
    async onClick() {
      this.isClicked = this.isLoading = true
      await this.delay(2000);
      this.isLoading = false;
    },
    delay(ms) {
      const doDelay = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
      return doDelay.then(() => {
        return
      });
    },
  },
};
</script>

<style lang="scss">
.spinner-border {
    color: white;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25rem solid;
  border-right: 0.25rem solid transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}

@keyframes spinner-border {
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.btn-container {
  button {
     background: #403432;
    border-radius: 0px;
    border: none;
    height: 48px;
    width: 122px;
    margin-top: 15px;
    cursor: pointer;
    .text {
      font-family: "Merriweather";
      color: #ffffff;
      display: block;
      text-align: center;
      align-items: center;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
