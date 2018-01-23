define(["jquery"], function($){
	var main = function(){
		//下拉菜单
		$.ajax({
			url: 'data/nav-list.json',
			type: 'get',
			success: function(data){
				for(var i = 0; i < data.length; i++){
					var html = "";
					for(var j = 0; j < data[i].list.length; j++){
						html += `<li>
								<a href="${data[i].list[j].src}">
									<img src="${data[i].list[j].img}" alt="">
									<h4 class="title">${data[i].list[j].title}</h4>
									<div class="price-box">￥${data[i].list[j].price}<span class="price"></span><del>${data[i].list[j].old_price}</del></div>
								</a>
							</li>`;
					}
					$(".inter").find(".phoen-nav-list").eq(i).html(html);
				}
			}
		});
		$("#nav").find('li').slice(0, 3).mouseenter(function() {
			var index = $(this).index();
			// console.log(index);
			$(".nav-list").stop().animate({height: 200}, 300);

			$(".inter").find(".phoen-nav-list").eq(index).css("display", "block");
			$(".inter").find(".phoen-nav-list").eq(index).css("display", "block");
			$(".inter").find(".phoen-nav-list").eq(index).mouseenter(function(event) {
				$(".inter").find(".phoen-nav-list").eq(index).css("display", "block");
				$(".nav-list").stop().animate({height: 200}, 300);
			});
		});
		$("#nav").find("li").slice(0, 3).mouseleave(function() {
			$(".nav-list").stop().animate({height: 0}, 300);
			$(".inter").find(".phoen-nav-list").css("display", "none");
			$(".inter").find(".phoen-nav-list").mouseleave(function() {
				$(".nav-list").stop().animate({height: 0}, 300);
				$(".inter").find(".phoen-nav-list").css("display", "none");
			});
		});
		
		




		return "我是main函数"
	}
	return {
		main: main
	}
})