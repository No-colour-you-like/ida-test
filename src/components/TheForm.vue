<template>
  <form class="form">
    <div class="form__inputs">
      <form-input v-model="formData.title" placeholder="Введите наименование товара" :error="errors.title">
        Наименование товара
      </form-input>
      <form-input
        v-model="formData.text"
        type="textarea"
        placeholder="Введите описание товара"
        :required="false"
        :error="false"
      >
        Описание товара
      </form-input>
      <form-input v-model="formData.imageUrl" placeholder="Введите ссылку" :error="errors.imageUrl">
        Ссылка на изображение товара
      </form-input>
      <form-input v-model="formData.price" placeholder="Введите цену" :error="errors.price" :price="true">
        Цена товара
      </form-input>
    </div>
    <button
      :class="isFormValid ? 'enabled-btn' : 'disabled-btn '"
      class="form__button"
      :disabled="!isFormValid"
      @click="handleSubmit"
    >
      Добавить товар
    </button>
  </form>
</template>

<script>
import FormInput from './common/FormInput';

export default {
  name: 'TheForm',
  components: {
    FormInput
  },
  data() {
    return {
      formData: {
        title: null,
        text: null,
        imageUrl: null,
        price: null
      },
      errors: {
        title: false,
        imageUrl: false,
        price: false
      },
      newItem: {}
    };
  },
  watch: {
    'formData.title': {
      handler(value) {
        this.checkInputLength('title', value);
      },
      deep: true
    },
    'formData.imageUrl': {
      handler(value) {
        this.checkInputLength('imageUrl', value);
      },
      deep: true
    },
    'formData.price': {
      handler(value) {
        this.checkInputLength('price', value);
      },
      deep: true
    }
  },
  computed: {
    isFormValid() {
      const requiredInputs = [this.formData.title, this.formData.imageUrl, this.formData.price];
      return requiredInputs.every(item => item !== '' && item !== null);
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      const price = this.formData.price.replace(/[^\d]/g, '');

      this.newItem = {};
      this.newItem = { ...this.formData, id: Date.now(), price: +price };

      Object.keys(this.formData).forEach(item => {
        this.formData[item] = null;
      });

      this.$emit('add-new-item', this.newItem);
    },

    checkInputLength(itemName, value) {
      this.errors[itemName] = value === '';
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 332px;
  min-width: 332px;
  align-self: start;
  border-radius: 5px;
  padding: 24px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(#000, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    align-self: auto;
    margin-bottom: 30px;
  }

  &__inputs {
    .form-input {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 24px;
      }

      ::placeholder {
        color: #b4b4b4;
      }
    }
  }

  &__button {
    width: 100%;
    padding: 10px;
    border-radius: 11px;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .disabled-btn {
    color: #b4b4b4;
    background: #eeeeee;
  }

  .enabled-btn {
    background: #7bae73;
    transition: 0.3s;

    &:hover {
      background: rgb(85, 132, 23);
    }
  }
}
</style>