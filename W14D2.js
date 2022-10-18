class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
 
/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;

    }

    /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
    isEmpty() {
        if(!this.front){
            return true
        }return false
    }

    /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
    getFront() {
        //return the front data
        if(this.front){
            return this.front;
        }
        return undefined;
    }

    /**
   * Adds a new given data to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */

    enqueue(data) {
        let newNode = new Node(data);
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
            return this;
        }
        else{
            this.rear.next = newNode;
            this.rear = newNode;
            return this;
        }
    }


    /**
     * Removes and returns the data of the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if(this.isEmpty()){
            return undefined;
        }
        else{
            let result = this.front;
            this.front = this.front.next;
            return result;
        }
    }

    // bonus
    /**
   * Check if the target value exists in the queue
   * @returns {Boolean } 
   */
    contains(targetVal) {
        let current = this.front
        while (current) {
            if (current.data == targetVal) {
                return true
            }
            else{
                current = current.next
            }
        }return false;
    }

    printQueue() { //for learning puspose
        console.log("Front: " + this.front.data);
        var runner = this.front;
        while (runner) {
            console.log(runner.data)
            runner = runner.next;
        }
        console.log("Rear: " + this.rear.data);
    }
}


var q = new Queue();
console.log(q.isEmpty())
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.printQueue(); //expected: front: "a", rear : "d"

q.dequeue();
console.log(q.contains("a"));
console.log(q.contains("b"));
q.printQueue(); //expected: front: "b", rear : "d"

