<template>
  <div class="app">
    <button class="reset-btn" @click="reset">清空</button>

    <TopArea />

    <div class="bottom-area">
      <DraggableImage
        v-for="img in imageList"
        :key="img"
        :name="img"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMainStore } from './stores/main'
import { imageList } from './config'
import TopArea from './components/TopArea.vue'
import DraggableImage from './components/DraggableImage.vue'

const store = useMainStore()

onMounted(() => {
  store.init(imageList)
})

function reset() {
  store.reset(imageList)
}
</script>

<style>
.app {
  position: relative;
  user-select: none;
}
.reset-btn {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 1;
}
.bottom-area {
  position: relative;
  height: 30vh;
}
body{
  padding:0;
  margin: 0;
  overflow: hidden;
}
</style>