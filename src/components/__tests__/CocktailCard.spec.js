/* eslint-disable no-undef */
import { describe, it, expect, beforeEach, vi } from 'vitest'
import 'whatwg-fetch'
import { mount } from '@vue/test-utils'
import CocktailCard from '../CocktailCard.vue'
import flushPromises from 'flush-promises'

const fetchData = [
  {
    idDrink: '11007',
    strDrink: 'Margarita',
    strAlcoholic: 'Alcoholic',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
  }
]

describe('CocktailCard', () => {
  let wrapper

  beforeEach(async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ drinks: fetchData })
      })
    )

    wrapper = mount(CocktailCard)

    await flushPromises()
  })

  it('sends the right message', () => {
    expect(wrapper.text()).toContain('Refresh the page to discover')
  })

  it('fetches and renders cocktails', async () => {
    await flushPromises()

    const images = wrapper.findAll('img.cocktail-img')
    expect(images.length).toBeGreaterThan(0)

    expect(wrapper.text()).toContain('Margarita')
    expect(images.at(0).attributes('src')).toBe(
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
    )
    expect(global.fetch).toHaveBeenCalledWith(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    )
  })
})
