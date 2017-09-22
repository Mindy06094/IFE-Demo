function add(obj){
	var text=document.getElementById("text");
	var query=document.getElementById("query");
	if(isNaN(text.value)||text.value==""){
		alert("请输入数字！");
	}
	else{
		var li=document.createElement("li");
		li.innerHTML=text.value;
		if(obj=="left"){
			query.insertBefore(li,query.firstChild);
		}
		else{
			query.appendChild(li);
		}
		text.value="";
	}
	//方法一：每次添加新的li后，给每个li动态绑定onclick
	// var li=document.getElementsByTagName("li");	
	// for (var i = 0; i < li.length; i++) {
	// 	li[i].onclick=function(){
	// 		this.parentNode.removeChild(this);
	// 	}
	// }
}
function remove(obj){
	var query=document.getElementById("query");
	if(obj=="left"){
		alert("删除数字"+query.firstChild.innerHTML);
		query.removeChild(query.firstChild);
	}
	else{
		alert("删除数字"+query.lastChild.innerHTML);
		query.removeChild(query.lastChild);
	}
}
window.onload=function(){
	(function(){
		var left_in=document.getElementById("left_in");
		var right_in=document.getElementById("right_in");
		var left_out=document.getElementById("left_out");
		var right_out=document.getElementById("right_out");
		var query=document.getElementById("query");
		left_in.onclick=function (){
			add("left");
		};
		right_in.onclick=function (){
			add("right");
		};
		left_out.onclick=function (){
			remove("left");
		};
		right_out.onclick=function (){
			remove("right");
		};
		//方法二 添加事件监听器
		query.addEventListener("click",function(e){
			if(e.target.nodeName.toLowerCase()=="li"){
					alert("删除数字"+e.target.innerHTML);
					query.removeChild(e.target);
				}	
		});
	})();	
}
