<template>
    <div>
        <div class="all__CocktailCard--title">
            <h1>All the Cocktails (with Alcohol)</h1>
        </div>
        <div class="all__CocktailCard--container">
            <figure class="cocktailCard__container" v-for="cocktail in cocktails" :key="cocktail.idDrink">
                <router-link :to="{ path: `/cocktail/${cocktail.idDrink}` }">
                <img class="cocktail-img" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
                <figcaption>
                    <img src="../../public/icons/sunny.svg" alt="sun-icon">
                    <h2>
                    Cocktail<br>
                    {{ cocktail.strDrink }}
                    </h2>
                    <img src="../../public/icons/sunny.svg" alt="sun-icon">
                </figcaption>
                </router-link>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cocktails: [],
            loading: true,
        };
    },
    methods: {
        async fetchAllCocktails() {
            try{
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
            const data = await response.json();
        this.cocktails = data.drinks;
      } catch (error) {
        console.error('Error fetching all cocktails:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchAllCocktails();
  },
};
</script>

<style>
@import '../styles/cocktailCard.scss';
</style>