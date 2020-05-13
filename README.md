# React Poems

This project will require you to use inverse dataflow and declarative state updates.

### Set Up 
* Open the terminal
* Run `npm install`
* Run `npm start`

### Deliverables
* As a user, I should be able to:
    * **Read** a list of poems
    * **Create** a new poem
    * **Delete** an existing poem
    * **Update** the content of an existing poem
    
### Tips on Inverse Dataflow
* Remember that inverse dataflow is the process of "creating your own events"
* Simply pass a function as a prop to another component, and invoke the function there

### Tips for Declarative State Updates
* Make your input visible: Log state, and any variables you're using when updating state, **before** you call `setState`
* Make your output visible: Log state at the beginning of your `render` method
* Think of declarative state updates like puzzles. You can see your input, you can see your output, how is the output different from the desired output and what can you change to get you closer?

#### Helpful Tools:

##### `...`
The spread operator can be used to copy the contents of an Array or Object into a new Array or Object.

##### `array.filter` 
The `.filter` iterator takes in a callback, and returns a new array containing every element for which the callback returned true
Example:
```
[1, 2, 3, 4, 5].filter( num => num > 3) // => [ 4, 5 ]
```

##### `array.slice`
The `.slice` method takes in two numbers, a starting index an ending index, and returns an array with the elements between the two indexes