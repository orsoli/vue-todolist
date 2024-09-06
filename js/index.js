// Destructuring createApp from vue
const { createApp } = Vue;
// Create an instance app of vue app
const app = createApp({
  // Create variables
  data() {
    return {
      title: " TODAY To do", // Title of app variables
      newItem: "", // Initial variable for new Item
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
    // isDone method to toggle done value
    toggleDone(i) {
      this.itemList[i].done = !this.itemList[i].done; // Mark as done 'toggle the value of done'
    },
    // markClass returne string value to use in class element
    markClass(i) {
      return this.itemList[i].done ? "text-decoration-underline" : ""; // The mark class value changed based on boolean
    },

    // deleteItems function clear the item in event
    deleteItem(i) {
      this.itemList.splice(i, 1);
    },

    // addItem function used to add new item in list
    addItem() {
      //! validation
      if (this.newItem.trim()) {
        this.itemList.push({ text: this.newItem, done: true }); // Add a new item, geting from user, in itemList
        this.newItem = "";
        console.log(this.newItem); // Test printing in console
      }
    },
  },
}).mount("#app");
