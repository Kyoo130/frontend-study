// 1번 문제
let nums = [100, 200, 300, 400, 500];

nums.splice(3, 2); // 2번째 인덱스부터 1개를 지우기
console.log(nums);


// 2번 문제
let arr2 = [200, 100, 300];
arr2.splice(2, 0, 10000)

console.log(arr2);


// 3번 문제
let arr3 = [100, 200, 300];
console.log(typeof(arr3)); //object



// 4번 문제
let a4 = 10;
let b4 = 2;

for (let i = 1; i < 5; i += 2) {
    a4 += i
}

console.log(a4+b4);
