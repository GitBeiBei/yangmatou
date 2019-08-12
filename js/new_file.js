var isbar =document.querySelectorAll('.aside-ber')
var gouwu =document.querySelector('.aside-gouwu')
for( var i=0;i<isbar.length;i++){
	isbar[i].onclick=function(){
		var right= ''
		if(isbar.currentStyle){
			right =gouwu.currentStyle.right
		}else{
			right =getComputedStyle(gouwu,false)['right']
		}
		var right = parseInt(right)
	 	var speed = 0;
		var classNames=this.className
		if(right>=-265 && classNames.indexOf('on')>=0){
			speed=-12
			this.classList.remove('on')
		}else{
			speed=12
			this.classList.add('on')
			var kefu=document.querySelector('.kefu')
			var gos=document.querySelector('.gouwu')
			if(classNames.indexOf('aside-ber-cart')>=0){
				this.nextElementSibling.classList.remove('on')
				gos.style.display='block'
				kefu.style.display='none'
			}else{
			 	this.previousElementSibling.classList.remove('on')
				gos.style.display='none'
				kefu.style.display='block'
			}
		}
		var ietmss=null
		var ietmss= setInterval(()=>{
			right +=speed
			gouwu.style.right=right+'px'
			if((right>=35&& speed>0)||(right<=-265&&speed<0)){
				clearInterval(ietmss)
			}else{
				gouwu.style.right=right+'px'
			}
		},10)
	}
}
