<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  label: string
  value: number
}>()

const emit = defineEmits<{
  (e: 'change', value: number): void
}>()

const current = ref<number>(props.value)

watch(() => props.value, v => {
  current.value = v
})

function set(v: number) {
  current.value = v
  emit('change', v)
}
</script>

<template>
  <div class="rating-item">
    <span class="label">{{ label }}</span>
    <span
      v-for="i in 5"
      :key="i"
      class="star"
      :class="{ active: i <= current, unactive:i > current }"
      @click="set(i)"
    >
      ★
    </span>
  </div>
</template>

<style scoped>
.rating-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding:4px 0;
}

.label{
  text-shadow:
    -2px -2px 0 rgba(255,255,255,0.6),
     2px -2px 0 rgba(255,255,255,0.6),
    -2px  2px 0 rgba(255,255,255,0.6),
     2px  2px 0 rgba(255,255,255,0.6),
}

.rating-item > span:first-child {
  font-size: 21px;     /* 标签字号 */
  font-weight: 600;
}

.star {
  cursor: pointer;
  color: #ccc;
  font-size: 30px;     /* 星星更大 */
  line-height: 1;
}
.star.unactive{
  text-shadow:
    -2px -2px 0 rgba(0,0,0,0.2),
     2px -2px 0 rgba(0,0,0,0.2),
    -2px  2px 0 rgba(0,0,0,0.2),
     2px  2px 0 rgba(0,0,0,0.2);
}

.star.active {
  color: gold;
  text-shadow:
  -2px -2px 0 rgba(255, 165, 0, 0.4),
   2px -2px 0 rgba(255, 165, 0, 0.4),
  -2px  2px 0 rgba(255, 165, 0, 0.4),
   2px  2px 0 rgba(255, 165, 0, 0.4);
}
</style>