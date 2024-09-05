// Destructuring createApp from vue
const { createApp } = Vue;
// Create an instance app of vue app
const app = createApp({
  // Create variables
  data() {
    return {
      title: " TODAY To do", // Title of app variables
      item: null, // Initial variable of item
      // Create itemList
      itemList: [
        {
          text: "Prepare breakfast",
          done: true,
        },
        {
          text: "Check emails",
          done: false,
        },
        {
          text: "Attend online class",
          done: false,
        },
        {
          text: "Exercie",
          done: false,
        },
      ],
    };
  },
}).mount("#app");
