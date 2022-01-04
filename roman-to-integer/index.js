/**
 * @param {string} s
 * @return {number}
 * 受け取った文字列を配列にする
 * 一文字ずつ検索して数字に変換した状態の配列を返す
 * 配列内の合計値を求める
 */
const romanToInt = (roman) => {

  console.log([...roman])

  const NumberMap = [...roman].map(r => {
    switch (r) {
      case 'I':
        return r = 1;
      case 'V':
        return r = 5;
      case 'X':
        return r = 10;
      case 'L':
        return r = 50;
      case 'C':
        return r = 100;
      case 'D':
        return r = 500;
      case 'M':
        return r = 1000;
    }
  });
  return NumberMap.reduce((sum, element) => sum + element)
}

console.log(romanToInt("MCM"))