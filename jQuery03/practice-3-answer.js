$(document).ready(function(){
	// th行及びtd行のクローンをそれぞれ用意
	var title = $("tr:first").clone(); // 最初のtr(タイトル行)のクローン
	var input = $("tr:first").next().clone(); // 最初のtrの次の兄弟要素(次の兄弟要素はtdを子に持つtr＝最初の入力行)のクローン
	
	// 最後尾に追加
	$("#ap-add").click(function(){
		$(input).clone().appendTo("table");
	});
	// 入力行の削除
	$("#del").click(function(){
		$("td").parent().remove(); // tdの親のtr(tdを子に持つtr要素＝入力行)を全て削除
		$(input).clone().appendTo("table"); // tableに入力行を追加
	});
	// 先頭に追加
	$("#pre-add").click(function(){
		$("tr:first").remove(); // 最初のtr(thを持つ行)を削除;
		$(input).clone().prependTo("table"); // tableの先頭に入力行を追加
		$(title).clone().prependTo("table"); // tableの先頭にタイトル行を追加
	});
});