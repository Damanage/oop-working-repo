class Queue {
    constructor(...elem) {
        this._box = [];
        elem.forEach((e)=>this._box.push(e))
    }

    get size() {
        return this._box.length
    }

    get isEmpty() {
        return !this.size ? true : false
    }

    get front() {
        return this._box[0]
    }

    get back() {
        let index = this.size-1
        return this._box[index]
    }

    enqueue(param) {
        this._box.push(param)
        return this
    }

    dequeue () {
        return this._box.shift()
        
    }
}
module.exports = Queue;