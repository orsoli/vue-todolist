/* 
Exercise  to-do list. This time, eact item of to do list will be an object composed of two properties:
    text: a string indicating the text of the to-do.
    done: a boolean (true/false) indicating whether the to-do has been completed or not.

MILESTONE 1
Display an item in an HTML list for each to-do. 
If the done property is equal to true, show the to-do text as crossed out.

MILESTONE 2
Display an "x" next to each item. Clicking on it removes the to-do from the list.

MILESTONE 3
Provide a text input field and an "add" button. 
When the button is clicked, the entered text is read and used to create a new to-do, 
which is then added to the existing to-do list.

Bonus:
In addition to clicking the button, also capture the ENTER key to add the to-do to the list.
By clicking on the item's text, toggle the done property of the corresponding to-do (if done was false, set it to true, and vice versa).
*/

//--- Preparation Phase
// Prepare the HTML Css structure
// Prepare js structure using Vue
//? Create itemList array variable in data method with text: and done: properties
//? Create an item variable of null (initial value)
//? Create e function in method component to add an item in list and change the variable done
//? Use v-for in ul list in HTML to print the result in Page

// Milestone 1
// Added function in methods

// MIlestone 2
// Create a function deleteItems using splice() method
// Call the function linked with element in DOM by directive @click
