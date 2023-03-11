<template>
 <div class="container-body" >
    <div class="item-body">
    Repo Name : {{ repo.name }}<br />
    ID : {{ repo.id }}<br />
    Fork : {{ repo.forks }} times<br />
    Visibility : {{ repo.visibility }}<br />
    Branch : {{ repo.default_branch }}<br />
    Created : {{ repo.created_at }}<br />
    Url : {{ repo.html_url }}<br>
    Clone : {{repo.clone_url}}
  </div></div>
  <footer class="hheader">Vue Js Exam<br> ©2023</footer>

</template>

<script setup>
import { inject, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const itemId = Number(route.params.id)
const repoData = inject('repoData').value

const repo = computed(() => {
  const findArr = repoData.find((item) => item.id === itemId)
  return findArr
})
watchEffect(() => {
  repo.value
  console.log(repo.value)
})
</script>
