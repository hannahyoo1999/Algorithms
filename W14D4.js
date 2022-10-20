class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class SLL{
    constructor(){
        this.head = null;
    }

    isEmpty(){
        if(this.head == null){
            return true;
        }return false;
    }

    reverse(){
        if(this.isEmpty()){
            return null;
        }
        var prev = null;
        var current = this.head;
        var next = null;
        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }
    
    printList() {
        // if the head is empty -> the list is empty
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



// instantiate nodes
var node1 = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(3)

node1.next = node2 
node2.next = node3

var list1 = new SLL();
list1.head = node1;

list1.printList()

list1.reverse();
list1.printList()


