<template>
  <div>
    <h3>
      <ul>
        <li  v-for="(repo) in repoData" :key="repo.id">
            <router-link :to="{path:`/about/${repo.id}`}">
          <span>{{ repo.name }}</span>
            </router-link>
            {{ repo.visibility }}
        </li>
      </ul>
    </h3>
  </div>
</template>

<script setup>
import {defineProps} from'vue'
defineProps({
    repoData:{
        type: Array
    }
})
 

/*const ClickHandler = (choosenId) => {
  const findItem = repoData.find((item) => item.id === choosenId)
  const idValue = findItem.id
  console.log(idValue)
  router.push({ name: 'about' })
}*/
</script>
