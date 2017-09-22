function add(obj){
	var text=document.getElementById("text");
	var query=document.getElementById("query");

	if(isNaN(text.value)||text.value==""){
		alert("请输入数字！");
	}
	else{
		if(query.childNodes.length<60){
			if(text.value>=10&&text.value<=100){
				var li=document.createElement("li");
				li.innerHTML=text.value;
				if(obj=="left"){
					query.insertBefore(li,query.firstChild);
				}
				else{
					query.appendChild(li);
				}
				//方法一：每次添加新的li后，给每个li动态绑定onclick
				// var li=document.getElementsByTagName("li");	
				// for (var i = 0; i < li.length; i++) {
				// 	li[i].onclick=function(){
				// 		this.parentNode.removeChild(this);
				// 	}
				// }
				li.style.height=2*(parseInt(text.value))+"px";
				text.value="";
				
			}
			else{
				alert("请输入10-100之间的数字！");
			}
		}
		else{
			alert("队列元素数量最多限制为60个！");
			text.value="";
		}
	}
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
function getData(){
	var data=[];
	var li=query.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++) {
		data[i]=li[i].innerHTML;
	}
	return data;
}
function sort(data,order){
	data.sort(function(a,b){
		if(order=="ascend"){
			return a-b;
		}
		else{
			return b-a;
		}
	});
	return data;
}
function render(data){
	for (var i = 0; i < data.length; i++) {
		var li=document.createElement("li");
		li.innerHTML=data[i];
		li.style.height=2*(parseInt(li.innerText))+"px";
		resort.appendChild(li);
	}
}
function bubble_sort(){
	var query=document.getElementById("query");
	var timer,i=0,j=0;
	var delay=1800/query.childNodes.length;
	timer=setInterval(function(){
		for (var i=0;i < query.childNodes.length-1;i++) {
			// if (j < query.childNodes.length-1-i) {
			// 	if(j>0){
			// 		query.childNodes[j-1].className="";
			// 	}
			// 	query.childNodes[j].className="current";
			// 	if(query.childNodes[j].offsetHeight>query.childNodes[j+1].offsetHeight){
			// 		query.insertBefore(query.childNodes[j+1],query.childNodes[j]);
			// 	}
			// 	j++;
			// }
			// else{
			// 	if (j>0) {
			// 		query.childNodes[j-1].className="";
			// 	}
			// 	i++;
			// 	query.childNodes[j].className="finish";
			// 	j=0;
			// }
			for (var j = 0; j < query.childNodes.length-i-1; j++) {
				if (j>0) {
					query.childNodes[j-1].className="";
				}
				query.childNodes[j].className="current";
				if (query.childNodes[j].offsetHeight>query.childNodes[j+1].offsetHeight) {
					query.insertBefore(query.childNodes[j+1],query.childNodes[j]);
				}
			}
			query.childNodes[j-1].className="";
			query.childNodes[j].className="finish";
		}
			query.childNodes[0].className="finish";
			clearInterval(timer);
	},delay)
	
}
// setInterval(bubble_sort,500);
function sortHander(obj){
	var sort_data=getData();
	sort_data=sort(sort_data,obj);
	render(sort_data);
}
window.onload=function(){
	(function(){
		var left_in=document.getElementById("left_in");
		var right_in=document.getElementById("right_in");
		var left_out=document.getElementById("left_out");
		var right_out=document.getElementById("right_out");
		var ascend=document.getElementById("ascend");
		var descend=document.getElementById("descend");
		var bubble=document.getElementById("bubble");
		var query=document.getElementById("query");
		var resort=document.getElementById("resort");
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
		ascend.onclick=function (){
			resort.innerHTML="";
			sortHander("ascend");
		}
		descend.onclick=function (){
			resort.innerHTML="";
			sortHander("descend");
		}
		bubble.onclick=function (){
			bubble_sort();
		}
		//方法二 添加事件监听器
		query.addEventListener("click",function(e){
			if(e.target.nodeName.toLowerCase()=="li"){
					alert("删除数字"+e.target.innerHTML);
					query.removeChild(e.target);
				}	
		});
	})();	
}
