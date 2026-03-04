<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main'
import FullscreenImage from './FullscreenImage.vue'

const props = defineProps<{
  name: string
}>()

const store = useMainStore()
const show = ref(false)

const x = computed(() => store.images[props.name]?.x ?? 0)
const y = computed(() => store.images[props.name]?.y ?? 0)

let dragging = false
let offsetX = 0
let offsetY = 0

function startDrag(e: MouseEvent) {
  dragging = true
  offsetX = e.clientX - x.value
  offsetY = e.clientY - y.value
  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', stop)
}

function move(e: MouseEvent) {
  if (!dragging) return
  store.updatePosition(
    props.name,
    e.clientX - offsetX,
    e.clientY - offsetY
  )
}

function stop() {
  dragging = false
  document.removeEventListener('mousemove', move)
  document.removeEventListener('mouseup', stop)
}

function openFullscreen(e: MouseEvent) {
  e.preventDefault()
  show.value = true
}
</script>

<template>
  <div
    class="img-wrapper"
    :style="{ left: x + 'px', top: y + 'px' }"
    @mousedown.left="startDrag"
    @contextmenu="openFullscreen"
  >
    <img style="border-radius: 4px;" :src="`/${name}`" />
  </div>

  <FullscreenImage
    v-if="show"
    :name="name"
    @close="show = false"
  />
</template>

<style scoped>
.img-wrapper {
  position: absolute;
  cursor: move;
}
img {
  height: 12vh;
  width: 12vh;
  object-fit: cover;
  pointer-events: none;
}
</style>