<template>
  <div class="container">
    <div class="main">
      <div class="main_title">
        <h1>Картины эпохи Возрождения</h1>
      </div>
      <div class="main_auctions">
        <div class="main_item">
          <div class="main_block">
            <img src="assets/painting-63186_1280.png" alt="venera" />
            <div class="main_desc">
              <Modal
                v-show="isShowModal_1"
                @close="toggleModal_1"
                order="first"
              >
                <h2 slot="header">«Рождение Венеры» Сандро Боттичелли</h2>
                <h2 slot="body">
                  Картина итальянского художника тосканской школы Сандро
                  Боттичелли. Представляет собой живопись темперой на холсте
                  размером 172,5 × 278,5 см. В настоящее время хранится в
                  галерее Уффици, Флоренция.
                </h2>
              </Modal>
              <h2 @click="toggleModal_1">
                «Рождение Венеры» Сандро Боттичелли
              </h2>

              <div class="main_price">
                <div class="main_price-buy">
                  <h6 class="main_sale"><s>2 000 000 $</s></h6>
                  <h3 class="main_cost">1 000 000 $</h3>
                </div>
                <!-- <button class="main_btn"><p>Купить</p></button> -->
                <Btn btnText="Купить" />
              </div>
            </div>
          </div>
        </div>
        <div class="main_item">
          <div class="main_block">
            <img
              src="assets/ae973f6678e037cd297053384aa7dca0.png"
              alt="meeting"
            />
            <div class="main_desc">
              <Modal
                v-show="isShowModal_2"
                @close="toggleModal_2"
                order="second"
              >
                <h2 slot="header">«Тайная вечеря» Леонардо да Винчи</h2>
                <h2 slot="body">
                  Mонументальная роспись (ошибочно называемая фреской) работы
                  Леонардо да Винчи, изображающая сцену последней трапезы Христа
                  со своими учениками. Создана в 1495—1498 годы в доминиканском
                  монастыре Санта-Мария-делле-Грацие в Милане.
                </h2>
              </Modal>
              <h2 @click="toggleModal_2">«Тайная вечеря» Леонардо да Винчи</h2>
              <div class="main_price">
                <div class="main_price-buy">
                  <h3 class="main_cost">3 000 000 $</h3>
                </div>
                <!-- <button class="main_btn"><p>Купить</p></button> -->
                <Btn btnText="Купить" />
              </div>
            </div>
          </div>
        </div>
        <div class="main_item">
          <div class="main_block">
            <img src="assets/image-19.png" alt="adam" />
            <div class="main_desc">
              <Modal
                v-show="isShowModal_3"
                @close="toggleModal_3"
                order="third"
              >
                <h2 slot="header">«Сотворение Адама» Микеланджело</h2>
                <h2 slot="body">
                  Фреска Микеланджело, написанная около 1511 года. Фреска
                  является четвёртой из девяти центральных композиций потолка
                  Сикстинской капеллы, посвящённых девяти сюжетам книги Бытия.
                </h2>
              </Modal>
              <h2 @click="toggleModal_3">«Сотворение Адама» Микеланджело</h2>
              <div class="main_price">
                <div class="main_price-buy">
                  <h6 class="main_sale"><s>6 000 000 $</s></h6>
                  <h3 class="main_cost">5 000 000 $</h3>
                </div>
                <!-- <button class="main_btn"><p>Купить</p></button> -->
                <Btn btnText="Купить" />
              </div>
            </div>
          </div>
        </div>
        <div class="main_item main_item--sold">
          <div class="main_block main_block--sold">
            <img src="assets/20152310142330.png" alt="lesson" />
            <div class="main_desc">
              <h2 class="main_name main_name--sold">
                «Урок анатомии» Рембрандт
              </h2>
              <div class="main_price">
                <div class="main_price-buy">
                  <h3 class="main_cost main_cost--sold">Продана на аукционе</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./components/modal.vue";
import Btn from "./components/btn.vue";
export default {
  components: {
    Modal,
    Btn,
  },
  data: () => ({
    isShowModal_1: false,
    isShowModal_2: false,
    isShowModal_3: false,
  }),
  methods: {
    toggleModal_1() {
      this.isShowModal_1 = !this.isShowModal_1;
    },
    toggleModal_2() {
      this.isShowModal_2 = !this.isShowModal_2;
    },
    toggleModal_3() {
      this.isShowModal_3 = !this.isShowModal_3;
    },
  },
};
</script>
<style></style>
