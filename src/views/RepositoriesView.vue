<template>
  <div class="" v-if="isLoading"><h2>Loading...</h2></div>
  <div  v-else>
    
    <header class="header">
      <Navigation />
    </header>
  <div class="container-repo" >
    
    <h3 class="repo-item" v-for="repo in reposList" :key="repo.id">
    
        <router-link :to="{ path: `/Repositories/${repo.id}` }">
        <span class="router">{{ repo.name }}</span>
      </router-link>
      <span class="public" >{{ repo.visibility }}</span>
      <ul><li>{{repo.default_branch}}</li></ul>
    </h3>
    <section class="section">
      <button :disabled="page <= 1" @click="page--">Prev</button>
      <button v-for="p in _Pages" :key="p.id" @click="page = p">{{ p }}</button>
      <button :disabled="page == totalPages" @click="page++">Next</button>
    </section>
    </div>
    <footer class="hheader">Vue Js Exam<br> ©2023</footer>

  </div>
</template>

<script setup>
import { inject, ref, watchEffect } from 'vue'
import Navigation from '../components/Navigation.vue'
const isLoading = ref(true)
const page = ref(1)
const reposList = ref()
const totalPages = ref()
const repoData = inject('repoData')
const _Pages = ref()
watchEffect(() => {
  repoData.value
  if (repoData.value !== undefined) {
    isLoading.value = false
    const start = (page.value - 1) * 4
    const end = start + 4
    const repoPerPage = repoData.value.slice(start, end)
    reposList.value = repoPerPage
    const totalPagesNum = Math.ceil(repoData.value.length / 4)
    totalPages.value = totalPagesNum
    const Pages = []
    for (let i = 1; i <= totalPages.value; i++) {
      Pages.push(i)
    }
    _Pages.value = Pages
  }
})
</script>
