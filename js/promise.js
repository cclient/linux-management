//setTimeout(function(){console.log(4)},0);
//new Promise(function(resolve){
//    console.log(1)
//    for( var i=0 ; i<10000 ; i++ ){
//        i==9999 && resolve()
//    }
//    console.log(2)
//}).then(function(){
//        console.log(5)
//    });
//console.log(3);


setTimeout(function(){console.log(4)},0);
console.log(1)
for( var i=0 ; i<10000 ; i++ ){
    if(i=9999)break
}
console.log(2)
process.nextTick(function(){console.log(5)})
console.log(3);
//    console.log(2)

//        console.log(5)
//    });
//console.log(3);
