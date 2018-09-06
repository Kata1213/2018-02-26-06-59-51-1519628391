


//should overwrite Person introduce, introduce with name and age
"use strict";
import Person from "../practice_3/person";
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }

    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I have a job.`;
    }
}

export default Worker;


