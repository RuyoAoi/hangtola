<script setup lang="ts">
import { topAreas } from '../config'
</script>

<template>
  <div class="top">
    <div v-for="item in topAreas" :key="item.title" class="row">
      <div class="square" :style="{ background: item.color }">
        {{ item.title }}
      </div>
      <div class="rest"></div>
    </div>
  </div>
</template>

<style scoped>
.top {
  height: 70vh;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
}
.row {
  flex: 1;
  display: flex;
  border:1px solid gray
}
.square {
  aspect-ratio: 1/1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-right:2px solid gray;
  font-size:40px;
}
.rest {
  flex: 1;
}
</style>