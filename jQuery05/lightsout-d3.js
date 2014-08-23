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
		if(/* クリックされたtdの中のinputがチェックされていたら */){
			// Q.そのinputのチェックを外す
		}else{
			// Q.そのinputのチェックを付ける
		}
		if(start_flg === 1){
			var index = $("td").index(this);
			// チェックボックスのみのライツアウトを作った時と同様に、隣接する<td>についても処理を記述
			colorUpdate();
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
				alert("Congratulations!!");
			}
		}
		colorUpdate();
	});
});