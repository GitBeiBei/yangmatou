//var box =document.querySelector('.section-header-lunbo')
//var boxList =box.children
//var boxlength=boxList.length
//var boxWidth=boxList[0].offsetWidth
//box.style.width=boxlength*boxWidth+'px'
//var btn=document.querySelectorAll('.section-header-btn')
//var index =1
//var time =null
//var auyotime=null
//aiments()
//function aiments(){
//		auyotime = setInterval(function(){
//		animent()
//	},2000)
//}
//function animent(){
//	time = setInterval(function(){
//		var left =box.offsetLeft-10
//		box.style.left=left+'px'
//		if(left<=-(index+1)*boxWidth){
//			clearInterval(time)
//			index++
//			if(index>=boxlength-1){
//				box.style.left=-boxWidth+'px'
//				index=1
//			}
//		}
//	},20)
//}
//document.addEventListener('webkitvisibilitychange'||'mozvisibilitychange',function(){
//	var ishidade=document.webkitVisibilityState
//	if(ishidade=='hidden'){
//		clearInterval(auyotime)
//	}else{
//		aiments()
//	}
//})
//box.onmouseenter=function(){
//	clearInterval(auyotime)
//}
//box.onmouseleave=function(){
//	aiments()
//}