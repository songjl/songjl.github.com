var observerable = function () {
  this.message = {}
}
observerable.prototype.on = function (type, fn) {
  if (!this.message[type]) {
    this.message[type] = [fn]
  } else {
    this.message[type].push(fn)
  }
}
observerable.prototype.remove = function (type) {
  if (this.message[type] instanceof Array) {
    this.message[type] = []
  }
}
observerable.prototype.emit = function (type, args) {
  if (!this.message[type]) {
    return
  }
  var len = this.message[type].length
  for(var i = 0; i < len; i++) {
    this.message[type][i].call(this, args)
  }
}

var o = new observerable()

o.on("test", function(a){
  console.log("emit"+ a)
})
o.on("test", function(a){
  console.log("emit2"+ a)
})
o.emit("test", 44)

