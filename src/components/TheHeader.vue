<template>
  <header class="header">
    <h1 class="header__title">Добавление товара</h1>
    <div class="select__wrapper">
      <select v-model="sortBy" class="select">
        <option value="name">По наименованию</option>
        <option value="price-min">По цене (min)</option>
        <option value="price-max">По цене (max)</option>
      </select>
      <svg-arrow class="select__arrow" />
    </div>
  </header>
</template>

<script>
import SvgArrow from './common/SvgArrow';

export default {
  name: 'TheHeader',
  components: {
    SvgArrow
  },
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

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
}

.select {
  padding: 10px 16px;
  outline: none;
  background: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(#000, 0.1);
  cursor: pointer;
  text-indent: 1px;
  text-overflow: '';
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #b4b4b4;
  padding-right: 30px;

  &__wrapper {
    position: relative;
  }

  &__arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
  }
}
</style>