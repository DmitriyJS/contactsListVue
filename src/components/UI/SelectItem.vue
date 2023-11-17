<template>
  <div class="custom-select">
    <span class="select-title" v-if="wide">Категория</span>
    <div :class="['dropdown', { wide }]">
      <button class="dropdown__button" @click.prevent="dropDownBtnHandler">
        <b v-if="selectedValue.toUpperCase() === 'ВСЕ'">{{ selectedValue }}</b>
        <div v-else>
          {{ selectedValue }}
        </div>
      </button>
      <ul v-if="listIsOpened" class="dropdown__list">
        <li
          :style="{
            pointerEvents: item == 'Все' && wide ? 'none' : 'all',
          }"
          v-for="item in textItems"
          @click.prevent="dropDownItemHandler"
          :class="[
            'dropdown__list-item',
            { selected: selectedValue.toLowerCase() === item.toLowerCase() },
          ]"
          data-value="travel"
        >
          <!-- <b v-if="item === 'Все'">{{ wide ? 'Не выбрано' : item }}</b> -->
          <div
            :style="{
              fontWeight: item === 'Все' && !wide ? 700 : 400,
              color: item === 'Все' && wide ? '#A9A9A9' : '#545454',
              pointerEvents: item == 'Все' && wide ? 'none' : 'all',
            }"
          >
            {{ wide && item == "Все" ? "Не выбрано" : item }}
          </div>
        </li>
      </ul>
      <input
        type="text"
        name="select-category"
        class="dropdown__input-hidden"
        v-model="selectedValue"
      />
    </div>
    <span class="select-error" v-if="wide">Поле не можеть быть пустым</span>
  </div>
</template>

<script>
export default {
  props: {
    wide: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      listIsOpened: false,
      selectedValue: `${this.wide ? "НЕ ВЫБРАНО" : "ВСЕ"}`,
      textItems: ["Все", "Коллеги", "Родственники"],
    };
  },
  methods: {
    dropDownBtnHandler() {
      this.listIsOpened = !this.listIsOpened;
    },
    dropDownItemHandler(e) {
      this.selectedValue = e.target.innerText.toUpperCase();
      this.listIsOpened = false;
    },
  },
};
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .select-title {
    color: $primary-txt;
    font-size: 14px;
    font-weight: 700;
  }

  .select-error {
    position: absolute;
    bottom: -15px;
    right: 0;
    font-size: 10px;
    color: $error;
    font-weight: 700;
  }
}
.dropdown {
  position: relative;
  width: 235px;
  font-size: 14px;

  &.wide {
    width: 408px;
  }
}

.dropdown__button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  background: transparent;
  border-radius: 4px;
  /* border: 1px solid #2f80ed; */
  border: 1px solid $neutral;
  height: 40px;
  padding-left: 8px;
  cursor: pointer;
  text-transform: uppercase;

  &::after {
    content: "\25BE";
    position: absolute;
    top: 50%;
    font-size: 20px;
    color: $secondary-txt;
    transform: scaleX(1.5);
    pointer-events: none;
    top: 18%;
    right: 10px;
  }
}

.dropdown__list {
  position: absolute;
  left: 0;
  top: 48px;
  border-radius: 6px;
  width: 100%;
  box-shadow: 0px 0px 6px 0px #94b5e159;
  .dropdown__list-item {
    position: relative;
    display: flex;
    padding: 10px 8px 10px 16px;
    height: 40px;
    align-items: center;
    cursor: pointer;
    color: $primary-txt;
    text-transform: uppercase;
    background: $white-1;
    z-index: 1;

    &:hover {
      background: $secondary-hover;
    }

    &.selected:after {
      content: "\2714";
      position: absolute;
      top: 10px;
      right: 10px;
      color: green;
    }
  }
}

.dropdown__input-hidden {
  display: none;
}
</style>
