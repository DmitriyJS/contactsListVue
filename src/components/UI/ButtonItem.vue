<template>
  <button :class="{ transparent, rounded }">
    <delete-icon v-if="transparent" />
    <save-icon v-if="!transparent && !rounded" />
    <slot></slot>
  </button>
</template>

<script>
import DeleteIcon from "../icons/DeleteIcon.vue";
import SaveIcon from "../icons/SaveIcon.vue";
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  components: { SaveIcon, DeleteIcon },
};
</script>

<style scoped lang="scss">
button {
  display: flex;
  height: 32px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: $primary;
  transition: 0.25s;

  &:hover {
    background: $primary-hover;
  }
}

.transparent {
  background: transparent;
  font-size: 12px;
  font-weight: 400;
  color: $blue-2;

  &:hover {
    background: $secondary-hover;
  }
}

.rounded {
  display: flex;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 28px;
  border: 1px solid $secondary;
  background: transparent;
  color: $secondary;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background: $secondary-hover;
  }
}
</style>
