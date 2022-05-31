<template>
  <div class="wrapper">
    <div class="container">
      <TheHeader @sort-by="sortBy" />
      <main class="main">
        <TheForm @add-new-item="addNewItem" />
        <div class="main__content">
          <TheCard v-for="card in cards" :key="card.id" :data="card" @delete-item="deleteItem" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheForm from './components/TheForm';
import TheCard from './components/TheCard';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheForm,
    TheCard
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Polaroid now white',
          text: 'Polaroid Now позволяет вам сосредоточиться на текущем моменте.В отличие от своих предшественников - камера оснащена объективом, который автоматически переключает фокусное расстояние , что идеально для создания классных портретов.',
          price: 5000,
          imageUrl: 'https://wonderfoto.ru/upload/iblock/e10/e1035d37f752239875b74cbb87c76b2b.jpg'
        },
        {
          id: 2,
          title: 'Polaroid Supercolor 635CL',
          text: 'Как и большинство моделей Polaroid 600 серии эта камера проста в использовании и долговечна. Раскрывающийся формат камеры позволяет носить ее на шее или на плече с уверенностью в сохранности аппарата.',
          price: 6500,
          imageUrl:
            'https://cdn.shopify.com/s/files/1/0073/7276/7316/products/635front_2c63778b-a814-411e-bff7-17f42ecd9642@2x.jpg'
        },
        {
          id: 3,
          title: 'Polaroid 636 Close Up',
          text: 'Polaroid 636 Close Up - модель 90х годов. Минимум настроек, корпус сделан из ударопрочной пластмассы. Самая распространённая модель в России.',
          price: 2990,
          imageUrl:
            'https://wonderfoto.ru/upload/iblock/f5d/xf5ddb2d885fdb0bd98c391cceb82dae7.jpg.pagespeed.ic.PuhWJ_70J5.webp'
        }
      ]
    };
  },
  methods: {
    addNewItem(value) {
      this.cards.unshift(value);
    },

    deleteItem(id) {
      this.cards = this.cards.filter(card => card.id !== id);
    },

    sortBy() {
      console.log(this.cards);
      // this.cards = this.cards.sort(card => console.log(card));
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  padding: 32px 32px 0;
  background: #faf9f7;
}

.container {
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
}

.main {
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  &__content {
    width: calc(100% - 332px);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-left: 25px;

    @media (max-width: 1440px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
