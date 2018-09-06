
//should overwrite Person introduce, introduce with no field
"use strict";
import Person from "../practice_3/person";
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }

    introduce(){
        return `I am a Worker. I have a job.`;
    }
}

export default Worker;


