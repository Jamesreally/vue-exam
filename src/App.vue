<template>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, provide, computed } from 'vue'

const repoData = ref()

const Url = `https://api.github.com/users/Jamesreally/repos`

const fetchData = async () => {
  try {
    const repoGet = await fetch(Url)
    const repo = await repoGet.json()

    repoData.value = repo
  } catch (err) {
    console.log(err)
  }
}
provide('repoData', repoData)
onMounted(() => {
  fetchData()
})
</script>
