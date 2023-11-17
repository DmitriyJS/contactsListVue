<template>
  <div class="container">
    <div class="contacts-table">
      <div class="normal-table">
        <div class="table-head">
          <div class="table-head__name">КОНТАКТ</div>
          <div class="wrapper">
            <span class="table-head__phone">ТЕЛЕФОН</span>
            <span class="small"> / </span>
            <span class="table-head__email">EMAIL</span>
          </div>
          <div class="table-head__date">СОЗДАН</div>
        </div>
        <transition-group name="list" tag="div">
          <div
            class="table-row"
            v-for="item in $store.getters.filteredContatcs"
            @click="setActiveContact(item)"
          >
            <div class="table-row__name">
              <div class="name-logo">{{ item.name[0] }}</div>
              {{ item.name }}
            </div>
            <div class="wrapper">
              <div class="table-row__phone">{{ item.phone }}</div>
              <div class="table-row__email">{{ item.email }}</div>
            </div>
            <div class="table-row__date">{{ item.createdAt }}</div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    setActiveContact(e) {
      this.$store.commit("setActiveContact", e);
    },
  },
  // components: { ButtonItem },
};
</script>

<style lang="scss">
.contacts-table {
  margin-top: 16px;

  .table-head,
  .table-row {
    display: grid;
    align-items: center;
    width: 100%;
    /* grid-template-columns: minmax(150px, 296px) 112px 208px 112px; */
    grid-template-columns: minmax(150px, 296px) 112px 208px 112px;
    gap: 88px;
    font-size: 12px;

    .table-row__name {
      display: flex;
      gap: 8px;
      font-size: 14px;

      .name-logo {
        min-width: 24px;
        height: 24px;
        background: $primary;
        border-radius: 50%;
        font-size: 12px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
      }
    }

    .table-row__date {
      font-size: 14px;
      text-align: right;
    }
  }

  .table-head {
    font-size: 10px;
    color: $neutral-txt;
    padding: 8px 0;
  }
  .table-head__date {
    text-align: right;
  }

  .table-row {
    height: 48px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.25s;

    &:hover {
      background: $secondary-hover;
    }
  }

  .table-row:not(:last-child) {
    border-bottom: 1px solid $secondary-hover;
  }
}

.small-table {
  display: none;
}

@media screen and (max-width: 576px) {
  .wrapper {
    display: block;
  }
}

@media screen and (min-width: 577px) {
  .small {
    display: none;
  }

  .wrapper {
    display: contents;
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
<!-- EAF2FD -->
