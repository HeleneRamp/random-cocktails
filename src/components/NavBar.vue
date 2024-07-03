<template>
    <div class="navbar__container">
        <router-link to="/">
            <img src="../../public/coconut.png" alt="logo">
        </router-link>
        <router-link to="/">
            <h1>Cocktail Adventure</h1>
        </router-link>
        <div class="navbar__container--links">
            <ul>
                <li><router-link to="/all-cocktails">All Cocktails</router-link></li>
                <li><router-link to="/all-mocktails">All Mocktails</router-link></li>
            </ul>
        </div> 
    </div>
   
</template>

<script>

</script>

<style>
@import '../styles/navBar.scss';
</style>