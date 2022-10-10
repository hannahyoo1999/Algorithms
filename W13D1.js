/**
 * Ref:
 * https://www.csusfca.edu/~galles/visualization/Heap.html
 * Class to represent a MinHeap which is a Priority Queue optimized for fast 
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * -parent is located at: Math.floor(i/2)
 * -left child is located at: i*2
 * -right child is located at: i*2+1
 */
class MinHeap{
    constructor(){
        /**
         * 0th index not used, so null is a placeholder.
         * Not using 0th index makes calculating the left and right 
         * children's index cleaner.
         * this also effectively makes our array start at index 1
         */
        this.heap = [null];
    }

    /**
     * Retrieves the size of heap, ignoring null placeholder.
     * @returns {?number} Null if empty.
     */
    size(){
        //-1 since - index is unused 
        if(this.heap.length<1){
            return null;
        }return this.heap.length - 1;
    }

    /**
     * Retrieves the top(minimum number) in the heap without removing it.
     * -Time: 0(1) constant.
     * -Space: 0(1) constant.
     * @returns {?number} Null if empty.
     */
    top(){
        if(this.heap.length < 0){
            return null;
        }return this.heap[1]
    }

    /** 
     * Inserts anew number into the heap and maintains the heaps order.
     * 1. Push new num to back then
     * 2. Iteratively swap the new num with it's parent while it is smaller than its parent.
     * parent: Math.floor(i/2)
     * left child is located at: i*2 | right child is located at: i*2+1
     * -Time: 0(log n) logarithmic due to shiftUp/ iterative swapping
     * -Space: 0(1) constant
     * @param {number} num The num to add.
     */
    insert(num){
        this.heap.push(num);
        let pointer = this.heap.length -1
        while(pointer > 1 && this.heap[Math.floor(pointer/2)] > this.heap[pointer]){
            [this.heap[Math.floor(pointer/2)], this.heap[pointer]] = [this.heap[pointer], this.heap[Math.floor(pointer/2)]]
            pointer = Math.floor(pointer/2)
        }
    }

    /**
     * Logs  the tree horizontally with the root ono ef tand index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10){
        if(parentIdx>this.heap.length -1 ){
            return;
        }
        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx*2 +1, spaceCnt)
        console.log(" ".repeat(spaceCnt<spaceIncr? 0: spaceCnt -spaceIncr)+ `${this.heap[parentIdx]} (${parentIdx})`)
        this.printHorizontalTree(parentIdx *2, spaceCnt)
    }
}


var heap = new MinHeap();
heap.insert(5)
heap.insert(10)
heap.insert(3)
heap.insert(1)
console.log(heap.size())
console.log(heap.top())
heap.printHorizontalTree()