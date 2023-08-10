class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  stringToLinked(str) {
    if (!str) return;
    let curr = this.head;
    for (let i = 0; i < str.length; i++) {
      let node = new Node(str[i]);
      if (!curr) {
        curr = node;
        this.head = curr;
      } else {
        curr.next = node;
        curr = node;
      }
      this.size++;
    }
  }

  insert(value) {
    const node = new Node(value);
    let prev = this.head;
    if (this.isEmpty() || value < this.head.value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (prev.next && prev.next.value < value) prev = prev.next;
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let ListValue = "";
      while (curr) {
        ListValue += `${curr.value} `;
        curr = curr.next;
      }
      console.log(ListValue);
    }
  }
}

const list = new LinkedList();

list.stringToLinked("REVATHY");
list.print();
console.log(list.getSize());

// insert(value){
//     const node =new Node(value)
//     let prev=this.head
//    if(this.isEmpty() || value < this.head.value){
//     node.next=this.head
//     this.head=node
//    }else{
//     while(prev.next && prev.next.value < value){
//          prev=prev.next
//     }
//     node.next=prev.next
//     prev.next=node

//    }
//    this.size++
// }
