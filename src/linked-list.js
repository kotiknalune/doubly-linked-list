const Node = require('./node');
class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data); 
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._tail = node;
            this._head = node;
        }
        this.length++;

        return this;
    }

    head() {
        if (!this._head)
            return null;
        else
            return this._head.data;
    }

    tail() {
        if (!this._tail)
            return null;
        else
            return this._tail.data;
    }

    at(index) { var i = 0;
        var current = this._head;
        while (i != index) {
            current = current.next;
            i++;
        } 
        return current.data
    }

    insertAt(index, data) {
        var i = 0,
        current = this._head,
        newNode = new Node(data);
        while (i != index) {
            current = current.next;
            i++;
        }
        if (current != null) {
            newNode.prev = current.prev;
            current.prev.next = newNode;
            current.prev = newNode;
        }
        newNode.next = current;
        this.length++;
        return this;
    }

    isEmpty() {
        if (this.length == 0)
            return true;
        else 
            return false;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) { 
        var current = this._head;
        if (this.length === 0) {
            return this;
        } else if (this.length === 1) {
            this._head = null;
            this._tail = null;
            return this;
        } else {
            var i = 0;
            while (i != index) {
                current = current.next;
                i++;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.length--;

            return this;
        }
    }

    reverse() {
        var current = this._tail;
        while(current) {
            var temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = temp;
        }
        var temp = this._head;
        this._head = this._tail;
        this._tail = temp;

        return this;
    }

    indexOf(data) {
        var current = this._head, index = 0;
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1; 
    }    
}

module.exports = LinkedList;
