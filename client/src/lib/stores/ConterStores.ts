import { makeAutoObservable} from 'mobx'

export default class CounterStores{
    title='Counter Store'
    count=0;
    events:string[]=[`initial count is ${this.count}`]
    constructor(){
        makeAutoObservable(this)
    }

    increment=(amount=1)=>{
            this.count+=amount;
            this.events.push(`Increments By ${amount} - count is now ${this.count}`)
    }
    decrement=(amount=1)=>{
        this.count-=amount;
        this.events.push(`Decrements By ${amount} - count is now ${this.count}`)
    }

    get eventCount(){
        return this.events.length
    }

}