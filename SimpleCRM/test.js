var Class1 = function(){
    this.action1 = function(input1){
        //saker görs med input 1
    }
}
var Class2 = function(){
    this.action2 = function(input2){
        //saker görs med input2
    }
}
var Class3 = function(){
    this.action3 = function(input1, input2){
        //saker görs med input1 och input2
    }
}

var Facade = function(input1, input2){
    this.input1 = input1
    this.input2 = input2
}

Facade.prototype = {
    callActions: function(input1, input2){
        new Class1().action1(input1)
        new Class2().action2(input2)
        new Class3().action3(input1, input2)
    }
}

function doStuff() {
    var output = new Facade()
    output.callActions("input1", "input2")
}

doStuff()

new Class1().action1("input1")
new Class2().action2("input2")
new Class3().action3("input1", "input2")