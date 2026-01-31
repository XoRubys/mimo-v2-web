<script setup>
import { computed } from 'vue'

const props = defineProps({
  timestamp: {
    type: Number,
    required: true
  }
})

const updateTime = computed(() => {
  const date = new Date(props.timestamp)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
})
</script>

<template>
  <div class="update-time-wrapper">
    <div class="update-time-content">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <span>最后更新于 {{ updateTime }}</span>
    </div>
  </div>
</template>

<style scoped>
.update-time-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.update-time-content {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>
