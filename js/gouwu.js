var gouwu=document.querySelectorAll('.dandu-xontent')
var tenp=0
for(var i=0;i<gouwu.length;i++){
	gouwu[i].onclick=function(){
		var ki=this.children
		if(tenp==0){
			ki[0].style.display='block'
			ki[1].style.display='none'
			tenp=1
		}else{
			ki[0].style.display='none'
			ki[1].style.display='block'
			tenp=0
		}
	}
}
// 购物点击删除
var btnhus =document.querySelector('.shop-list-box li')
var btnhu =document.querySelector('.shop-list-box')
var btndlt=document.querySelectorAll('.btndlt')
for(var i=0;i<btndlt.length;i++){
	btndlt[i].onclick=function(){
		var dlt=this.parentNode.parentNode.parentNode.parentNode.parentNode
		btnhu.removeChild(dlt)
	}
}



// 点击按钮加商品数量
var btntenp=document.querySelectorAll('.groupur-quantity')
var inputshop=document.querySelectorAll('.input-shop')
for(let k=0;k<btntenp.length;k++){
		btntenp[k].onclick=function(){
			for(let i=0;i<inputshop.length;i++){
				console.log(i)
			}
		}
}                        
