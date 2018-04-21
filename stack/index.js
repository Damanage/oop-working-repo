class Stack {
    constructor(...elem){
        this._stack = [];
        elem.forEach((e)=>this._stack.push(e))
    };

    get size() {
        return this._stack.length

    }

    get isEmpty() {
        return this.size === 0 ? true : false
    }

    push(param) {
        this._stack.push(param)
    }

    pop() {
        return this._stack.pop()
    }

    peek() {
        let lastElem = this._stack.length-1
        return this._stack[lastElem]
    }
};

module.exports = Stack;