<template>
  <div class="main-container">
    <ListsSettings />
    <List />
  </div>
</template>

<script setup lang="ts">
import List from '@/components/lists/List.vue'
import ListsSettings from '@/components/lists/ListsSettings.vue'
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  justify-content: space-around;
}
</style>