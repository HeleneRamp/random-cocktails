<template>
    <div class="all__CocktailCard--container">
        <figure class="cocktailCard__container" v-for="cocktail in cocktails" :key="cocktail.idDrink" >
                <a href="#">
                <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink"/>
                <figcaption>
                    <img src="../../public/icons/sunny.svg" alt="sun-icon">
                        <h2>
                            Cocktail<br>
                            {{  cocktail.strDrink }}
                        </h2>
                    <img src="../../public/icons/sunny.svg" alt="sun-icon">
                </figcaption>
            </a>
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