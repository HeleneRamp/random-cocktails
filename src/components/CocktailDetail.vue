<template>
 
  <div class="cocktailDetail"  v-if="cocktail">
    <div class="cocktailDetail__title">
      <h1>How to make the "{{ cocktail.strDrink }}"</h1>
    </div>
    <div class="cocktailDetail__row">
      <div class="cocktaiDetail__img--container">
        <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
      </div>
        <div class="cocktailDetail__column">
          <div class="cocktailDetail__ingr--box">
            <h2>Accessories & ingredients</h2>
            <ul>
              <li>
                <img src="../../public/cocktail-icon.svg" alt="glass-icon">
                {{ cocktail.strGlass }}
              </li>
              <li v-for="item in ingredientsWithMeasures" :key="item.ingredient">
                {{ item.measure }} {{ item.ingredient }}
              </li>
            </ul>
          </div>
          <div class="cocktailDetail__instruct--box">
            <h2>Instructions</h2>
            <p>
              {{ cocktail.strInstructions }}<br>
              CHEERS!!
              <img src="../../public/cheers.svg" alt="cheers-icon">
            </p>
          </div>
        </div>
    </div>
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
@import '../styles/cocktailDetail.scss';
</style>
