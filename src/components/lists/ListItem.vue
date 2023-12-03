<template>
  <div v-if="listItem.state" class="list-item">
    <div class="info">
      <span>{{ listItem.name }}</span>
      <button @click="onBtnClick">
        {{ isSorted ? 'Перемешять' : 'Сортировать' }}
      </button>
    </div>
    <template v-if="isSorted">
      <template v-for="item of listItem.childes" :key="item.id">
        <div v-if="item.isChecked" class="content">
          <span
            @click="onContentClick(item.id)"
            v-for="num of item.count"
            :key="num"
            :style="{ background: item.color }"
          />
        </div>
      </template>
    </template>
    <div v-else class="content">
      <span
        v-for="(item, index) of shuffledContent"
        @click="onContentClick(item.id, index)"
        :key="`${item.id} + ${index}`"
        :style="{ background: item.color }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { IEntity, IShuffledColors } from '@/shared/interfaces/listTypes'
import { getRandomInteger } from '@/shared/helpers/common.helper'
interface Props {
  listItem: IEntity,
}
const props = defineProps<Props>()

const isSorted = ref<boolean>(true)
const withShuffle = ref<boolean>(true)
const shuffledContent = ref<IShuffledColors[]>([])

function onBtnClick() {
  if (isSorted.value) {
    generateShuffleContent()
  }
  isSorted.value = !isSorted.value
}

function generateShuffleContent() {
  const shuffledItems: IShuffledColors[] = []
  props.listItem.childes.forEach(child => {
    if (child.isChecked) {
      shuffledItems.push(...new Array(child.count).fill({
        id: child.id,
        color: child.color
      }))
    }
  })
  for (let i = shuffledItems.length - 1; i > 0; i--) {
    const randomInt = getRandomInteger(0, i);
    [ shuffledItems[i], shuffledItems[randomInt] ] = [ shuffledItems[randomInt], shuffledItems[i] ]
  }
  shuffledContent.value = shuffledItems;
}

function onContentClick(id: string, index?: number) {
  const targetItem = props.listItem.childes.find((item) => item.id === id)

  if (targetItem) {
    targetItem.count--
  }

  if (!isSorted.value && typeof index === "number" && index >= 0) {
    shuffledContent.value.splice(index, 1)
    withShuffle.value = false
  }
}

watch(() => props.listItem.childes, (newVal, oldValue) => {
  if (!isSorted.value && withShuffle.value) {
    generateShuffleContent();
  }
  withShuffle.value = true;
}, {
  deep: true,
})
</script>

<style scoped lang="scss">
.list-item {
  padding: 10px;
  border: 1px solid $border-color;

  .info {
    display: flex;
    justify-content: space-between;
  }

  .content {
    margin: 10px 0;
    line-height: 12px;
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 0.5px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
}
</style>