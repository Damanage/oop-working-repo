class Set {
    constructor(...elem){
        this._box = [];
        elem.forEach((e)=>this._box.push(e))
    }

    get size() {
        return this._box.length;
    }

    get values() {
        return this._box
    }

    add(param) {
        if(Array.isArray(param)){
            let sub_box = this._box.concat(param);
            sub_box.forEach((e)=>{
                !this.has(e) && this._box.push(e)
            })
        }
        else{
            !this.has(param) && this._box.push(param)
        }
        return this
    }

    remove(param) {
        let index = this._box.indexOf(param);
        if(this.has(param)){
            this._box.splice(index, 1)
            return true
        }
        return false
    }

    has(param) {
        return (this._box.indexOf(param) !== -1)
    }

    clear() {
        this._box = []
        return this
    }

    union(array1) {
        let firstSet = this.values.concat(array1.values),
            megaSet = new Set;
        megaSet.add(firstSet);
        return megaSet;
    }

    intersection(param) {
        let megaSet = new Set;
        param.values.forEach((wookie)=>{
            this.has(wookie) && megaSet._box.push(wookie)
        })
        return megaSet;
    }

    difference(param) {
        let megaSet = new Set;
        this.values.forEach((wookie)=>{
            !param.has(wookie) && megaSet.add(wookie)
        })
        return megaSet
    }

    isSubset(param) {
        let counter = 0;

        this.values.forEach((wookie)=>{
            param.has(wookie) && counter++
        })

        if(counter === this.size)
            return true
        return false
    }
};

module.exports = Set;