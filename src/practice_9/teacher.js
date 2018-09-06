


"use strict";
import Person from "../practice_9/person";
class Teacher extends Person{
    constructor(num,name,age,klass){
        super(num,name,age);
        this.klass=klass;
    }

    introduce(){
        var res=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I `;
        res += this.klass===undefined?`teach No Class.`:`teach Class ${this.klass.number}.`;
        return res;
    }

    introduceWith(studentJerry){
        if(studentJerry.klass === this.klass){
            return `${super.introduce()} I am a Teacher. I teach Jerry.`
        }else{
            return `${super.introduce()} I am a Teacher. I don't teach Jerry.`
        }
    }
}

export default Teacher;



