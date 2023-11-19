<template>
  <header-item>
    <logo-icon></logo-icon> <span>CПИСОК КОНТАКТОВ</span>
  </header-item>
  <subheader-item @opened="openAdditionForm" />
  <table-item @chosen="openContact" />

  <form-item
    :contact="$store.state.activeContact"
    @closed="formIsVisible = false"
    v-if="formIsVisible"
    :title="formTitle"
  ></form-item>
  <router-view />
</template>

<script>
import TableItem from "@/components/UI/TableItem";
import LogoIcon from "@/components/icons/LogoIcon";
import HeaderItem from "./components/HeaderItem.vue";
import SubheaderItem from "./components/SubheaderItem.vue";
import FormItem from "./components/UI/FormItem.vue";

import { mapActions } from "vuex";

export default {
  components: {
    TableItem,
    HeaderItem,
    LogoIcon,
    SubheaderItem,
    FormItem,
  },
  data() {
    return {
      formIsVisible: false,
      formTitle: "Контакт",
    };
  },
  methods: {
    openAdditionForm(e) {
      this.formTitle = "Новый контакт"
      this.formIsVisible = true;
      this.$store.commit("setActiveContact", {});
    },
    openContact() {
      this.formTitle = "Контакт"
      this.formIsVisible = true;
    },
  },
  created() {
    this.$store.dispatch("getContacts");
  },
};
</script>

<style lang="scss">
.container {
  max-width: 990px;
  margin: 0 auto;
}
</style>
