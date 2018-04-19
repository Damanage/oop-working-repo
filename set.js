class Set {
    constructor(){
        this._box = [];
    }
    // /**
    //  * Возвращает размер сета
    //  * @returns {number}
    //  */
    get size() {
        return this._box.length;
    }

    // /**
    //  * Возвращает элементы сета
    //  * @returns {Array}
    //  */
    get values() {
        return this._box
    }

    // /**
    //  * Добавляет элемент в сет
    //  * @param {*} item
    //  */
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

    // /**
    //  * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
    //  * @param {*} item
    //  * @returns {boolean}
    //  */
    remove(param) {
        let index = this._box.indexOf(param);
        if(this.has(param)){
            this._box.splice(index, 1)
            return true
        }
    }

    // /**
    //  * Проверяет наличие элемента в сете
    //  * @param {*} item
    //  * @returns {boolean}
    //  */
    has(param) {
        return (this._box.indexOf(param) !== -1)
    }

    /**
     * Очищает сет
     */
    clear() {
        this._box = []
        return this
    }

    // /**
    //  * Возращает сет состоящий из элементов двух сетов
    //  * @param {Set} set
    //  * @returns {Set}
    //  */
    union(array1) {
        let firstSet = array1.values.concat(this.values),
            megaSet = new Set;
        megaSet.add(firstSet);
        return megaSet;
    }

    // /**
    //  * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
    //  * @param {Set} set
    //  * @returns {Set}
    //  */
    intersection(param) {
        let megaSet = new Set;
        param.values.forEach((wookie)=>{
            this.has(wookie) && megaSet._box.push(wookie)
        })
        return megaSet;
    }

    // /**
    //  * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
    //  * @param {Set} set
    //  * @returns {Set}
    //  */
    difference(param) {
        let megaSet = new Set;
        this.values.forEach((wookie)=>{
            !param.has(wookie) && megaSet.add(wookie)
        })
        return megaSet
    }

    // /**
    //  * Возвращает `true` если сет содержит в себе все элементы из друого сета
    //  * @param {Set} set
    //  * @returns {boolean}
    //  */
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

joe = new Set;
sam = new Set;
dick = new Set;

joe.add('t-rex')
joe.add('dickus')
joe.add('salmon')
joe.add('мишаня')
joe.add('lama')


sam.add('duck')
sam.add('spider-duck')
sam.add('t-rex')
sam.add('мишаня')
sam.add('salmonella')

dick.add('duck')
dick.add('spider-duck')
dick.add('t-rex')
dick.add('мишаня')
dick.add('salmon')
dick.add('eagle')
dick.add('lizzard')


willy = joe.difference(sam)
console.log(sam.isSubset(dick))