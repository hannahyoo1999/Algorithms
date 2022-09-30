// class Node 
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class SLL - Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }
    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    /**
     * Retrieves the data of the second to last node in this list.
     * @returns {any} The data of the second to last node or null 
     *   if there is no second to last node.
     */
    secondToLast() {
        var runner = this.head
        //base case for when it is an empty list or a list with only one node
        if (!runner.next || !this.head) {
            return null;
        }
        // runner.next.next
        while (runner.next.next) { //if runner.next.next exists
            runner = runner.next; //continue through the list
        }// leave while loop when runner.next.next == null
        return runner.data; //runner == second to last node
    }

    /**
     * Removes the node that has the matching given val as it's data.
     * @param {any} val The value to compare to the node's data 
     *   to find the node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeData(data) {
        //HINT: The list is constructed by connecting nodes with pointers
        // Play with the pointers so that you can remove that node from the list. 
        let runner = this.head
        let pointer = runner

        if(!this.head) return null;
        if(this.head.data === data){
            this.head = this.head.next;
            return
        }

        while(runner){
            if(runner.data === data){
                pointer.next = runner.next
                return this // to be able to chain 
            }else{
                pointer = runner
                runner = runner.next
            }
        }
    }
    // prev, curr
    // level 1 : remove a middle node
    // level 2: remove the node if it is tail
    // level 3: remove the node if it is head    

}


var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(5);
list2.insertAtBack(6);
list2.insertAtBack(7);
list2.insertAtBack(8);
//       HEAD
// list2: (1) --> (2) --> (3) --> null
console.log(list2.secondToLast())
list2.removeData(7);

list1.printList();
list2.printList();


