<template>
    <div class="bgImage__container"></div>
    <div class="all__CocktailCard--container">
        <h2>
            Fancy a surprise cocktail?<br> 
            Refresh the page to discover three new random creations and let the magic of flavors surprise you every time!
        </h2>
        <figure class="cocktailCard__container" v-for="cocktail in cocktails" :key="cocktail.idDrink" >
            <router-link :to="{ path: `/cocktail/${cocktail.idDrink}` }">
                <img class="cocktail-img" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink"/>
                <figcaption>
                    <img class src="../../public/icons/sunny.svg" alt="sun-icon">
                        <h2>
                            {{ cocktail.strAlcoholic === 'Alcoholic' ? 'Cocktail' : 'Mocktail' }}<br>
                            {{  cocktail.strDrink }}
                        </h2>
                    <img  src="../../public/icons/sunny.svg" alt="sun-icon">
                </figcaption>
            </router-link>
            </figure>
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
        async fetchCocktails() {
            try{
                const promises = Array.from({ length: 3 }, () =>
            fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => response.json())
        );
            const results = await Promise.all(promises);
            this.cocktails = results.map(result => result.drinks[0]);
            } catch (error) {
                console.error('Error fetching:', error);
            } finally {
                this.loading = false;
            }
        },
    },
    created() {
        this.fetchCocktails();
    }
};
</script>

<style lang="scss">
    @import '../styles/cocktailCard.scss';
</style>