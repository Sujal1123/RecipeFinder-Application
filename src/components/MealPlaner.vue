<template>
    <div class="meal-planner p-6">
      <h1 class="text-2xl font-bold mb-4">Weekly Meal Planner 🍴</h1>
  
      <!-- Select Day -->
      <div class="mb-4">
        <label class="font-semibold">Select Day:</label>
        <select v-model="selectedDay" class="border p-2 rounded w-full">
          <option disabled value="">Choose a day</option>
          <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>
      </div>
  
      <!-- Enter Meal -->
      <div class="mb-4">
        <label class="font-semibold">Meal:</label>
        <input
          v-model="mealInput"
          type="text"
          placeholder="Enter meal name"
          class="border p-2 rounded w-full"
        />
      </div>
  
      <!-- Add Button -->
      <button
        @click="addMeal"
        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Save Meal
      </button>
  
      <!-- Weekly Plan Display -->
      <div class="mt-8">
        <h2 class="text-xl font-bold mb-4">Your Plan 📅</h2>
        <ul class="space-y-2">
          <li
            v-for="day in days"
            :key="day"
            class="border-b py-2 flex justify-between"
          >
            <span>{{ day }}</span>
            <span class="font-semibold">{{ meals[day] || "No meal planned" }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MealPlanner",
    data() {
      return {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        selectedDay: "",
        mealInput: "",
        meals: {}, // { Monday: "Pizza", Tuesday: "Salad", ... }
      };
    },
    methods: {
      addMeal() {
        if (this.selectedDay && this.mealInput.trim()) {
          this.meals[this.selectedDay] = this.mealInput.trim();
          // Reset input fields
          this.selectedDay = "";
          this.mealInput = "";
        } else {
          alert("Please select a day and enter a meal.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .meal-planner {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  