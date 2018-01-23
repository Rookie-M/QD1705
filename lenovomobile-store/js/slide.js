/*
	轮播图
*/

define(["jquery"], function($){
	var slide = function(){
		var aBtns = $(".b-slider-box").find("ol").find("li");
		var oUl = $(".b-slider-box").find("ul");
		var aLi = oUl.find("li");

		var iNow = 0;
		var timer = null; 

		aBtns.click(function(){
			//b:点击按钮，将当前的iNow改成当前按钮的下标
			iNow = $(this).index();
			tab();
		})
		function tab(){
			aBtns.attr("class", "");
			aBtns.eq(iNow).attr("class", "active");

			//让ul去动
			/*oUl.animate({
				top: -560 * iNow
			}, 500, function(){
				if(iNow == aBtns.size()){
					oUl.css("top", 0);
					iNow = 0; //重置
				}
			})*/
			if(iNow == aBtns.size()){
				oUl.css("top", 0);
				iNow = 0;
			}
			oUl.css({
				top: -560 * iNow,
				opacity: 0.6
			})
			.animate({
				opacity : 1
			}, 1000);
		}
		//c:我们需要启动定时器，设置让循环广告窗口自己滚动
		function timerInner(){
			iNow++;
			// document.title = iNow;
			tab();
			//处理第六张图片 是第一张图片 显示下标为0的按钮选中
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}
		}
		//d: 启动定时器
		timer = setInterval(timerInner, 2000);
		//e:添加移入移出事件
		oUl.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 3000);
		})
		return "循环广告"
	}

	function mainSlider(){
		//获取页面元素
		var oul = $("#phone-slider").find("ul");
		var alis = oul.find("li");
		//记录运动的次数
		var count = 0;
		var timer = null;
		timer = setInterval(function(){
			count++;
			tab();
		}, 2000);

		function tab(){
			if(count == 2){
				count = 0;
			}
			// oul.css("top", -400 * count + "px").css("opacity", "0.6");
			oul.css({
				top: -400 * count,
				opacity : 0.3
			})
			.animate({
				opacity : 1
			},1000);
		}
		
		return "正文循环广告"
	}
	function modsSlider(){
		//获取页面元素
		var oul = $("#mods-slider").find("ul");
		var alis = oul.find("li");
		//记录运动的次数
		var count = 0;
		var timer = null;
		timer = setInterval(function(){
			count++;
			tab();
		}, 2000);

		function tab(){
			if(count == 3){
				count = 0;
			}
			// oul.css("top", -400 * count + "px").css("opacity", "0.6");
			oul.css({
				top: -400 * count,
				opacity : 0.3
			})
			.animate({
				opacity : 1
			},1000);
		}
		
		return "正文循环广告"
	}
	
	return {
		slide: slide,
		mainSlider: mainSlider,
		modsSlider:modsSlider
	}
})




