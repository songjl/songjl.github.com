// 关于继承

var ParentCls = function(name) {
  this.name = name||"default value"
  this.books = ["1","2","3"]
}
ParentCls.prototype.add = function(item){
  this.books.push(item)
}
//1.原型链继承的副作用 类式继承
var SubClass = function () {

}
SubClass.prototype = new ParentCls()

var sub1 = new SubClass()
var sub2 = new SubClass()
var i = 1;
function testcase(sub1, sub2){
  try{
    console.log("======="+i+"========")
    console.log("sub1 name:" + sub1.name)
    console.log("sub2 name:" + sub2.name)
    console.log("sub1 add book")
    sub1.add("test")
    sub2.books.push("test2")
  } catch(e){
    console.log(e)
  }

  console.log("sub1book:"+sub1.books)
  console.log("sub2books"+sub2.books)
  i++;
}
testcase(sub1,sub2)
//2.构造函数继承
SubClass = function (name) {
  ParentCls.call(this, name)
}
sub1 = new SubClass('name1')
sub2 = new SubClass('name2')
testcase(sub1,sub2)

//3.构造函数加1,2 组合
SubClass = function (name) {
  ParentCls.call(this, name)
}
SubClass.prototype = new ParentCls()
sub1 = new SubClass('name1')
sub2 = new SubClass('name2')
testcase(sub1,sub2)

//4 原型式继承
function inheritObject(o) {
  function F(){}
  F.prototype = o
  return new F()
}
var book = {
  name: "name",
  books: [1,2,3]
}
sub1 = inheritObject(book)
sub2 = inheritObject(book)
testcase(sub1,sub2)
// 5寄生式
function createBook(o){
  var obj = inheritObject(o)
  return o
}
sub1 = createBook(book)
sub2 = createBook(book)
testcase(sub1,sub2)


//  寄生组合式
function inheritPrototype(subCls, superCls) {
  // 让prototype不是一个引用
  var p = inheritObject(superCls.prototype)
  console.log(p)
  p.constructor = subCls
  subCls.prototype = p
}
subClass = function (name) {
  ParentCls.call(this, name)
}
inheritPrototype(subClass, ParentCls)

sub1 = new subClass("test1")
sub2 = new subClass("test2")
testcase(sub1,sub2)

var ParentCls2 = function(option) {
  this.name = option.name
  this.init = option.init
  this.books = ["1","2","3"]
}
ParentCls2.prototype.add = function(item){
  this.books.push(item)
}

ParentCls2.extend = function (option) {
  var subCls = function () {
    ParentCls2.call(this, option)
    this.init()
  }
  inheritPrototype(subCls, ParentCls2)
  return subCls
}
ParentCls2.extend = function (option) {
  var subCls = function () {
    ParentCls2.call(this, option)
    this.init()
  }
  subCls.prototype = new ParentCls2(option)
  return subCls
}
sub1 = ParentCls2.extend({
  name: "sub1",
  init: function() {
    console.log("init me"+ this.name)
  }
})
sub2 = ParentCls2.extend({
  name: "sub2",
  init: function() {
    console.log("init me2"+ this.name)
  }
})
testcase(new sub1(), new sub2())







