<template>
  <div class="subheader">
    <div class="container">
      <div class="subheader-inner">
        <select-item></select-item
        ><button-item :rounded="true" @click="$emit('opened')" >
          <span style="font-size: 22px">+</span>Добавить контакт</button-item
        >
      </div>
    </div>
  </div>
</template>

<script>
import ButtonItem from "@/components/UI/ButtonItem";
import SelectItem from "@/components/UI/SelectItem.vue";


export default {
  components: {
    ButtonItem,
    SelectItem
  },
};
</script>

<style scoped lang="scss">
.subheader {
  width: 100%;
  border: 1px solid $secondary-hover;
  background: $white-3;

  .subheader-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
  }
}
</style>
