//Namespace is a container for set of identifiers, functions, methods and all that. It gives a level of direction to its contents so that it will be well distinguished and organized.

//Namespacing doesn’t allow us to pollute our code base and makes it cleaner by grouping our code logically and avoiding unexpected and expected collision.

//Namespac example
//Here ‘MYAPPLICATION‘ is acted as a JavaScript namespace and the only global object which contains all other items.

var MYAPPLICATION = {
    calculateTax: function (item) {
        return item * 1.40;
    },
    product: function (cost) {
        this.cost = cost;
        this.getCost = function(){
                          return this.cost;
                       };
    },
    doTaxCalculations: function () {
        var p = new MYAPPLICATION.product(100);
        alert(this.calculateTax(p.getCost()));
    }
}

