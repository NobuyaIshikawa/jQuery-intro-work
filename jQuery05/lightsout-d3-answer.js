$(document).ready(function(){
	$(".light").css("display","none");
	var in_game = false;

	$("td").click(function(){
		if($(this).children("input").prop("checked")){
			$(this).children("input").prop("checked", false);
		}else{
			$(this).children("input").prop("checked", true);
		}
		if(in_game){
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
			colorUpdate();
			// 全てのマスの点灯判定を行う
			var clear_flg = 1;
			if(0 < $("input:checked").size()){
				clear_flg = 0;
			}else{
				clear_flg = 1;
			}
			// チェック後にクリアフラグが成立していたらクリアメッセージを表示
			if(clear_flg === 1){
				$("#end").prop("disabled", true);
				$("#start").prop("disabled", false);
				$("#random").prop("disabled", false);
				in_game = 0;
				$("#clear").text("Congratulations!!");
			}
		}
		colorUpdate();
	});

	// 「スタート」を押した時、ゲーム開始(チェックボックスをクリックすると、隣接するチェックボックスも変化する)
	$("#start").click(function(){
		in_game = true;
		$("#clear").text("");
		$(this).prop("disabled", true);
		$("#random").prop("disabled", true);
		$("#end").prop("disabled", false);
	});
	// 「諦める」を押した時、ゲーム終了(チェックボックスをクリックしても、隣接するチェックボックスは変化しない)
	$("#end").click(function(){
		in_game = false;
		$(this).prop("disabled", true);
		$("#start").prop("disabled", false);
		$("#random").prop("disabled", false);
	});
	// 「ランダム」を押した時、初期配置をランダムに変更
	$("#random").click(function(){
		var array = [
			true,
			false
		];
		var l = array.length;
		for(var i = 0; i < 25; i++){
			var r = Math.floor(Math.random() * l);
			console.log(l);
			var chk = array[r];
			$("input").eq(i).prop("checked", chk);
		}
		colorUpdate();
	});
});