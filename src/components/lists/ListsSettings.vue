<template>
  <div class="settings-container">
    <ListsSettingsItem
      v-for="item in listsData"
      :key="item.id"
      :list-item="item"
    />
  </div>
</template>

<script setup lang="ts">
import ListsSettingsItem from '@/components/lists/ListsSettingsItem.vue'
import listsData from '@/data/lists/lists'
</script>

<style scoped lang="scss">
.settings-container {
  width: 350px;
  padding: 15px;
  border: 1px solid $border-color;
  border-radius: $border-radius-sm;
}
</style>