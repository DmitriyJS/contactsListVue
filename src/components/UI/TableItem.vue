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
        <div class="table-row" v-for="n in 5">
          <div class="table-row__name">
            <div class="name-logo">Д</div>
            Доставка Андрей Стоянов
          </div>
          <div class="wrapper">
            <div class="table-row__phone">+7(987)654-78-10</div>
            <div class="table-row__email">nelfeelingood1@gmail.com</div>
          </div>

          <div class="table-row__date">22.09.23</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>
<!-- EAF2FD -->
