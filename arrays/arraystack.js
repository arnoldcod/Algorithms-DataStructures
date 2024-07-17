class Stack {
    constructor() {
        this.items = [];
    }

    // Add a number to the stack
    push(number) {
        this.items.push(number);
    }

    // Take the top number off the stack
    pop() {
        if (this.items.length === 0) {
            return "Oops, the stack is empty!";
        }
        return this.items.pop();
    }

    // See what the top number is
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Find out how many items are in the stack
    size() {
        return this.items.length;
    }
}

// Using the stack
let myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(20);   
myStack.push(3);

// 5, 10, 20, 3

console.log(myStack.peek());  // Output: 3
myStack.pop();
console.log(myStack.peek());  // Output: 20