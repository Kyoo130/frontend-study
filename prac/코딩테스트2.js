const num = 1
const input = '2' // 사용자에게 값을 입력받았는데 문자열 숫자로 입력받았다

console.log(num + input) // 결과: 12


// 1번
rusult = parseInt(num) + parseInt(input);
console.log(rusult); // 결과: 3

// 2번
rusult2 = Number(num) + Number(input);
console.log(rusult2); // 결과: 3

// 이렇게 해야 결과가 3으로 나옵니다.

