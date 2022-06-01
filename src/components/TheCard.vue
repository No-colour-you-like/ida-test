<template>
  <div class="card">
    <div class="card__image">
      <img :src="data.imageUrl" alt="card-image" class="card__img" />
    </div>
    <div class="card__info">
      <h4 class="card__title">{{ data.title }}</h4>
      <p class="card__text">{{ data.text }}</p>
      <span class="card__price">{{ data.price }} руб.</span>
    </div>
    <div class="card__delete" @click="deleteItem">
      <svg-bin class="card__bin" />
    </div>
  </div>
</template>

<script>
import SvgBin from './common/SvgBin';

export default {
  name: 'TheCard',
  components: {
    SvgBin
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteItem() {
      this.$emit('delete-item', this.data.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.card {
  position: relative;
  height: 423px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(#000, 0.1);
  cursor: pointer;
  transition: 0.5s;
  animation: fade 0.5s;

  &:hover {
    box-shadow: 0 10px 30px rgba(#000, 0.4);
    transform: scale(102%);

    .card__delete {
      display: flex;
    }
  }

  &__image {
    width: 100%;
    height: 200px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  &__text {
    margin-bottom: 16px;
    color: $text-color;
  }

  &__price {
    color: $text-color;
    font-size: 24px;
    margin-top: auto;
  }

  &__info {
    height: calc(100% - 200px);
    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;
  }

  &__delete {
    display: none;
    position: absolute;
    top: -16px;
    right: -16px;
    width: 32px;
    height: 32px;
    background: $red-color;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
  }

  &__bin {
    width: 16px;
    height: 16px;
  }
}
</style>