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

		$(document).scroll(function() {
			var scrollHight = $(document).scrollTop();
			console.log(scrollHight)
			if(scrollHight > 400){
				$("#goTop").css({
					display: "block"
				});
			}else{
				$("#goTop").css({
					display: "none"
				});
			}
		});
		
		$("#goTop").click(function() {
			// alert(1);
			$("body,html").animate({scrollTop : 0},500);
		});




		return "我是main函数"
	}


	// 注册
	function register(){
		//显示注册页面
		$("#register").click(function(){
			$(".layer").css({
				display:"block"
			});
			$(".layer").html(`<!-- 遮罩 -->
		<div class="layer-bg"></div>
		<!-- 登录注册 -->
		<!-- 注册 -->
		<div class="register-layer">
			<div class="pop-layer-head">
				<h3 class="fleft">
					注册联想账号
				</h3>
				<a class="close" href="#"></a>
			</div>
			<div class="iLogFrame">
				<form action="">
					<div class="hd clearfix">
			            <ul>
			                <li class="txtUser jsUser">
			                    <label for="tuser">
			                    	<img src="images/login-icon/ico_user_1.png">
			                    </label>
			                    <span class="ParentCls ">
			                    	<input id="tuser" class="username jsMobile " type="text" placeholder="手机号" value="">
			                    </span>
			                </li>
			                <li class="txtPass jsPass">
			                    <label for="tpass">
			                    	<img src="images/login-icon/ico_pass_1.png">
			                    </label>
			                    <input id="tpass" name="password" class="password jsPassword" type="password" placeholder="密码" value="">
			                </li>
			                <li class="txtPHint">
			                    <span>密码长度8~20位，数字、字母、字符至少包含两种</span>
			                </li>
				            <li class="capture capEmail jsCapEmail">
			                    <div class="fleft jsCapture">
			                        <label for="tcapt">
			                        	<img src="images/login-icon/ico_capt_1.png">
			                        </label>
			                        <input type="text" placeholder="验证码" class="verify">
			                    </div>
			                    <div class="capImg fleft">
			                        <span class="jsCReset"></span>
			                    </div>
			                </li>
				            <li class="capture capMobile jsCapMobile">
				            
			                    <div class="fleft jsSmsCode">
			                        <label for="tcapt">
			                        	<img src="images/login-icon/ico_capt_1.png">
			                        </label>
			                        <input type="text" placeholder="短信验证码"/>
			                        <!-- <input type="hidden" value="重新获取"> -->
			                    </div>
			                    <div class="capImg fleft">
			                        <button class="activeCode">获取动态码</button>
			                    </div>
			                </li>
			                <li class="apollo">
			                    <p class="buttonY">收不到动态码，请试试
			                    	<em class="buttonYY" style="color: #6fc9f0;">语音动态码</em>
			                    </p>
			                </li>
			            </ul>           
			        </div>
			        <div class="bd">
			            <ul class="errMsg">
			                <li class="jsErrMEmptyM">请输入正确的手机号或邮箱号</li>
			                <li class="jsErrMReged">用户已经存在</li>
			                <li class="jsErrPEmpty">密码不能为空</li>
			                <li class="jsErrPFormat">密码格式不正确</li>
			                <li class="jsErrVEmpty">验证码不能为空</li>
			                <li class="jsErrVFormat">验证码错误</li>
			                <li class="jsErrVSmsEmpty">短信验证码不能为空</li>
			                <li class="jsErrVSmsFormat"><!-- 短信验证码不正确 -->短信验证码错误</li>
			            </ul>
			            <input type="submit" value="立即注册" class="jsSubBtn">
			            
			            <span>
			            	点击“注册”即表示您接受并遵守 联想<a href="#" class="jsURight">用户协议
			            	</a>和<a href="#" class="jsPrivacy">隐私政策</a>
			            </span>
			        </div>
			        <div class="ft">
			            <span>如果您已经有联想帐户, 可在此点击&nbsp;&nbsp;<a class="jsLogin" href="#" >登录</a></span>
			        </div>
				</form>
			</div>
		</div>`);
			$(".hd").find("input").val("");
			$(".errMsg").find("li").css({
					display: "none"
				});
			$(".jsCReset").html(testCode2(5));

			//关闭注册页面
			$(".close").click(function() {
				$(".layer").css({
					display: "none"
				})
				return false;
			});
			
			//账号验证
			$(".username").blur(function() {
				var yidongreg = /^(134[012345678]\d{7}|1[34578][012356789]\d{8})$/;
			　　var dianxinreg = /^1[3578][01379]\d{8}$/;
			　　var liantongreg = /^1[34578][01256]\d{8}$/;
				var emailreg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
				// console.log($(".$(".username").val()name").val());
				if(!(yidongreg.test($(".username").val()) || dianxinreg.test($(".username").val()) || liantongreg.test($(".username").val()) || emailreg.test($(".username").val())))
		　　　　{
					$(".errMsg").find("li").css({
						display: "none"
					});
					$(".jsErrMEmptyM").css({
						display: "block"
					});
		　　　　}else{
					$(".errMsg").find("li").css({
						display: "none"
					});
				}
			});

			//密码验证
			$(".password").blur(function() {
				console.log($(".password").val());
				var regExp = /^[\x21-\x7E]{8,20}$/;
				if($(".password").val() == ""){
					$(".jsErrPEmpty").css({
						display: "block"
					});
				}else if(!regExp.test($(".password").val())){
					$(".errMsg").find("li").css({
						display: "none"
					});
					$(".jsErrPFormat").css({
						display: "block"
					});
				}
			});

			function testCode2(n){
		        var arr = [];
		        for(var i = 0; i < n; i++){
		            var tmp = Math.floor(Math.random() * 100);
		            if(tmp >= 0 && tmp <10){
		                arr.push(tmp);
		            }else if(tmp >= 65 && tmp <=90){
		                arr.push(String.fromCharCode(tmp));
		            }else if(tmp >= 10 && tmp <=35){
		                arr.push(String.fromCharCode(tmp + 87))
		            }else{
		                i--;
		            }
		        }
		        return arr.join("");
		    }

			//验证码
			
	        //当点击换图时，更换验证码
	        $(".jsCReset").click(function(){
	            $(".jsCReset").html(testCode2(5));
	            // return false;
	        });
	        $(".verify").val("");
	        $(".verify").blur(function() {
	        	// console.log($(".verify").val());
	        	// console.log($(".jsCReset").html());
	        	if(/^\w+$/i.test($(".verify").val()) != /^\w+$/i.test($(".jsCReset").html())){
	        		$(".jsErrVFormat").css({
	        			display: "block"
	        		})
	        	}/*else if($(".verify").val()){
	        		$(".jsErrVEmpty").css({
	        			display: 'block'
	        		});
	        	}*/
	        });
		});
		

        
		

		return "注册加载成功了"
	}

	//登录
	function enter(){
		//打开登录窗口
		$("#enter").click(function() {
			$(".layer").css({
				display: "block"
			});
			$(".layer").html(`<div class="layer-bg"></div>
		<!-- 登录窗口 -->
		<div class="enter-layer">
			<div class="pop-layer-head">
				<h3 class="fleft">
					登录联想账号
				</h3>
				<a class="close" href="#"></a>
			</div>
			<!-- 主体内容 -->
			<form class="enter-layer-form">
				<div class="enter-layer-main">
					<div class="main-head">
						<a class="on" href="#" onclick="return false;">密码登录</a>
						<a href="#" onclick="return false;">短信登录</a>
					</div>
					<div id="Login">
						<div class="passEnter enter">
							<div class="main-body">
								<div class="main-body-head">
									<div class="txtUser">
										<label>
											<img src="images/login-icon/ico_user_1.png" alt="">
										</label>
										<span>
											<input type="text" placeholder="邮箱或手机号">
										</span>
									</div>
									<div class="txtPass">
										<label>
											<img src="images/ico_pass_1.png" alt="">
										</label>
										<span>
											<input type="password" placeholder="密码">
										</span>
									</div>
								</div>
								<div class="main-body-bd">
									<span class="body-left">
										<input type="checkbox" checked="checked">自动登录
									</span>
									<span class="body-right">
										<a>忘记密码</a>
										<span>|</span>
										<a>立即注册</a>
									</span>
								</div>
								<div class="main-body-footer">
									<div class="errMsg"></div>
								</div>
							</div>
							<div class="main-footer">
								<input type="submit" value="登录" onclick="return false;">
							</div>
							<div class="Id3login">
								<a>
									<img src="images/login-icon/qq_icon.png" alt="">QQ
								</a>
								<a>
									<img src="images/login-icon/weibo_icon.png" alt="">微博
								</a>
							</div>
						</div>

						<!-- 手机登录 -->
						<div class="telEnter enter">
							<div class="main-body">
								<div class="main-body-head">
									<div class="txtUser">
										<label>
											<img src="images/login-icon/ico_phone_s.png" alt="">
										</label>
										<span>
											<input type="text" placeholder="手机号">
										</span>
									</div>
									<div class="txtPass" id="reCode">
										<label>
											<img src="images/ico_capt_1.png" alt="">
										</label>
										<span>
											<input type="text" placeholder="验证码">
										</span>
										<div class="authCode">
											<img src="images/auth-code/getimage4.jpg" alt="">
										</div>
									</div>
									<div class="txtPass" id="telreCode">
										<label>
											<img src="images/ico_capt_1.png" alt="">
										</label>
										<span>
											<input type="text" placeholder="短信验证码">
										</span>
										<div id="gainCode">
											<input type="text" value="获取动态码">
										</div>
									</div>
								</div>
								<div class="main-body-bd">
									<span class="body-right">
										收不到动态码，请试试<a>语音动态码</a>
									</span>
								</div>
								<div class="main-body-footer">
									<div class="errMsg"></div>
								</div>
							</div>
							<div class="main-footer">
								<input type="submit" value="登录" onclick="return false;">
							</div>
							
						</div>
					</div>
					
				</div>
			</form>
		</div>`);
			//关闭登录窗口
			$(".close").click(function() {
				$(".layer").css({
					display: "none"
				})
				return false;
			});
			//登录模块切换
			$(".main-head").find("a").click(function() {
				$(".main-head").find("a").attr({
					class: ''
				});
				$("#Login").find(".enter").css({
					display: "none"
				})
				$(this).attr({
					class: 'on'
				});
				$("#Login").find(".enter").eq($(this).index()).css({
					display: "block"
				});
				// console.log($("#Login").find(".enter").eq($(this).index()));
			});
		});

		
		
		return "登录模块加载成功"
	}



	
	return {
		main: main,
		register:register,
		enter:enter
	}
})

















