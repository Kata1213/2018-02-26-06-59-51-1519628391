


"use strict";
import Person from "../practice_9/person";
class Teacher extends Person{
    constructor(num,name,age,klass){
        super(num,name,age);
        this.klass=klass;
    }

    introduce(){
        return `${super.introduce()} I am a Teacher. I teach ${this.klass ? `Class ${this.klass.number}` : 'No Class' }.`;
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



