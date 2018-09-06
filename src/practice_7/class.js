
//should get display name with number
"use strict";
class Class{
    constructor(klass){
        this.number=klass;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
}

export default Class;


