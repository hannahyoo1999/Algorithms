//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a stack using a linkedlist to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        //check if the stack is empty
        //return a boolean 
        if(!this.top){
            return true;
        }
        return false;
    }

    /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   * @returns {number} .
   */
    push(data) {
        const newNode = new StackNode(data);
        newNode.next = this.top; //newNode.next refer to old top
        this.top = newNode;
        return this.top.data
    }


    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed data or undefined if this stack was empty.
     */
    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        let removedNode = this.top;
        this.top = this.top.next;
        return removedNode.data; 
    }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
    peek() {
        if(this.isEmpty()){
            return null;
        }
        return this.top.data;
    }


    /**
   * Returns whether or not this stack is empty .
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
    size() {
        //return the size of the stack 
        // using only the above 4 operations.
        let size = 0;
        let stackCopy = new Stack();
        while(this.top){
            size ++;
            let removedData = this.pop(); //stack is popped empty
            stackCopy.push(removedData);
        }
        while(stackCopy.isEmpty()){
            this.push(stackCopy.pop());
        }
        return size;
    }

    printStack() { // For learning purpose
        console.log("TOP")
        let runner = this.top;
        while (runner) {
            console.log(runner.data);
            runner = runner.next
        }
    }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.printStack();
//expected:
// TOP
// [ 3 ] 
// [ 2 ]
// [ 1 ]

console.log(s1.pop()); //expected: [ 3 ]
s1.printStack();
  //expected: 3
  // TOP
  // [ 2 ]
  // [ 1 ]

console.log(s1.peek());
s1.size()