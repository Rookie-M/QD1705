/*
	商城列表的js文件
*/
define(["jquery"], function($){
	function list(){
		//类别选项卡
		/*$("#product-sort").find("a").slice(0, 5).on("click", function() {
			$(this).css({
				"color": '#10bad1'
			});
			
			return false;
		});*/

		//下载数据
		$.ajax({
			url: 'data/store-list.json',
			type: 'get',
			success: function(data){
				var html = "";
				// console.log(data);
				for(var i = 0; i < data.length; i++){
					// console.log(data[i].item);
					// var html = "";
					for(var j = 0; j < data[i].item.length; j++){
						html += `<li>
									<a index="629" href="${data[i].item[j].src}" target="_blank">
										<span class="i-mark ${data[i].item[j].class}">${data[i].item[j].class_txt}</span>
										<img src="${data[i].item[j].img}" width="180" height="180" alt="${data[i].item[j].title}">
										<h4 class="title">${data[i].item[j].title}</h4>
												
										<div class="price-box">
											<span class="price"> ¥${data[i].item[j].price}</span>  
										</div>
									</a>
								</li>`
					}
					$("#product-list").html(html);
				}
				// $("#product-list").html(html);
				// $("#product-list").html(listHtml1);
				// $("#product-list").html(listHtml2);
				// $("#product-list").html(listHtml3);
				$("#product-sort").find("a").click(function(){
					var index = $(this).index() - 2;
					$("#product-sort").find("a").attr("class", "");

					$(this).attr("class", "cur");

					// console.log(data[index].item);
					var arr = data[index].item;
					// console.log(arr);
					var html = "";
					for(var i = 0; i < arr.length; i++){
						html += `<li>
									<a index="629" href="${arr[i].src}" target="_blank">
										<span class="i-mark ${arr[i].class}">${arr[i].class_txt}</span>
										<img src="${arr[i].img}" width="180" height="180" alt="${arr[i].title}">
										<h4 class="title">${arr[i].title}</h4>
												
										<div class="price-box">
											<span class="price"> ¥${arr[i].price}</span>  
										</div>
									</a>
								</li>`;
					}
					$("#product-list").html(html);




					return false;
				})
				
			}
		});
		



		
		
		







		return "商城列表加载完成"
	}
	return {
		list:list
	}
})










