<template>
  <label>
    <span class="input-title">{{ title }}</span>
    <input
      :class="{ 'inp-error': err }"
      type="text"
      :value="modelValue"
      @input="inputHandler"
      @blur="blurHandler"
      @focus="resetError"
      v-bind="$attrs"
    />
    <transition name="slide-fade">
      <error-icon v-if="err.length" class="error-icon" />
    </transition>
    <span v-if="err.length" class="error">{{ err }}</span>
  </label>
</template>

<script>
import ErrorIcon from "@/components/icons/ErrorIcon.vue";
export default {
  props: {
    rules: {
      type: Array,
      required: true,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  components: { ErrorIcon },
  data() {
    return {
      err: "",
    };
  },
  methods: {
    test() {
      console.log(`test`);
    },
    resetError() {
      this.err = "";
    },
    inputHandler(event) {
      this.$emit("update:modelValue", `${event.target.value}`);
    },

    blurHandler() {
      let error = "";
      this.rules.forEach((rule) => {
        if (!error) {
          error = rule(this.modelValue);
          if (error.length) {
            this.err = error;
            this.$emit("onerror", true);
          } else {
            this.err = "";
            this.$emit("onerror", false);
          }
        }
      });
    },
  },
  // components: { ButtonItem },
};
</script>

<style scoped lang="scss">
label {
  position: relative;
  max-width: 576px;
  min-width: 312px;

  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  font-weight: 700;

  .input-title {
    font-size: 14px;
    color: $primary-txt;
  }

  input {
    width: 408px;
    height: 40px;
    padding: 8px;
    color: #545454;
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
    border: 1px solid $neutral;
    background: $white-1;
    max-width: 408px;
    transition: 0.3s;

    &.inp-error {
      border-color: $error;
    }

    &::placeholder {
      color: $secondary-txt;
    }
  }

  .error {
    position: absolute;
    bottom: -15px;
    right: 0;
    font-size: 10px;
    color: $error;
  }

  .error-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
}

/* Анимации появления и исчезновения могут иметь */
/* различные продолжительности и динамику.       */
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(-110px);
  opacity: 0;
}
</style>
