<template>
  <div class="wrapper">
    <div class="container">
      <the-header @sort-by="sortBy" />
      <main class="main">
        <the-form @add-new-item="addNewItem" />
        <div :class="{ 'content-center': isLoading }" class="main__content">
          <template v-if="!isLoading">
            <transition-group name="list" tag="ul">
              <the-card v-for="card in cards" :key="card.id" :data="card" @delete-item="deleteItem" />
            </transition-group>
          </template>
          <div v-else class="main__loader"></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheForm from './components/TheForm';
import TheCard from './components/TheCard';

import defaultCards from './data';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheForm,
    TheCard
  },
  defaultCards,
  data() {
    return {
      cards: null,
      isLoading: true
    };
  },
  watch: {
    cards: {
      handler(value) {
        localStorage.setItem('cards', JSON.stringify(value));
      },
      deep: true
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem('cards'))?.length > 0) {
      this.cards = JSON.parse(localStorage.getItem('cards'));
    } else {
      this.cards = this.$options.defaultCards;
    }

    this.sortBy(this.cards);

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  methods: {
    addNewItem(value) {
      this.cards.unshift(value);
    },

    deleteItem(id) {
      this.cards = this.cards.filter(card => card.id !== id);
    },

    sortBy(value) {
      if (value?.length > 0) {
        if (value === 'price-min') {
          this.cards = this.cards.sort((a, b) => a.price - b.price);
        } else if (value === 'price-max') {
          this.cards = this.cards.sort((a, b) => b.price - a.price);
        } else {
          this.cards = this.cards.sort((a, b) => a.title.localeCompare(b.title));
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}

.wrapper {
  padding: 32px 32px 0;
  background: #faf9f7;

  @media (max-width: 768px) {
    padding: 16px 16px 0;
  }
}

.container {
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
}

.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  &__loader {
    width: 80px;
    height: 80px;
    border: 4px solid $red-color;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
  }

  &__content {
    width: calc(100% - 332px);
    margin-left: 25px;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      padding: 0 30px;
    }

    ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      padding: 0;
      margin: 0;

      @media (max-width: 1440px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 1200px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
