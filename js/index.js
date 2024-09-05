// Destructuring createApp from vue
const { createApp } = Vue;
// Create an instance app of vue app
const app = createApp({
  // Create variables
  data() {
    return {
      title: " TODAY To do", // Title of app variables
      // Create itemList
      itemList: [
        { text: "Prepare breakfast", done: false },
        { text: "Check emails", done: false },
        { text: "Attend online class", done: false },
        { text: "Exercie", done: false },
      ],
    };
  },

  // Methods
  methods: {
    isDone(i) {
      this.itemList[i].done = !this.itemList[i].done; // Mark as done 'change the value of done'
    },

    markClass(i) {
      return this.itemList[i].done ? "text-decoration-underline" : ""; // The mark class value changed
    },
  },
}).mount("#app");
