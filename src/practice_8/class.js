

"use strict";
class Class{
    constructor(number,leader){
        this.number = number;
        this.leader = leader;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        return student.klass.number === this.number?this.leader = student:this.leader = null;
    }
}

export default Class;


