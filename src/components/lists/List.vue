<template>
  <div class="list">
    <ListItem v-for="item of listsData" :key="item.id" :list-item="item" />
  </div>
</template>

<script setup lang="ts">
import ListItem from '@/components/lists/ListItem.vue'
import listsData from '@/data/lists/lists'
</script>

<style scoped lang="scss">
.list {
  width: 350px;
  padding: 25px;
  border: 1px solid $border-color;
  border-radius: $border-radius-sm;
}
</style>
