<template>
    <div class="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 p-6">
      <h1 class="text-4xl font-bold text-center mb-6">🍽️ Recipe Finder</h1>
      <div class="flex justify-center mb-8">
        <input
          v-model="searchQuery"
          @keyup.enter="fetchRecipes"
          type="text"
          placeholder="Search for a recipe..."
          class="border p-3 rounded-l-md w-72"
        />
        <button @click="fetchRecipes" class="bg-green-500 text-white p-3 rounded-r-md hover:bg-green-600">
          Search
        </button>
        <button @click="goToPlanPage" class="bg-red-500 text-white p-3 ml-2 rounded-r-md hover:bg-red-600">
          Plan your Meal
        </button>
      </div>
  
      <div v-if="loading" class="text-center text-lg">Loading...</div>
  
      <RandomMeals v-if="!searchQuery" />

      <div v-if="recipes.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <RecipeCard
          v-for="recipe in recipes"
          :key="recipe.idMeal"
          :recipe="recipe"
          @view-details="selectRecipe"
        />
      </div>
  
      <div v-else-if="!loading && searched" class="text-center text-lg">
        No recipes found. Try a different keyword!
      </div>
  
      <!-- Modal -->
      <RecipeModal v-if="selectedRecipe" :recipe="selectedRecipe" @close="selectedRecipe = null" />
    </div>
  </template>
  
  <script>
  import RecipeCard from '@/components/RecipeCard.vue';
  import RecipeModal from '@/components/RecipeModal.vue';
  import {searchRecipes} from '../api/recipeApi.js';
import PlanPage from './PlanPage.vue';
import RandomMeals from '@/components/RandomMeals.vue';
  
  export default {
    components: {
      RecipeCard,
      RecipeModal,
      RandomMeals
    },
    data() {
      return {
        searchQuery: '',
        recipes: [],
        loading: false,
        selectedRecipe: null,
        searched: false,
      };
    },
    methods: {
      async fetchRecipes() {
        if (!this.searchQuery.trim()) return;
  
        this.loading = true;
        try {
          const data = await searchRecipes(this.searchQuery);
          this.recipes = data || [];
          this.searched = true;
        } catch (error) {
          console.error('Error fetching recipes:', error);
        } finally {
          this.loading = false;
        }
      },
      selectRecipe(recipe) {
        this.selectedRecipe = recipe;
      },
      goToPlanPage(){
        this.$router.push('/planmeal');
      }
    },
  };
  </script>
  