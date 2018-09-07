

"use strict";
class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        return student.klass.number === this.number?this.leader = student:this.leader = null;
    }
}

export default Class;


