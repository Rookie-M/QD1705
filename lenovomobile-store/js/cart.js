define(["jquery", "jquery-cookie"], function($){
	function cart(){
		if(!$.cookie("cart")){
				var html = "";
				html += `<div class="empty-cart-box">
							<i class="empty-cart-icon"><!-- 空空如也，快去购物 --></i>
							<p>空空如也，快去购物~</p>
							<a href="store-list.html" id="emptyCart" class="buy-button">去购物</a>
						</div>`;
				$(".empty-cart").html(html);
			}else{
				var cartHtml = "";
				cartHtml += `<div class="shopping-cart-wrap" id="mycart">
								<div class="shopping-cart-head clearfix">             
									<span class="item1">商品名称</span>             
									<span class="item2">单价</span>             
									<span class="item3">数量</span>             
									<span class="item4">小计</span>             
									<span class="item5">操作</span>            
								</div>            
								<ul class="shopping-cart">
								</ul>     
								<div class="total-box clearfix">      
									<div class="submit-button-box">       
										<p style="font-size:13px"></p>       
										<a id="toBalance" tobalance="" href="" class="buy-button">去结算</a>      
									</div>            
									<div class="total-price-box">       
										<p><span class="total-price"></p>       
										<a href="store-list.html" id="backToShopping" class="goback-link"><em>&gt;&gt;</em> 返回继续购物</a>      
									</div>     
								</div>
							</div>`;
				$(".cartBox").html(cartHtml);
			}
		
		loadCart();



		function loadCart(){

			$.ajax({
				url: 'data/detail.json',
				type: 'get',
				success: function(data){
					console.log(data);
					var arr = eval($.cookie("cart"));
					var html = "";
					var sum = null;
					for(var i = 0; i < arr.length; i++){
						var oPrice = arr[i].price * arr[i].num;
						sum += oPrice;
						// console.log(sum);
						if(arr[i].id == 0){
							html += `<li class="item">
							<div class="main-pro">
								<div class="item1 clearfix">
									<a class="pic">
										<img src="${data[11].smallImg[arr[i].id].slider_icon_img00}" alt="" width="80" height="80">
									</a>
									<a class="txt">${data[1].title[0].title0}</a>
								</div>     
								<div class="item2">
									<div class="middle-box">
										<div class="middle-inner">
											<p>¥${arr[i].price}</p>
										</div> 
									</div>
								</div>
								<div class="item3">
									<div class="numbers-wrap">
										<div class="numbers-bar">
											<span class="minus order ${arr[i].id}">-</span>
											<input class="number-input" type="text" value="${arr[i].num}">
											<span class="plus order ${arr[i].id}">+</span>
										</div>
									</div>
								</div>
								<div class="item4">
									<span class="price">¥${oPrice}</span>
								</div>
								<div class="item5">
									<span parag="" class="delete-btn ${arr[i].id}" id="deleteGoods" >×</span>
								</div>
							</div>
							<div class="gift-pro-box">
								<span class="sj"></span>
								<ul class="gift-pro">
									<li>
										<div class="item1 clearfix">
											<a href="" class="pic">
												<img src="${data[3].compSrc[0].complimentary_img0}" alt="" width="40" height="40">
											</a>
											<a href="" class="txt">${data[4].compTxt[0].complimentary_img0_txt}</a>
											<span class="label give-label">赠</span>
										</div>
										<div class="item2">
											<div class="middle-box">
												<div class="middle-inner">	
													<p>¥0.00</p>	
													<del>¥699.00</del> 	
												</div>	
											</div>
										</div>
										<div class="item3">	
											<div class="gift-num">
												<i>${arr[i].num}</i>
											</div>
										</div>
										<div class="item4">
											
										</div>
											<div class="item5"></div>
									</li>
									<li>
										<div class="item1 clearfix">
											<a class="pic">
												<img src="${data[3].compSrc[0].complimentary_img1}" alt="" width="40" height="40">
											</a>
											<a class="txt">${data[4].compTxt[0].complimentary_img1_txt}</a>
										 	<span class="label give-label">赠</span>
										</div> 
										<div class="item2">
											<div class="middle-box">
												<div class="middle-inner">	
													<p>¥0.00</p>
													<del>¥129.00</del>
										 		</div>
											</div>
										</div>
										<div class="item3">
											<div class="gift-num">
												<i>${arr[i].num}</i>
											</div>
										</div>
										<div class="item4">
											
										</div> 
										<div class="item5"></div>
									</li>
									<li>
										<div class="item1 clearfix">
											<a class="pic">	
										    	<img src="${data[3].compSrc[0].complimentary_img2}" alt="" width="40" height="40">	
										    </a>
										    <a class="txt">${data[4].compTxt[0].complimentary_img2_txt}</a>
										    <span class="label give-label">赠</span>
										</div>
										<div class="item2">
											<div class="middle-box">
										    	<div class="middle-inner">
										    		<p>¥0.00</p>
										    		<del>¥499.00</del>
										    	</div>
										    </div>                                                 
										</div>                                                 
										<div class="item3">
											<div class="gift-num">
												<i>${arr[i].num}</i>
											</div>                                                 
										</div>                                                 
										<div class="item4">
										    
										</div>
										<div class="item5"></div>
									</li>
								</ul>                                 
							</div>
						</li>`;
						$(".shopping-cart").html(html);
						}


						if(arr[i].id == 1){
							html += `<li class="item">
							<div class="main-pro">
								<div class="item1 clearfix">
									<a class="pic">
										<img src="${data[11].smallImg[arr[i].id].slider_icon_img00}" alt="" width="80" height="80">
									</a>
									<a class="txt">${data[1].title[0].title1}</a>
								</div>     
								<div class="item2">
									<div class="middle-box">
										<div class="middle-inner">
											<p>¥${arr[i].price}</p>
										</div> 
									</div>
								</div>
								<div class="item3">
									<div class="numbers-wrap">
										<div class="numbers-bar">
											<span class="minus order${arr[i].id}">-</span>
											<input class="number-input" type="text" value="${arr[i].num}">
											<span class="plus order ${arr[i].id}">+</span>
										</div>
									</div>
								</div>
								<div class="item4">
									<span class="price">¥${oPrice}</span>
								</div>
								<div class="item5">
									<span parag="" class="delete-btn ${arr[i].id}" id="deleteGoods" >×</span>
								</div>
							</div>
							<div class="gift-pro-box">
								<span class="sj"></span>
								<ul class="gift-pro"></ul>                                 
							</div>
						</li>`;
						$(".shopping-cart").html(html);
						}

						if(arr[i].id == 2){
							html += `<li class="item">
							<div class="main-pro">
								<div class="item1 clearfix">
									<a class="pic">
										<img src="${data[11].smallImg[arr[i].id].slider_icon_img00}" alt="" width="80" height="80">
									</a>
									<a class="txt">${data[1].title[0].title2}</a>
								</div>     
								<div class="item2">
									<div class="middle-box">
										<div class="middle-inner">
											<p>¥${arr[i].price}</p>
										</div> 
									</div>
								</div>
								<div class="item3">
									<div class="numbers-wrap">
										<div class="numbers-bar">
											<span class="minus order${arr[i].id}">-</span>
											<input class="number-input" type="text" value="${arr[i].num}">
											<span class="plus order ${arr[i].id}">+</span>
										</div>
									</div>
								</div>
								<div class="item4">
									<span class="price">¥${oPrice}</span>
								</div>
								<div class="item5">
									<span parag="" class="delete-btn ${arr[i].id}" id="deleteGoods" >×</span>
								</div>
							</div>
							<div class="gift-pro-box">
								<span class="sj"></span>
								<ul class="gift-pro"></ul>                                 
							</div>
						</li>`;
						$(".shopping-cart").html(html);
						}

						if(arr[i].id == 3){
							html += `<li class="item">
							<div class="main-pro">
								<div class="item1 clearfix">
									<a class="pic">
										<img src="${data[11].smallImg[arr[i].id].slider_icon_img00}" alt="" width="80" height="80">
									</a>
									<a class="txt">${data[1].title[0].title3}</a>
								</div>     
								<div class="item2">
									<div class="middle-box">
										<div class="middle-inner">
											<p>¥${arr[i].price}</p>
										</div> 
									</div>
								</div>
								<div class="item3">
									<div class="numbers-wrap">
										<div class="numbers-bar">
											<span class="minus order${arr[i].id}">-</span>
											<input class="number-input" type="text" value="${arr[i].num}">
											<span class="plus order ${arr[i].id}">+</span>
										</div>
									</div>
								</div>
								<div class="item4">
									<span class="price">¥${oPrice}</span>
								</div>
								<div class="item5">
									<span parag="" class="delete-btn ${arr[i].id}" id="deleteGoods" >×</span>
								</div>
							</div>
							<div class="gift-pro-box">
								<span class="sj"></span>
								<ul class="gift-pro"></ul>                                 
							</div>
						</li>`;
						$(".shopping-cart").html(html);
						}

						if(arr[i].id == 4){
							html += `<li class="item">
							<div class="main-pro">
								<div class="item1 clearfix">
									<a class="pic">
										<img src="${data[11].smallImg[arr[i].id].slider_icon_img00}" alt="" width="80" height="80">
									</a>
									<a class="txt">${data[1].title[0].title4}</a>
								</div>     
								<div class="item2">
									<div class="middle-box">
										<div class="middle-inner">
											<p>¥${arr[i].price}</p>
										</div> 
									</div>
								</div>
								<div class="item3">
									<div class="numbers-wrap">
										<div class="numbers-bar">
											<span class="minus order${arr[i].id}">-</span>
											<input class="number-input" type="text" value="${arr[i].num}">
											<span class="plus order ${arr[i].id}">+</span>
										</div>
									</div>
								</div>
								<div class="item4">
									<span class="price">¥${oPrice}</span>
								</div>
								<div class="item5">
									<span parag="" class="delete-btn ${arr[i].id}" id="deleteGoods" >×</span>
								</div>
							</div>
							<div class="gift-pro-box">
								<span class="sj"></span>
								<ul class="gift-pro"></ul>                                 
							</div>
						</li>`;
						$(".shopping-cart").html(html);
						}

						$(".submit-button-box").find("p").html("总计（不含运费）：<em>¥" + sum + ".00</em>")
						
					}
				}
				
			});
		
		}
		

	
			//增加减少按钮的实现
			$(".inter").on("click",".order",function(){
				var str = $.cookie("cart");
				var arr = eval(str);

				// 点击的按钮对应的ID
				var btnId = this.className.substring(11);
				// alert(btnId);
				for(var i = 0; i < arr.length; i++){
					if(btnId == arr[i].id){
						switch($(this).html()){
							case "+":
								arr[i].num += 1;
								break;
							case "-":
								if(arr[i].num <=1){
									var tmp = confirm("您确定不购买该商品？");
									if(tmp){
										arr.splice(i,1);
										var cookieStr = JSON.stringify(arr);
										$.cookie("goods", cookieStr, {
											expires: 7
										});
										loadCart();
									}
								}else{
									arr[i].num -=1;
								}
								break;
							default:
								break;
						}
					}
				}
				var cookieStr = JSON.stringify(arr);
				$.cookie("cart", cookieStr, {
					expires: 7
				});
				loadCart();
			});

			//关闭此商品按钮的实现
			$(".inter").on("click",".delete-btn",function(){
				var str = $.cookie("cart");
				var arr = eval(str);

				// 点击的按钮对应的ID
				var btnId = this.className.substring(10);
				// alert(btnId);
				for(var i = 0; i < arr.length; i++){
					if(btnId == arr[i].id){
						var tmp = confirm("您确定不购买该商品？");
						if(tmp){
							arr.splice(0,1);
							var cookieStr = JSON.stringify(arr);
							$.cookie("cart", cookieStr, {
								expires: -1
							});
							loadCart();
							location.reload(true);
							// alert(1);
						}
					}
				}
				var cookieStr = JSON.stringify(arr);
				$.cookie("cart", cookieStr, {
					expires: -1
				});
				loadCart();

			});
		return "购物车加载成功了"
	}
	return {
		cart:cart
	}
})