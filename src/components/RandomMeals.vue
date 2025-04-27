<template>
    <div class="p-6">
  
      <button @click="fetchRandomMeals" class="mb-6 px-4 py-2 bg-blue-500 text-white rounded">
        🔀 Shuffle Meals
      </button>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="meal in meals" :key="meal.idMeal" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-lg font-bold">{{ meal.strMeal }}</h2>
            <p class="text-sm text-gray-600">{{ meal.strCategory }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        meals: []
      }
    },
    methods: {
      async fetchRandomMeals() {
        this.meals = [];
  
        // Fetch 6 random meals
        for (let i = 0; i < 6; i++) {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
          const data = await response.json();
          if (data.meals && data.meals.length > 0) {
            this.meals.push(data.meals[0]);
          }
        }
      }
    },
    mounted() {
      this.fetchRandomMeals();
    }
  }
  </script>
  
  <style scoped>
  body {
    background-color: #f7f8fa;
  }
  </style>
  