<template>
  <div>
    {{ repo }}
    <div>Here</div>
  </div>
</template>
<script setup>
import { defineProps, ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const propsData = defineProps({
  repoData: {
    type: Array,
    required: true,
    default: () => []
  },
  id: {
    type: Number,
    required: true
  }
})

console.log(propsData.id)

const repo = computed(() => {
  return propsData.repoData.find((item) => {

    console.log(item.id)
    console.log(propsData.id)
   return item.id === propsData.id
  })
})

watch(repo.value, () => {
  repoData.value = propsData.repoData
  console.log(propsData)
  console.log(repo.value)
})
console.log(itemId)
</script>
