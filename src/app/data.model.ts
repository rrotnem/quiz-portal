export class Data{
    constructor(public id: number, public question:string,
         public options: Option, public answer: string ){}
        
}

export class Option{
    constructor(public A: string, public B: string, public C: string, public D: string){}
}