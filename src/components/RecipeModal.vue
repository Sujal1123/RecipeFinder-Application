<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
      <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-700" @click="$emit('close')">✖️</button>

      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="w-full h-60 object-cover rounded-lg mb-4" />
      <h2 class="text-2xl font-bold mb-2">{{ recipe.strMeal }}</h2>

      <p class="text-gray-700 mb-4">
        <strong>Category:</strong> {{ recipe.strCategory }}
      </p>
      <p class="text-gray-700 mb-4">
        <strong>Instructions:</strong> {{ recipe.strInstructions }}
      </p>
      <div v-if="recipe.strYoutube" class="mt-4">
        <iframe
          :src="youtubeEmbedUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-60 rounded-lg">
        </iframe>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    props: {
      recipe: Object,
    },
    computed: {
    youtubeEmbedUrl() {
      if (!this.recipe.strYoutube) return '';
      // Convert normal YouTube URL to embed URL
      const videoId = this.recipe.strYoutube.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
  };
  </script>
  