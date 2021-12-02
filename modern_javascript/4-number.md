<p style="color: #ec4c6a">(작성중...) 재정리 필요</p>

# 숫자 자료형 (Number)

### 1. 숫자 리터럴

```javascript
Num
```
Number.MAX_SAFE_INTEGER
// 10진수
// 2진수
// 부동소수점


---
<br>

### 3. Not a Number
* 전역 객체 //
* 숫자로 읽어낼 수 없다.
* 잘못된 계산 결과식
* 정의할 수 없는 계산식
* 문자열이 포함된 계산식 (덧셈 제외)

<br>

1. 느슨하게 검사
```javascript
isNaN(undefined); // true
isNaN({}); // true
isNaN('문자열'); // true
```

2. ES2015+ (엄격하게 검사)
```javascript
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN('문자열'); // false
```


### 4. Infinity
* 너무 크거나 작다
* 지수 1023까지만 허용

### 5. 정수 (Integer)

* Javascript에는 부동소수점 숫자만 존재
* 정수를 저장하는 2가지 방법
  * 10진 소수가 없는 작은 숫자는 정수로 오래 유지
  * 비트 연산자를 이용 32비트 정수로 바꿔 변환

<br>

* 안전한 정수의 최대값
    ```javascript
    Number.MAX_SAFE_INTEGER
    ```
* 안전한 정수의 최소값
    ```javascript
    Number.MIN_SAFE_INTEGER
    ```

* 소수점을 다루는 방법
    ```javascript
    console.log(Math.floor(4.6)) //result: 4
    console.log(Math.ceil(4.9)) //result: 5
    console.log(Math.round(4.6)) //result: 5
    ```

* 정수로 변환
    ```javascript
    console.log(parseInt('10')); //result: 10
    console.log(Number('10')); //result: 10
    ```
