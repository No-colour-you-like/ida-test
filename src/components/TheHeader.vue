<template>
  <header class="header">
    <h1 class="header__title">Добавление товара</h1>
    <select v-model="sortBy" class="header__select">
      <option value="name">По наименованию</option>
      <option value="price-min">По цене (min)</option>
      <option value="price-max">По цене (max)</option>
    </select>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      sortBy: 'name'
    };
  },
  watch: {
    sortBy(value) {
      this.$emit('sort-by', value);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  &__title {
    font-size: 28px;
  }

  &__select {
    padding: 10px 16px;
    outline: none;
    background: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(#000, 0.1);
    cursor: pointer;
  }
}
</style>