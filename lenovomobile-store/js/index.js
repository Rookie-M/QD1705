define(["jquery"], function($){
	function main(){
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

	//下载数据
	function indexData(){
		$.ajax({
			url: 'data/main.json',
			type: 'get',
			success: function(data){
				// console.log(data[0]);
				//明星产品
				var arr0 = data[0].item0;
				var arrHtml0 = "";
				for(var i = 0; i < arr0.length; i++){
					arrHtml0 += `<li>
									<a href="${arr0[i].src}">
										<span class="i-mark ${arr0[i].class}">${arr0[i].class_txt}</span>
										<span class="line"></span>
										<img src="${arr0[i].img}" alt="">
										<div class="discript">
											<h3 class="tit">${arr0[i].title}</h3>
											<div class="price">
												<span>￥${arr0[i].price}</span>
											</div>
											<p class="txt">${arr0[i].descript}</p>
										</div>
									</a>
								</li>`
				}
				$(".start-mod").html(arrHtml0);

				//moto手机
				var arr1 = data[1].item1;
				var arrHtml1 = "";
				for(var i = 0; i < arr1.length; i++){
					arrHtml1 += `<li>
									<a index="1" href="${arr1[i].src}">
										<span class="i-mark ${arr1[i].class}">${arr1[i].class_txt}</span>
										<img src="${arr1[i].img}" width="180" height="180" alt="">
										<div class="discript">
											<h3 class="tit">${arr1[i].title}</h3>
											<p class="txt">${arr1[i].descript}</p>
											<div class="price">
												<span>¥${arr1[i].price}</span>
												<del>${arr1[i].old_price}</del>
											</div>
										</div>
									</a>
								</li>`
				}
				$("#phone-list").html(arrHtml1);

				//moto 手机轮播图
				var arr4 = data[4].item4;
				var arrHtml4 = "";
				for(var i = 0; i < arr4.length; i++){
					arrHtml4 += `<li>
								<a index="2" href="${arr4[i].src}">
									<img src="${arr4[i].img}" width="1200" height="400" alt="">
								</a>
								<div class="discript" id="discript">
									<a index="2" href="http://www.motorola.com.cn/store/165_573.html" target="_blank">
										<h3 class="tit">${arr4[i].title}</h3>
										<div class="price">
											<span>¥${arr4[i].price}</span>
										</div>
										<p class="txt">${arr4[i].descript}</p>
									</a>
									<a index="video2" href="javascript:;" data-src="http://image.motorola.com.cn/upload/manager/video/20171025/1508921761.mp4" class="view-btn">${arr4[i].video}
									</a>
								</div>							
							</li>`;
				}
				$("#recomslider3").html(arrHtml4);

				//moto mods
				var arr2 = data[2].item2;
				var arrHtml2 = "";
				for(var i = 0; i < arr2.length; i++){
					arrHtml2 += `<li>
									<a index="1" href="${arr2[i].src}">
										<span class="i-mark ${arr2[i].class}">${arr2[i].class_txt}</span>
										<img src="${arr2[i].img}" width="180" height="180" alt="">
										<div class="discript">
											<h3 class="tit">${arr2[i].title}</h3>
											<p class="txt">${arr2[i].descript}</p>
											<div class="price">
												<span>¥${arr2[i].price}</span>
											</div>
										</div>
									</a>
								</li>`
				}
				$("#mods-list").html(arrHtml2);

				//moto mods 轮播图
				var arr5 = data[5].item5;
				var arrHtml5 = "";
				for(var i = 0; i < arr5.length; i++){
					arrHtml5 += `<li>
								<a index="2" href="${arr5[i].src}">
									<img src="${arr5[i].img}" width="1200" height="400" alt="">
								</a>
								<div class="discript" id="discript">
									<a index="2" href="">
										<h3 class="tit">${arr5[i].title}</h3>
										<div class="price">
											<span>¥${arr5[i].price}</span>
											<del>${arr5[i].old_price}</del>
										</div>
										<p class="txt">${arr5[i].descript}</p>
									</a>
									<a index="video2" href="javascript:;" data-src="http://image.motorola.com.cn/upload/manager/video/20171025/1508921761.mp4" class="view-btn">${arr5[i].video}
									</a>
								</div>							
							</li>`;
				}
				$("#recomslider1").html(arrHtml5);

				//精品配件
				var arr3 = data[3].item3;
				var arrHtml3 = "";
				for(var i = 0; i < arr3.length; i++){
					arrHtml3 += `<li>
									<a index="1" href="${arr3[i].src}">
										<span class="i-mark ${arr3[i].class}">${arr3[i].class_txt}</span>
										<img src="${arr3[i].img}" width="180" height="180" alt="">
										<div class="discript">
											<h3 class="tit">${arr3[i].title}</h3>
											<p class="txt">${arr3[i].descript}</p>
											<div class="price">
												<span>¥${arr3[i].price}</span>
												<del>${arr3[i].old_price}</del>
											</div>
										</div>
									</a>
								</li>`
				}
				$("#pj-list").html(arrHtml3);

				//配件 轮播图
				var arr6 = data[6].item6;
				var arrHtml6 = "";
				for(var i = 0; i < arr6.length; i++){
					arrHtml6 += `<li>
								<a index="2" href="${arr6[i].src}">
									<img src="${arr6[i].img}" width="1200" height="400" alt="">
								</a>
								<div class="discript" id="discript">
									<a index="2" href="">
										<h3 class="tit">${arr6[i].title}</h3>
										<div class="price">
											<span>¥${arr6[i].price}</span>
											<del>${arr6[i].old_price}</del>
										</div>
										<p class="txt">${arr6[i].descript}</p>
									</a>
									<a index="video2" href="javascript:;" data-src="http://image.motorola.com.cn/upload/manager/video/20171025/1508921761.mp4" class="view-btn">${arr6[i].video}
									</a>
								</div>							
							</li>`;
				}
				$("#recomslider2").html(arrHtml6);

			}
		});
		// alert();
		return "数据成功下载"
	}

	


	
	return {
		main: main,
		indexData: indexData
	}
})