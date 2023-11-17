<template>
  <div class="form-wrpapper">
    <header-item><slot></slot></header-item>
  </div>
</template>

<script>
import HeaderItem from "../HeaderItem.vue";

export default {

  components: { HeaderItem },

  
};
</script>

<style scoped lang="scss"></style>
