<template>
  <span @click="onClick" class="checkbox">
    <span v-if="modelValue === 'partially_checked'" />
    <svg
      v-else-if="modelValue"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean | 'partially_checked',
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

function onClick() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped lang="scss">
.checkbox {
  display: inline-flex;
  width: 20px;
  height: 20px;
  border: 1px solid $border-color;
  border-radius: $border-radius-sm;
  vertical-align: middle;
  margin: 0 5px;
  text-align: center;

  span {
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50%;
    margin: auto;
  }
}
</style>