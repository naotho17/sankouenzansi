// 三項演算子

// 構文は以下のようになる
//　条件　? 条件がtrueの時の処理 : 条件がfalseの時の処理

//例
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

//numが数値だったらtoLolalString(),文字列とかだったら”数値を入力してください”
// と出力している　（toLocalStringは数値を3ケタ区切りにする関数）
const num = 1300;

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

//関数のreturn部分に三項演算子を使う例
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(50, 40));
