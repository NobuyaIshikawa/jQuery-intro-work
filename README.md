study
=====
# jQuery01_ボタンと連動してテキストを変える

## htmlの要素の取得
```
$("要素")
```

### id="sample"

```
$("#sample")
```

### class="sample"

```
$(".sample")
```

### \<タグ>（\<div>など）

```
$("タグ")
```

## 取得した要素全てに対するアクション

### 要素内のテキストを書き換える処理
[要素]は、上記の「htmlの要素の取得」の記述に置き換えてください。

```
[要素].text("代替テキスト");
```

当然ですが、上記の通りに書いただけではページを開いた直後に代替テキストになってしまいます。

### クリックしたら～する

**これは今回の勉強会を通して使用する要です。**
勿論、クリック以外にも条件となる動作の指定はできます。興味を持った方は調べてみてください。
[要素]は、上記の「htmlの要素の取得」の記述に置き換えてください。

```
[要素].click(function(){
～処理内容～
});
```

#### 例１：\<button>がクリックされたら\<div>内を代替テキストに書き換え

```
$("button").click(function(){
$("div").text("代替テキスト");
});
```

#### 例２：\<button>がクリックされたらそのボタンのテキストを代替テキストに書き換え

```
$("button").click(function(){
$(this).text("代替テキスト");
});
```

## 要素に追加/コピー/削除する

|記述 |説明 |
|:----------|:---------------------|
| prepend() | 指定要素内部の先頭に追加 |
| append() | 指定要素内部の最後に追加 |
| before() | 指定要素の前に追加 |
| after() | 指定要素の後に追加 |
| clone() | 指定要素を別な要素にコピー|
| remove() | 指定要素を削除 |

### 例：\<div>\</div>内に\<ul>\<li>リスト<\/li>\</ul>を追加

```
$("div").append("<ul><li>リスト</li></ul>");
```


## 要素の親兄弟を選択する

下記の様な構成だったとして、一番下の階層にテキストを加えたい…

```
<div>
  <div class="mine">
    <div>

    </div>
  </div>
  <div>

  </div>
</div>
```

$("div").text("～");
と指定してしまうと全ての\<div>を対象としてしまいます。

### 親兄弟の指定1

|記述 |説明 |
|:----------|:---------------------|
| parent() | 対象の親要素(一つ上の階層)を指定 |
| siblings()| 対象の兄弟要素(同階層)を指定 |
| children()| 対象の子要素(一つ下の階層)を指定 |

### 例：$(".mine")をから考えて、下層のみを対象にテキストを追加する。

```
$(".mine").children().text("～");
```

### 親兄弟の指定2

|記述 |説明 |
|:----------|:---------------------|
| next() | 対象の次の兄弟要素を指定 |
| prev() | 対象の前の兄弟要素を指定 |


### 親兄弟の指定のオプション

|記述 |説明 |
|:----------|:---------------------|
| :first | 指定要素の中で最初のものを対象とする |
| :first-child | 指定要素の最初の子要素を対象とする |
| :last | 指定要素の中で最後のものを対象とする |
| :last-child | 指定要素の最後の子要素を対象とする |

#### 例：最後のdiv要素のみテキストを追加

```
$("div:last").text("～");
```

# jQuery02_クローンの挙動を確認する + jQuery03_テーブルの行追加・削除

## ある要素をそのまま複製したい時は.clone()

### 例：最初\<p>\</p>の要素を最後の\<div>\</div>にコピー

```
$("p:first").clone().appendTo("div:last"); or $("p").clone().prependTo("div");
```
|記述 |説明 |
|:----------|:---------------------|
| appendTo() | ()に指定した要素内の最後に追加 |
| prependTo() | ()に指定した要素内の先頭に追加 |

### 例：最初\<p>\</p>の要素を最後の\<div>\</div>にコピー

```
$("p:first").clone().appendTo("div:last"); or $("p").clone().prependTo("div");
```

# jQuery04_シンプルなライツアウトを作る

ライツアウトは5×5マスの計25マスに配置された要素に対して処理を行います。そのため、クリックされた場所がどこなのか、処理の対象はどれなのかを把握するために、以下の処理を使います。

## index()
対象の要素の番号を取得

### 例：ページ内で何番目に出てきた<button>なのか、クリックしたらその番号を取得

```
$("button").click(function(){
$("button").index(this);
});
```

## eq()
対象要素の中でも要素番号を特定したものを対象とする
*番号が0から始まることに注意

### 例：3番目の\<button>をクリックする

```
$("button").eq(2).click();
```

## prop()
状態を確認したり変更する場合に用います
prop("disabled", true) //指定要素の状態を変更

### 例：全ての\<button>を利用不可にする
```
$("button").prop("disabled", true);
```

例で挙げた"disabled"の他、チェックボックスであれば"checked"でチェックの確認、変更ができます。

## 条件分岐if文

```
if(条件){
// 条件を満たす場合はこちらの処理を行う
}
```

上記の場合は条件を満たす場合のみ処理が行われます。条件に応じて処理を変える場合は、次のように記述します。

```
if(条件){
// 条件を満たす場合はこちらの処理を行う
}else{
// 条件を満たさない場合はこちらの処理を行う
}
```

### 例：ボタンが使用不可のとき、～する

```
if($("button").prop("disabled")){
～処理内容～
}
```

## 取得した要素の数
今回は問題を早く解いた人向けにクリアしたかどうかを判定する問題を用意しています。
そのとき必要となるのが一つでもチェックボックスがチェックされているかどうかです。
$().size()を使うと、そのときに条件を満たす要素がいくつあるかを判別できます。

### 例：使用不可のボタンが一つ以上あるとき、～する

```
if(0 < $("button:disabled").size()){
  ～処理内容～
}
```

## ランダムに数値を取得する
「ランダム」ボタンで初期配置をランダムに変更する問題では、乱数を取得するという処理が必要になります。
以下はそのヒントです。

### 例：変数 r に0から1の数値をランダムに入れる

```
var r = Math.random();
```

### 例：変数 r の小数点を切り上げ/切り捨て/四捨五入

```
r = Math.ceil(r);
r = Math.floor(r);
r = Math.round(r);
```

## ループでの処理(for文)
初期配置をランダムに変更する時、１番目のボタン～25番目のボタンまで、値に応じてチェックの切替が必要になります。
そこで使うのがfor文です。
下記の例では、変数iが0から始まり、{}内の処理が一つ終わる度にiに+1され再び処理が行われます。
i < Xが示すとおり、この処理はiがXより小さい限り繰り返し続きます。

```
for(var i = 0; i < X; i++){
	～処理内容～
}
```

# jQuery05_D3.jsでライツアウトを装飾する

チェックボックスのON/OFFだと見た目が寂しいと思われる方もいらっしゃるのではないでしょうか。
ここでは先ほど作成したライツアウトにD3.js(ディースリージェイエス)で一工夫します。

今回はD3.jsでライツアウトを装飾するだけですが、D3.jsはグラフ作成など様々に活用されています。

公式ページ http://d3js.org

今回の勉強会や公式ページでD3.jsに興味を持った方は、是非次回のIPStudyにご参加ください。