<script setup lang="ts">
import { computed } from 'vue'
import { useMainStore } from '../stores/main'
import { ratingItems } from '../config'
import RatingItem from './RatingItem.vue'

const props = defineProps<{
  name: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const store:any = useMainStore()
const ratings = computed(() => store.images[props.name].ratings)

function update(key: string, val: number) {
  store.updateRating(props.name, key, val)
}

function close(e: MouseEvent) {
  e.preventDefault()
  emit('close')
}
</script>

<template>
  <div class="overlay" @contextmenu="close">
    <div class="content" @contextmenu="close">
      <img style="border-radius: 8px;" :src="`/${name}`" />

      <div class="rating">
        <RatingItem
          v-for="item in ratingItems"
          :key="item"
          :label="item"
          :value="ratings[item] ?? 0"
          @change="v => update(item, v)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
}
img {
  height: 90vh;
}
.rating {
  position: absolute;
  right: 5vw;
  bottom: 10vh;
  background: rgba(255,255,255,0.55);
  padding: 8px;
  border-radius: 8px;
}
</style>