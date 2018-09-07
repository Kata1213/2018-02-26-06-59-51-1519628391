
"use strict";
/* ECMAScript 5 引入严格模式('strict mode')概念。
通过严格模式，在函数内部选择进行较为严格的全局或局部的错误条件检测，
使用严格模式的好处是可以提早知道代码中的存在的错误，
*/
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

export default Person;

