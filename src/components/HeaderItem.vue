<template>
  <div class="header"><slot></slot></div>
</template>

<style  lang="scss">
.header {
  width: 100%;
  background: $black-2;
  background: $black-2;
  height: 48px;
  padding: 0px 48px;
  display: flex;
  gap: 16px;
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  color: $white-2;
}

@media screen and (max-width: 768px) {
  .header {
    font-size: 14px;
    height: 40px;
    padding: 8px 12px;
  }
}
</style>
