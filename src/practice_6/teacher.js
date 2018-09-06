//should have field name, age and class number,should overwrite Person introduce, introduce with name

"use strict";
import Person from "../practice_3/person";
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        var res=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I `;
         res += this.klass===undefined?`teach No Class.`:`teach Class ${this.klass}.`;
         return res;
    }
}

export default Teacher;



