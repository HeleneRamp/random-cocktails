<template>
  <header>
    <NavBar />
  </header>
  <main>
    <!-- <CocktailCard /> -->
    <router-view></router-view>
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
// import CocktailCard from './components/CocktailCard.vue'
</script>

<style lang="scss"></style>
