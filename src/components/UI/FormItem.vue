<template>
  <div class="form-wrapper">
    <header-item class="form-header">
      <button @click="$emit('closed')" class="close-btn">X</button>
      <div v-if="!contact.name" class="add-contact">
        <add-icon />
        Добавить контакт
      </div>
      <div v-else class="header-contact__name">
        <div class="header-contact__logo">{{ contact.name[0] }}</div>
        {{ contact.name }}
      </div>
    </header-item>
    <form @submit.prevent>
      <h1 class="form-title">{{ title }}</h1>
      <div class="form-items">
        <input-item
          :rules="[rules.notEmpty, rules.tooShort]"
          :title="'Имя'"
          :placeholder="'Например «Андрей»...'"
          v-model="name"
          @onerror="errorHandler"
        />
        <input-item
          :rules="[rules.notEmpty, rules.isPhone]"
          :title="'Номер'"
          :placeholder="'+7(___)-___-__-__'"
          v-maska
          data-maska="+7(###)-###-##-##"
          v-model="phone"
          @onerror="errorHandler"
        />
        <input-item
          :rules="[rules.notEmpty, rules.isEmail]"
          :title="'Email'"
          :placeholder="'Например «pochta@domain.ru»...'"
          v-model="email"
          @onerror="errorHandler"
        />
        <select-item :wide="true" v-model="category" />
        <div class="label" v-if="contact.createdAt">
          <span class="input-title">Создан</span>
          <div class="form-date">{{ contact.createdAt }}</div>
        </div>
      </div>
      <div class="buttons">
        <button-item @click="saveBtnHandler">Сохранить</button-item>
        <button-item v-if="contact.createdAt" :transparent="true"
          >Удалить</button-item
        >
      </div>
    </form>
  </div>
</template>

<script>
import HeaderItem from "../HeaderItem.vue";
import ButtonItem from "./ButtonItem.vue";
import InputItem from "./InputItem.vue";
import SelectItem from "./SelectItem.vue";
import AddIcon from "../icons/AddIcon.vue";
export default {
  components: { InputItem, SelectItem, ButtonItem, HeaderItem, AddIcon },
  props: {
    title: {
      type: String,
      default: "Контакт",
    },
    contact: {
      type: Object,
      default: {
        name: "",
        email: "",
        phone: "",
        category: "",
        createdAt: "",
      },
    },
  },
  data() {
    return {
      name: this.contact.name || "",
      email: this.contact.email || "",
      phone: this.contact.phone || "",
      category: this.contact.category || "",
      isErr: false,

      rules: {
        notEmpty: (val) => (!!val ? "" : "Не может быть пустым"),
        tooShort: (val) => ((val || "").length > 1 ? "" : "Мало символов"),
        isPhone: (val) =>
          val.replace(/[^0-9]/g, "").length > 10 ? "" : "Неверный номер",
        isEmail: (val) =>
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? "Некорректный e-mail" : "",
      },
    };
  },
  methods: {
    saveBtnHandler() {
      if (
        [this.name, this.phone, this.category, this.email].some(
          (el) => !el.length
        ) ||
        this.isErr
      ) {
        return;
      }
      const obj = {
        name: this.name,
        email: this.email,
        phone: this.phone.replace(/[^0-9]/g, ""),
        category: this.category,
      };

      console.log(obj);
    },
    validate() {},
    errorHandler(e) {
      console.log(e, `asd`);
      this.isErr = e;
    },
  },
};
</script>

<style lang="scss">
.form-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: $white-1;

  .form-header {
    justify-content: center;
  }
  form {
    box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
    max-width: 704px;
    min-width: 352px;
    min-height: 461px;
    max-height: 493px;
    margin: 0 auto;
    padding: 48px 64px 64px 64px;
    .form-title {
      margin-bottom: 24px;
    }

    .form-items {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .buttons {
      display: flex;
      margin: 0 auto;
      margin-top: 32px;
      width: max-content;
      gap: 10px;
    }
  }
}

.close-btn {
  background: transparent;
  color: $white-1;
  font-weight: 400;
  position: absolute;
  right: 32px;
  width: 30px;
  text-align: center;

  &:hover {
    background: #3b3a3a;
  }
}

.label {
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

  .form-date {
    color: $primary-txt;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    width: 408px;
    max-width: 408px;
  }
}
.add-contact {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-contact__name {
  display: flex;
  gap: 8px;
  .header-contact__logo {
    min-width: 24px;
    height: 24px;
    background: $primary;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
}
</style>
