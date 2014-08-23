$(document).ready(function(){
	// クローン用の変数を定義
	var cloned_target;
	$("#copy").click(function(){
		cloned_target = $(".target").clone();
		console.log(cloned_target);
	});
	$("#paste").click(function(){
		$(cloned_target).clone().prependTo("body");
	});
});