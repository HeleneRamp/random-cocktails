<template>
  <h1>CocktailDetail page</h1>
  <div v-if="cocktail">
    <h1>{{ cocktail.strDrink }}</h1>
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" width="200" />
    <p>{{ cocktail.strInstructions }}</p>
    <p>{{ cocktail.strGlass }}</p>
    <ul>
      <li v-for="item in ingredientsWithMeasures" :key="item.ingredient">
        {{ item.measure }} {{ item.ingredient }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      cocktail: null
    }
  },
  computed: {
    ingredientsWithMeasures() {
      if (!this.cocktail) return []
      const ingredients = []
      for (let i = 1; i <= 15; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`]
        const measure = this.cocktail[`strMeasure${i}`] || ''
        if (ingredient) ingredients.push({ ingredient, measure })
      }
      return ingredients
    }
  },
  async created() {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`
    )
    const data = await response.json()
    this.cocktail = data.drinks[0]
  }
}
</script>

<style lang="scss">
@import '../styles/cocktailsDetails.scss';
</style>
