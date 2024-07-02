<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style lang="scss"></style>
