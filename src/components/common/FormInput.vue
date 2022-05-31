<template>
  <div class="form-input">
    <span v-if="$slots.default" :class="required ? 'required' : ''" class="form-input__title">
      <slot></slot>
    </span>
    <input
      v-model="input"
      v-if="type === 'input'"
      type="text"
      :class="{ 'input-error': error }"
      class="form-input__input"
      :placeholder="placeholder"
    />
    <textarea
      v-if="type === 'textarea'"
      v-model="input"
      :placeholder="placeholder"
      name="textarea"
      id="textarea"
      class="form-input__textarea"
    ></textarea>
    <div v-if="error" class="form-input__error">Поле является обязательным</div>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    modelValue: {
      type: [String, null],
      required: true
    },

    placeholder: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'input'
    },
    error: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: true
    },
    price: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      input: ''
    };
  },
  watch: {
    modelValue(value) {
      if (this.price && value?.length > 0) {
        if (value?.length > 0 && value.replace(/[^\d]/g, '') === '') {
          this.input = '';
        } else {
          const numberWithSpaces = x => x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          const newValue = value?.replace(/\s/g, '');

          this.input = numberWithSpaces(newValue) || null;
        }
      } else {
        this.input = value;
      }
    },

    input(value) {
      this.$emit('update:modelValue', value);
    }
  },
  methods: {
    inputNumbersOnly() {}
  }
};
</script>

<style lang="scss" scoped>
.form-input {
  position: relative;

  &__title {
    display: inline-block;
    position: relative;
    font-size: 10px;
    color: #49485e;
    margin-bottom: 4px;
  }

  &__input,
  &__textarea {
    border: none;
    box-shadow: 0 0 10px rgba(#000, 0.1);
    padding: 10px 16px;
    border-radius: 8px;
    outline: none;
  }

  &__input {
    width: 100%;
  }

  &__textarea {
    width: 100%;
    height: 108px;
    resize: none;
  }

  &__error {
    position: absolute;
    left: 0;
    bottom: -14px;
    font-size: 8px;
    color: #ff8484;
  }

  .required {
    &::after {
      content: '';
      position: absolute;
      right: -6px;
      top: 0;
      width: 4px;
      height: 4px;
      background: #ff8484;
      border-radius: 50%;
    }
  }

  .input-error {
    border: 1px solid #ff8484;
  }
}
</style>