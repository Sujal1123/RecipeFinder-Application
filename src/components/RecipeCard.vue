<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition" @click="$emit('view-details', recipe)">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h2 class="text-lg font-semibold">{{ recipe.strMeal }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: Object,
    },
  };
  </script>
  