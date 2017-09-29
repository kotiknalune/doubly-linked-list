const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }
    appends(data) {
        var node = new Node(data);
        if(this.length === 0) {
            this.starts = node;
            this.ends = node;
        } else {
            this.ends.next = node;
            node.prev = this.ends;
            this.ends = node;
        }

        this.length++;
        return this;
    }
    head() {
        return this.starts.data;
    }
    tail() {
        return this.ends.data;
    }
    at(index) {
        var currentNode = this.starts,
            count = 0;
        while(count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;
    }
    insertAt(index, data) {
        var node = new Node(data),
            currentNode = this.starts,
            count = 0;
        if(index === 0) {
            this.starts = node;
        } else {
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }
            currentNode.data = data;
        }
        return this;
    }
    isEmpty() {
        if(this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    clear() {
        this.starts.data = null;
        this.ends.data = null;
        this.length = 0;

        return this;
    }
    deleteAt(index) {
        var currentNode = this.starts,
            count = 0,
            length = this.length,
            prevIsDeleted = null,
            nextIsDeleted = null;

        if(length === 0 || index < 0 || index > length) {
            throw "Error";
        }
        if(index === 0) {
            if(this.starts.next != null) {
                this.starts = currentNode.next;
                if(!this.starts) {
                    this.starts.prev.data = null;
                } else {
                    this.ends.data = null;
                }
            } else {
                this.starts.data = null;
                this.ends.data = null;
            }

        } else if(index === this.length) {
            this.ends = this.ends.prev;
            this.ends.next = null;
        } else {
            while(count < index) {
                currentNode = currentNode.next;
                count++;
            }
            prevIsDeleted = currentNode.prev;
            nextIsDeleted = currentNode.next;
            prevIsDeleted.next = nextIsDeleted;
            nextIsDeleted.prev = prevIsDeleted;
            currentNode = null;
        }
        this.length--;
        return this;
    }
    reverse() {
        var firstCurrentNode = this.starts,
            secondCurrentNode = this.ends;
        for(var i = 0; i < this.length/2; i++) {
                var t = firstCurrentNode.data;
                firstCurrentNode.data = secondCurrentNode.data;
                secondCurrentNode.data = t;

            firstCurrentNode = firstCurrentNode.next;
            secondCurrentNode = secondCurrentNode.prev;
        }
        return this;
    }
    indexOf(data) {
        var currentNode = this.starts;    
        for(var i = 0; i < this.length; i++) {
            if(currentNode.data === data) {
                return i;
            } else {
                currentNode = currentNode.next;
            }
        }
        return -1;
    }
}
module.exports = LinkedList;
