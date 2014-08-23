$(document).ready(function(){
	$(".light").css("display","none");
	var start_flg;
	$("#start").click(function(){
		start_flg = 1;
		$("#clear").text("");
		$(this).prop("disabled", true);
		$("#end").prop("disabled", false);
	});
	$("#end").click(function(){
		start_flg = 0;
		$(this).prop("disabled", true);
		$("#start").prop("disabled", false);
	});

	$("td").click(function(){
		if($(this).children("input").prop("checked")){
			$(this).children("input").prop("checked", false);
		}else{
			$(this).children("input").prop("checked", true);
		}
		if(start_flg === 1){
			var index = $("td").index(this);
			if($(this).next().children("input").prop("checked")){
				$(this).next().children("input").prop("checked", false);
			}else{
				$(this).next().children("input").prop("checked", true);
			}
			if($(this).prev().children("input").prop("checked")){
				$(this).prev().children("input").prop("checked", false);
			}else{
				$(this).prev().children("input").prop("checked", true);
			}
			if(index-5 >= 0){
				if($("input").eq(index-5).prop("checked")){
					$("input").eq(index-5).prop("checked", false);
				}else{
					$("input").eq(index-5).prop("checked", true);
				}
			}
			if(index+5 < 25){
				if($("input").eq(index+5).prop("checked")){
					$("input").eq(index+5).prop("checked", false);
				}else{
					$("input").eq(index+5).prop("checked", true);
				}
			}
			update1();
			// 全てのマスの点灯判定を行う
			var i = 0;
			var flg = 1;
			for(i = 0; i < 25; i++){
				// チェックがついているものがあればクリアフラグを0(未クリア)にする
				if($("input").eq(i).prop("checked")){
					flg = 0;
				}
			}
			// チェック後にクリアフラグが成立していたらクリアメッセージを表示
			if(flg === 1){
				$("#end").prop("disabled", true);
				$("#start").prop("disabled", false);
				start_flg = 0;
				$("#clear").text("Congratulations!!");
			}
		}
		update1();
	});
});