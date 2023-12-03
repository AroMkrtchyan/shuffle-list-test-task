<template>
  <div class="list-settings-item">
    <ListArrow v-model="isOpenListDropdown" />
    <CheckboxInput v-model="currentListItem.state" />
    {{ currentListItem.name }}

    <div v-if="isOpenListDropdown" class="child-container">
      <ul>
        <li v-for="child of listItem.childes" :key="child.id">
          <CheckboxInput v-model="child.isChecked" />
          {{ child.name }}
          <div class="configs">
            <input
              type="number"
              :min="minCount"
              :max="maxCount"
              v-model="child.count"
              @input="validateCount($event, child)"
            />
            <input type="color" v-model="child.color" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { IEntityChild, IEntity } from '@/shared/interfaces/listTypes'

import CheckboxInput from '@/components/shared/CheckboxInput.vue'
import ListArrow from '@/components/icons/DropdownArrow.vue'
import listData from '@/data/lists/lists'

const minCount = 0
const maxCount = 50
interface Props {
  listItem: IEntity
}
const props = defineProps<Props>()
const currentListItem = listData.find((item) => item.id === props.listItem.id) as IEntity

const isOpenListDropdown = ref<boolean>(false)

function validateCount(e: any, child: IEntityChild) {
  if (e.target.value > maxCount) {
    e.target.value = maxCount
    child.count = maxCount
  }
  if (e.target.value < minCount) {
    e.target.value = minCount
    child.count = minCount
  }
}

watch(
  () => props.listItem.childes,
  (newValue) => {
    const isAllChecked = newValue.every((item) => item.isChecked === newValue[0].isChecked)
    currentListItem.state = isAllChecked ? newValue[0].isChecked : 'partially_checked'
  },
  {
    deep: true
  }
)
watch(
  () => props.listItem.state,
  (newValue) => {
    if (typeof newValue === 'boolean') {
      props.listItem.childes.forEach((item) => (item.isChecked = newValue))
    }
  }
)
</script>

<style scoped lang="scss">
.list-settings-item {
  margin-bottom: 5px;

  .child-container {
    padding: 10px 0 10px 50px;

    ul {
      li {
        margin: 5px 0;

        .configs {
          display: flex;
          column-gap: 10px;
          padding-left: 100px;

          span {
            display: inline-block;
            vertical-align: center;
            margin: 0 2px;
            cursor: pointer;
          }
          input[type='number'] {
            width: 25px;
            height: 20px;
            border: none;
            padding: 2px;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            &:focus-visible {
              outline: none;
              border: 1px solid $border-color;
              overflow: hidden;
            }
          }

          input[type='color'] {
            cursor: pointer;
            border: none;
            width: 20px;
            height: 20px;
            border-radius: $border-radius-md;
            overflow: hidden;

            &::-webkit-color-swatch-wrapper {
              padding: 0;
            }

            &::-webkit-color-swatch {
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>
