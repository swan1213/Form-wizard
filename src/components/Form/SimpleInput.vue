<template>
  <div class="flex flex-col">
    <input
      type="text"
      v-model="modelValue"
      class="mt-2 p-2 border-2 rounded-lg"
      :class="[isError(validator) ? 'border-red-400' : '', extraClass]"
      @input="handleInput"
    />
    <div class="mt-1">
      <ValidationErrorText
        v-if="isError(validator)"
        :errorText="getValidatorErrorMessage(validator)"
      />
      <div v-else style="height: 20px"></div>
    </div>
  </div>
</template>

<script>
import ValidationErrorText from "./ValidationErrorText.vue";

export default {
  name: "SimpleInput",
  props: {
    modelValue: {
      required: true,
    },
    label: {
      required: false,
      type: String,
    },
    validator: {
      required: false,
    },
    extraClass: {
      required: false,
      type: String,
    },
  },
  components: {
    ValidationErrorText,
  },

  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("onInput", e.target.value);
    },
    isError(validator) {
      return validator?.$error;
    },
    getValidatorErrorMessage(validator) {
      if (!validator?.$errors?.[0]) return "";

      const label = this.label || validator.$errors[0].$property;
      switch (validator.$errors[0].$validator) {
        case "required": {
          return `${label} is required`;
        }
        case "integer": {
          return `${label} must be a number`;
        }
        case "minValue": {
          return `${label} must be greater than ${validator.$errors[0].$params.min}`;
        }
        default:
          return `${label} field has an error`;
      }
    },
  },
};
</script>

<style></style>
