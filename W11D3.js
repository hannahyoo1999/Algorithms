/**
 * A class to represent a single item of a SinglyLinkedList 
 * that can be linked to other Node instances to form a 
 * list of linked nodes
 */

class ListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var nodeNew = new ListNode(data);
        if (this.head) {
            var runner = this.head
            while (runner.next) {
                runner = runner.next
            }
            runner.next = nodeNew
        }else{
            this.head= nodeNew
        }
    }

    
    /**
     * Creates a new node with the given data and inserts that node at the front 
     * of the list.
     * @param {any} data The data for the new node
     * @returns {SinglyLinkedList} This list.
     */
    
    insertAtFront(data){
        //instantiate the ListNode with data
        var newNode = new ListNode(data);
        //edge case: how do we handle an empty list
        if(this.head == null){
            //pointer of the newNode to the originial head 
            this.head = newNode;
        }else{
            //reassign head
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    
    /**
     * Removes the first node of this list.
     * - Time : 0(1) constant
     * - Space : 0(1) constant
     * @return {any} The data from the removed node
     */
    removeHead(){
        if(this.head){
            //reassign head
            this.head = this.head.next
        }
    }

    printList() {
        if (this.head === null) {
            console.log("Empty list")
        } else {
            var runner = this.head
            while (runner !== null) {
                console.log(runner.data)
                runner = runner.next
            }
        }
        return this
    }
}


var emptyList = new SLL();// EMPTY LIST
emptyList.removeHead();
emptyList.printList();

var list1 = new SLL(); 
list1.insertAtBack(5);
list1.insertAtBack(6);
list1.insertAtBack(7);
list1.insertAtFront(8);
list1.removeHead();

// HEAD
// (5) -> (6) -> (7) -> NULL

list1.printList();

var list2 = new SLL();
list2.insertAtBack(8);
list2.removeHead()
list2.printList();

