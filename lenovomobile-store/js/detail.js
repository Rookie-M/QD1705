define(["jquery", "jquery-cookie"], function($){
	function detail(){
		// sc_cart();
		//加载详情页数据
		$.ajax({
			url: 'data/detail.json',
			type: 'get',
			success: function(data){
				 console.log(data[13].id);
				// $("#gifts-list").html(comp);
				var id = 0;
				
				$(".footer-title").html(data[1].title[0].title0);
				$("#priceShowArea").html(data[2].price[0].price0);
				$(".head-title").html(data[1].title[0].title0);
				$(".head-title").attr({"id": data[12].id})
				$(".product-summary").find(".title-desc").html(data[0].describe[0].desc);
				$(".color").html("");
				loadVersions(0, data);//加载版本
				loadColor(0, data);//加载颜色
				loadCapacity(0, data);//加载容量
				loadImg(0, data);//加载图片
				loadBigImg(0, data);//加载大图
				support(0, data);//加载服务支持
				// console.log(comp(0, data));
				comp(0, data);//添加赠品
				price(0, data);//添加价格
				imgHover();//图片hover
				// title(0, data);

				//给颜色选项添加的点击事件
				$(".color").find("li").click(function(){
					var index = $(this).index();
					$(this).parent().find("li").attr("class","")
					$(this).attr("class","active selected");
					loadImg(index, data);
					loadBigImg(index, data);
					imgHover();
					if(index == 1){
						loadImg(index, data);
						loadBigImg(index, data);
						imgHover();
						$("#gift-list").html("");//将赠品清空
						$(".head-title").html("");//将标题清空
						$(".head-title").html(data[1].title[0].title1);//添加新的标题
						$(".head-title").attr({"id": data[13].id})
						$(".footer-title").html("");
						$(".footer-title").html(data[1].title[0].title1);
						id = $(".head-title").attr("id");
				console.log(id);
					}else{
						loadImg(index, data);
						loadBigImg(index, data);
						imgHover();
						comp(0, data);
						$(".footer-title").html("");
						$(".footer-title").html(data[1].title[0].title0);
						$(".head-title").html("");
						$(".head-title").html(data[1].title[0].title0);
						$(".head-title").attr({"id": data[12].id});
						id = $(".head-title").attr("id");
				console.log(id);
					}
				});
		
				//给版本添加的点击事件
				$(".versions").find("li").click(function() {
					// console.log($(this).index());
					var _index = $(this).index();
					$(this).parent().find("li").attr("class","")
					$(this).attr("class","active selected");

					$(".color").find("li").click(function(){
						$(this).parent().find("li").attr("class","");
						$(this).attr("class","active selected");
					});
					loadColor(_index, data);
					// console.log(_index);
					if(_index == 0){
						loadImg(_index, data);
						loadBigImg(_index, data);
						imgHover();
						comp(0, data);
						price(0, data);
						$(".footer-title").html("");
						$(".footer-title").html(data[1].title[0].title0);
						$(".head-title").html("");
						$(".head-title").html(data[1].title[0].title0);
						// console.log(1);
						$(".color").find("li").click(function(){
							var i = $(this).index();
							$(this).parent().find("li").attr("class","");
							$(this).attr("class","active selected");
							// console.log(i);
							if(i == 1){
								loadImg(_index + 1, data);
								loadBigImg(_index + 1, data);
								imgHover();
								$("#gift-list").html("");//将赠品清空
								$(".head-title").html("");//将标题清空
								$(".head-title").html(data[1].title[0].title1);//添加新的标题
								$(".footer-title").html("");
								$(".footer-title").html(data[1].title[0].title1);
							}else{
								loadImg(_index, data);
								loadBigImg(_index, data);
								imgHover();
								comp(0, data);
								$(".head-title").html("");
								$(".head-title").html(data[1].title[0].title0);
								$(".footer-title").html("");
								$(".footer-title").html(data[1].title[0].title0);
							}
						});
						
					}else if(_index == 1){
						loadImg(_index + 1, data);
						loadBigImg(_index + 1, data);
						imgHover();
						// console.log(_index);
						// price(1, data);
						// $(".price").html("");
						/*$(".price").html(data[2].price[0].price1);
						$("#priceShowArea").html("");
						$("#priceShowArea").html(data[2].price[0].price1);*/
						price(0, data);
						$("#gift-list").html("");
						$(".head-title").html("");
						$(".head-title").html(data[1].title[0].title2);


						$(".head-title").attr({"id": data[14].id});
						id = $(".head-title").attr("id");
				console.log(id);
						$(".footer-title").html("");
						$(".footer-title").html(data[1].title[0].title2);
					}else if(_index == 2){
						loadImg(_index + 1, data);
						loadBigImg(_index + 1, data);
						imgHover();
						$(".head-title").html("");//将标题清空
						$(".head-title").html(data[1].title[0].title3);//添加新的标题
						$(".footer-title").html("");
						$(".footer-title").html(data[1].title[0].title3);
						$(".color").find("li").click(function(){
							var i = $(this).index();
							$(this).parent().find("li").attr("class","");
							$(this).attr("class","active selected");
							if(i == 1){
								loadImg(_index + 2, data);
								loadBigImg(_index + 2, data);
								imgHover();
								$(".head-title").html("");//将标题清空
								$(".head-title").html(data[1].title[0].title4);//添加新的标题
								$(".head-title").attr({"id": data[16].id});
								$(".footer-title").html("");
								$(".footer-title").html(data[1].title[0].title4);
								id = $(".head-title").attr("id");
				console.log(id);
							}else{
								loadImg(_index + 1, data);
								loadBigImg(_index + 1, data);
								imgHover();
								$(".head-title").html("");//将标题清空
								$(".head-title").html(data[1].title[0].title3);//添加新的标题
								$(".head-title").attr({"id": data[15].id});
								$(".footer-title").html("");
								$(".footer-title").html(data[1].title[0].title3);
								id = $(".head-title").attr("id");
				console.log(id);
							}
						});
					}
					
					
				});
			}
		});
		
		//图片hover状态
		function imgHover(){
			//图片hover
			$(".control-bar").find("li").mouseenter(function() {
				$(".control-bar").find("li").attr({
					class: ''
				});
				$(".img-box").find("img").css({
					display: 'none'
				});
				$(this).attr({
					class: "active"
				})
				$(".img-box").find("img").eq($(this).index()).css({
					display: 'block'
				});
			});
		}
		
		//初始状态
		function activeSelect(){
			$(".color").find("li").eq(0).attr("class","active selected");
			$(".versions").find("li").eq(0).attr("class","active selected");
			$(".capacity").find("li").eq(0).attr("class","active selected");
		}
		//给选项添加的点击事件
		function selectClick(arr,index){
			
			$(".capacity").find("li").click(function(){
				$(this).parent().find("li").attr("class","")
				$(this).attr("class","active selected");
			});
			/*$(".versions").find("li").click(function(){
				$(this).parent().find("li").attr("class","")
				$(this).attr("class","active selected");
			});*/
		}

		//加载颜色选项
		function loadColor(index,arr){
			$(".color").html("");
			var html = "";
			html += `<li class="sku selected active">
	                  	${arr[9].color[index].color0}
	                </li>
	                <li class="sku">
	                	${arr[9].color[index].color1}
	                </li>`;	
			$(".color").html(html);
			// console.log($(".color").find("#none").html());

			
		}

		//加载版本选项
		function loadVersions(index,arr){
			$(".color").html("");
			var html = "";
			html += `<li class="sku selected active">
	                  		<span class="sel-ico"></span>${arr[7].versions[index].versions0}
	                   	</li>
	                   	<li class="sku">
	                   		<span class="sel-ico"></span>${arr[7].versions[index].versions1}
	                   	</li>
	                   	<li class="sku">
	                   		<span class="sel-ico"></span>${arr[7].versions[index].versions2}
	                   	</li>`;	
			$(".versions").html(html);
		}

		//加载容量选项
		function loadCapacity(index,arr){
			$(".capacity").html("");
			var html = "";
			html += `<li class="sku selected active">
	                  	<span class="sel-ico"></span>${arr[8].capacity[index].capacity0}
	                </li>
	                <li class="sku">
	                	<span class="sel-ico"></span>${arr[8].capacity[index].capacity1}
	                </li>`;	
			$(".capacity").html(html);
		}

		//加载缩小的图片
		function loadImg(index,arr){
			$(".control-bar").html("");
			var html = "";
			html += `<li class="active"><img src="${arr[11].smallImg[index].slider_icon_img00}"></li>
							<li><img src="${arr[11].smallImg[index].slider_icon_img01}"></li>
							<li><img src="${arr[11].smallImg[index].slider_icon_img02}"></li>
							<li><img src="${arr[11].smallImg[index].slider_icon_img03}"></li>`;	
			$(".control-bar").html(html);
		}

		//加载大图
		function loadBigImg(index,arr){
			$(".img-box").html("");
			var html = "";
			html += `<img src="${arr[10].bigImg[index].slider_big_img0}" alt="" class="img1">
							<img src="${arr[10].bigImg[index].slider_big_img1}" alt="">
							<img src="${arr[10].bigImg[index].slider_big_img2}" alt="">
							<img src="${arr[10].bigImg[index].slider_big_img3}" alt="">`;	
			$(".img-box").html(html);
		}

		//加载支持的服务
		function support(index, arr){
			$(".support").html("");
			var html = "";
			html += `<span>
                     			<img src="${arr[5].supSrc[index].support_icon_hb}" alt="">${arr[6].supTxt[index].support_icon_hb_txt}
                     		</span>
                     		<span>
                     			<img src="${arr[5].supSrc[index].support_icon_sf}" alt="">${arr[6].supTxt[index].support_icon_sf_txt}
                     		</span>
                     		<span>
                     			<img src="${arr[5].supSrc[index].support_icon_seven}" alt="">${arr[6].supTxt[index].support_icon_seven_txt}
                     		</span>`;
            $(".support").html(html);
		}

		//加载赠品
		function comp(index, arr){
			$("#gift-list").html("");
			var html = "";
			html += `
						<span class="sale-t">赠<i class="space"></i>品：</span>
						<ul class="gifts-list">
							<li>
	                       		<a target="_blank" href=""><img src="${arr[3].compSrc[index].complimentary_img0}" alt="">${arr[4].compTxt[index].complimentary_img0_txt}</a>
	                       	</li>
	                       	<li>
	                       		<a target="_blank" href=""><img src="${arr[3].compSrc[index].complimentary_img1}" alt="">${arr[4].compTxt[index].complimentary_img1_txt}</a>
	                       	</li>
	                       	<li>
	                       		<a target="_blank" href=""><img src="${arr[3].compSrc[index].complimentary_img2}" alt="">${arr[4].compTxt[index].complimentary_img2_txt}</a>
	                       	</li>
	                    </ul>`;

	                    
	        $("#gift-list").html(html);
		}

		//标题未加载成功
		/*function title(index, arr){
			$(".head-title").html("");
			$(arr[1].title[index].title0).append('.head-title');
		}*/

		//价格加载
		function price(index, arr){
			$(".price").html("");
			var html = "";
			html += `<span>${arr[2].price[index].price0}</span>`;
			$(".price").html(html);
		}

		// sc_cart();

		return "详情页加载成功了"
	}


	//添加购物车cookie按钮
	function cartCookie(){
		sc_cart();
		// console.log(data);
		$(".pro-total").on("click", "#buy-cart", function(){
			// console.log(1);
			var first = $.cookie("cart") == null ? true : false;
			console.log(first);
			if(first){//第一次添加
				//设置cookie
				var id = 0;
				id = $(".head-title").attr("id");
				console.log(id);
				$.cookie("cart","[{id:" + id + ",verStyle:" + $(".versions").find(".active").index() + ", colStyle:" + $(".color").find(".active").index() + ", capStyle:" + $(".capacity").find(".active").index() + ", price:" + $(".price").find("span").html() + ",num:1}]", {
					expires: 7
				});
			}else{
				//判断之前是否添加过该商品
				var str = $.cookie("cart");
				var arr = eval(str);
				// console.log(arr[0].num);
				// alert(arr);
				var same = false;//代表是否有相同的商品


				//直接遍历所有的对象，判断是否有相同的，如果由直接num++
				for(var i in arr){
					var decide = arr[i].verStyle == parseInt($(".versions").find(".active").index()) && arr[i].colStyle == parseInt($(".color").find(".active").index()) && arr[i].capStyle == parseInt($(".capacity").find(".active").index());
					// console.log(arr[i].num);
					if(decide){
						arr[i].num++;
						//存储数据
						var cookieStr = JSON.stringify(arr);
						$.cookie("cart", cookieStr, {
							expires: 7
						});
						same = true;
						break;
					}
				}

				//没有相同的商品，新增商品
				if(!same){
					var obj = {id: $(".head-title").attr("id"), verStyle: $(".versions").find(".active").index(), colStyle: $(".color").find(".active").index(), capStyle: $(".capacity").find(".active").index(), price: $(".price").find("span").html(),num:1};
					// alert(obj.price);
					arr.push(obj);
					// alert(arr.price);
					var cookieStr = JSON.stringify(arr);
					$.cookie("cart", cookieStr, {
						expires: 7
					});
				}
			}
			sc_cart();
			alert($.cookie("cart"));
			return false;
		});
		//购物车商品的数量
		function sc_cart(){
			var sc_cart = $.cookie("cart");
			if(sc_cart){
				var arr = eval(sc_cart);
				var sum = 0;
				for(var i in arr){
					sum += arr[i].num;
				}

				$(".cart-icon").find("i").html(sum);
			}
		}
		return "添加购物车成功"
	}

	return {
		detail:detail,
		cartCookie:cartCookie
	}
})