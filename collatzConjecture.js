/*
    3n + 1
    ex) 7
    7 * 3 + 1
    22 / 2
    11 * 3 + 1
    34 / 2
    17 * 3 + 1
    32 / 2
    16 / 2
    8 / 2
    4 / 2
    2 / 2
    1
*/
class collatzConjecture{
    constructor(num){
        this.stroage = []
        this.children = null
        this.value = num
    }
    push(num){
        if (num === 1){
            this.stroage.push(num)
            return this.stroage
        }
        else if(this.even(num)){
            this.stroage.push(num)
            return this.push(this.divide(num))
        }
        else{
            this.stroage.push(num)
            return this.push(num * 3 + 1)
        }
    }
    even(num){
        if(num % 2 === 0){
            return true
        }
        else{
            return false
        }
    }
    divide(num){
        return num / 2
    }
}

const collatz = new collatzConjecture()

collatz.push(9844156)
console.log(collatz.stroage)