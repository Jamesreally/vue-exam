<template>
  <main>
    <header>
      <div class="wrapper" v-if="isLoading" >Loading...</div>
      <div v-else>
        <FetchApi :repoData="repoData" />
        <Repo :repoData="repoData" />
      </div>
    </header>
    
  </main>
</template>

<script setup>
import FetchApi from '../components/FetchApi.vue'
import Repo from './Repo.vue'
import { ref, onMounted, toRef } from 'vue'

const repoData = ref([])
const isLoading = ref(false)
const Url = `https://api.github.com/users/Jamesreally/repos`

const fetchData = async () => {
  isLoading.value = true
  try {
    
  
  const repoGet = await fetch(Url)
  const repo = await repoGet.json()
  repoData.value = Object.keys(repo).map((i) => repo[i])
  console.log(repoData.value)}
   catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
  
})
//const repoDataProp=toRef(repoData, 'value')
</script>
