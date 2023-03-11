<template>
  <main>
    <header>
      <Navigation />
    </header>
    <body>
      <div class="container-body">
        <div class="item-body">
          <p>
            Hey Welcome!<br />
            To my journey as a frontend developer! I'm thrilled to share my progress so far, I've
            learned how to create beautiful and functional websites and webApps using
            HTML,CSS,Javascript and it's library such as React JS and Vue Js.<br />Thanks to
            Altschool Africa for bringing me thus far. Here is my Exam project on vue.
          </p>
          <p>
            <span
              >Here is a link to My List of
              <router-link class="alts" :to="{ name: 'Repos' }">Repositories</router-link>
            </span>
          </p>
        </div>
      </div>
    </body>
    <footer class="hheader">
      Vue Js Exam<br />
      ©2023
    </footer>
  </main>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
</script>
