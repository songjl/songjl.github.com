/**
 * Created by windknow on 16/4/17.
 */
var maxnumofpost = 1;
var blogitem=[
    {title:"基于jquery和bootstrap的下拉树组件",date:"2016-04-16"}
]
function init(){
    var bloglist = [];
    var bloglistEl = document.getElementById("bloglist");
    for(var i=maxnumofpost;i>0;i--){
        var _href = "post/post_"+i+".html";
        var _li = document.createElement("li");
        var _a = document.createElement("a");
        _a.setAttribute("href",_href);
        _a.innerText=blogitem[i-1].title;
        var _date = document.createElement("span");
        _date.classList.add("blog-date");
        _date.innerText=blogitem[i-1].date;
        _li.appendChild(_a);
        _li.appendChild(_date);
        bloglistEl.appendChild(_li);
    }
}

init();
