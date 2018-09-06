
"use strict";
import Student from "./student";

class Class{
    constructor(number,leader){
        this.number = number;
        this.leader = leader;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        if(student.klass.number == this.number){
            this.leader = student;
        }else{
            console.log("It is not one of us.");
        }
    }

    appendMember(student){
        return student.klass=this;
    }
}

