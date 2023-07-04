class LinkedList{
constructor(){
    this.head = null;
    this.size = 0;
}

// Insert first node
prepend(value){
    this.head = new Node(value, this.head)
    this.size++

}
//Insert last node 
append(value){
let node = new Node(value);

let current;

//if empty make head
    if(!this.head){
        this.head = node
    }else {
        current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = node
    }
    this.size++
}
// Insert at index;
at(value,index){
if(index > 0 && index > this.size) return

//if first index

if(index === 0){
   return this.head= new Node(value, this.head)
}

const node = new Node(value);
let current;
let previous;

current = this.head;
let count =0

while(count < index){
    previous = current;
    count++
    current = current.next
}
node.next = current;
previous.next = node;

this.size++;
}

//return the node at the head
getHead(){
    return console.log("head: ", this.head.data)
   // return this.head;
}

getTail(){
    let current = this.head;
    let count = 0
    console.log("size:", this.size)
    // when its current and the current is 
    while(current){
        if(count == this.size-1){
            console.log("Tail:", current.data);

            return current.data
        }
        current = current.next;
        count++
    }
    
}
//remove last node
pop() {
    let current = this.head;
    let count = 0;

    while(current){
        if(count == this.size-2){
            current.next = null;
            //console.log("head now: ", this.head)
        }

        current = current.next;
        count++
    }
    this.size--
}
//get at Index
getAt(index){
    let current = this.head;
    let count = 0;

    while(current){
        if(count == index){
            console.log(`at ${[index]}: `,current.data);
        }
        count++
        current = current.next
    }

    return null;
}

// get the size of the entire Linked List
size(){
    console.log("size: ", this.size)
    return this.size
}

find(value){
    let current = this.head;
    let count = 0;
    while(current){
        if(current.data == value){
            console.log( `Index: [${count}]`);
            return count
        }
        current = current.next
        count++
    }
}

//check if the value is in the list
contains(value){
    let current = this.head;
    let count = 0;

    while(current){
        if(current.data == value){
           // console.log("yes this value is in the list");
            return true
        }
        current = current.next
        count++
    }
    return false
}
//Remove at Index
removeAt(index){
    if(index > 0 && index > this.size) return

    let current = this.head;
    let previous;
    let count = 0;

    //if first remove first;

    if(index === 0){
        this.head = current.next
    }else {
        while(count < index){
            count++
            previous = current;
            current = current.next
        }
        previous.next = current.next
    }
    this.size--
}
// insert a new node at a specific index

insertAt(value, index){
    let current = this.head;
    let count = 0;
    // if the head is empty
    if(!this.head){ this.head = node}
    if(index == 0){this.prepend(value)}
    if(index > this.size) {
        throw new Error("Index not found in List")
    }
    while(current){
        if(count == index){
            // if the index matches the current node index
            // we will resign that node and attach it
            // and make it the next node
            let node = new Node(value, current)
            let count2 = 0;
            let current2 = this.head
            while(current2){
              if(count2 == (index-1)){
                current2.next = node  
            }
            current2 = current2.next 
            count2++
            }  
        }
        current = current.next;
        count++
    }
    this.size++
    //return

}
//Clear list
clearList(){
    this.head = null;
    this.size = 0
}
//Print list data
toString(){
    let current = this.head;
let string = "";
    while(current){
        string += ` ( ${current.data} ) ->`
        //console.log(current.data)
        current = current.next
    }
    console.log(string)
}
}

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;

    }

}

const list = new LinkedList()
list.prepend(100);
list.prepend(300);
list.prepend(500)
list.append(200)
list.append(2000)
//list.at(700, 10)
// list.getHead()
// list.getTail()
// list.toString()
// list.removeAt(2)
console.log("---------------")
// list.printList()
// console.log("---------------")
// list.clearList()
// list.printList()
//list.pop()
//list.find(200)
list.insertAt(4500, 2)
list.toString()
//list.contains(300)