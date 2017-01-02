var a = (
  function(){
    var a= 0;
    do{a++} while(a<2)
    return function (b){
      a+=b;
      this.a = a
    }
  }
)()
var aa = new a(1)
console.log(aa.a)
var bb = new a(2)

console.log(bb.a)