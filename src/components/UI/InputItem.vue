<template>
  <label>
    <span class="input-title">{{ title }}</span>
    <input
      type="text"
      :value="modelValue"
      @input="inputHandler"
      @blur="blurHandler"
      v-bind="$attrs"
    />
    <span v-if="err.length" class="error">{{ err }}</span>
  </label>
</template>

<script>
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
    // mask: {
    //   type: String,
    //   required: false,
    //   default: "",
    // },
  },
  data() {
    return {
      err: "",
    };
  },
  methods: {
    test() {
      console.log(`test`);
    },
    inputHandler(event) {
      this.$emit("update:modelValue", `${event.target.value}`);
    },

    blurHandler() {
      this.rules.forEach((rule) => {
        let val = rule(this.modelValue);
        if (val.length) {
          this.err = val;
          this.$emit("onerror", true);
        } else {
          this.err = "";
          this.$emit("onerror", false);
        }
      });
    },
  },
  // components: { ButtonItem },
};
</script>

<style lang="scss">
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
}
</style>
