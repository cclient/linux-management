/**
 * Created by cdpmac on 15/10/10.
 */

function add(num1, num2){
    return num1 + num2;
}

function curr(fn){
    var outargs= Array.prototype.slice.call(arguments,1);
    return function(){
        var args= outargs.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, args);
    }
}
var curriedAdd =curr(add,5);
console.log(curriedAdd(3));
function bind(fn,context){
    return  function(){
        fn.apply(context,arguments);
    }
}