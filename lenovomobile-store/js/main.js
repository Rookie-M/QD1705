/*
	这是入口main.js
		遵从AMD规范
*/
console.log("载入成功");

/*
	设置需要引入的js文件
*/
require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3", //遵从AMD规范
		"jquery-cookie": "jquery.cookie",
		"index": "index",
		"public": "public",
		"slide": "slide"

		// "parabola": "parabola"
	},
	shim: {
		/*
			在实例的app中，还用到jquery以外的第三方库
			如果该类库不是一个标准AMD规范，我又不想去改代码
			需要通过下述方式定义该文件
		*/
		/*"parabola": {
			exports: "_"
		},*/
		//设置依赖关系
		"jquery-cookie": ["jquery"]
		// "parabola": ["jquery"]
	}
})



//要去调用index.js中的main
require(["index"], function(index){
	console.log(index.main());
	console.log(index.indexData());
	// console.log(index.register());
});
require(["public"], function(public){
	console.log(public.main());
	console.log(public.register());
	console.log(public.enter());
})

//调用slide.js 中的 slide函数
require(["slide"], function(slide){
	console.log(slide.slide());
	console.log(slide.mainSlider());
	console.log(slide.modsSlider());
})

//调用store-list.js中的list函数
require(["store-list"], function(list){
	console.log(list.list());
})

//调用cart.js中的cart函数
require(["cart"], function(cart){
	console.log(cart.cart());
})

require(["detail"], function(detail){
	console.log(detail.detail());
	console.log(detail.cartCookie());
})
















