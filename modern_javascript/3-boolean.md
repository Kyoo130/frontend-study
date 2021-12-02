# 불 자료형 (Boolean)

### 2. 논리 연산자 (Logical Operator)

* OR : || (또는)
* AND : && (그리고)
* NOT : ! (부정)

예제1)

```javascript
function getName(firstName, lastName) {
    const fName = firstName === undefined ? '성 없음' : firstName;
    const lName = lastName === undefined ? '이름 없음' : lastName;

    return '저는 ' + fName + ' ' + lName + ' 입니다.';
}

// 결과
console.log(getName('Lee', 'KyooMin')) // result: 저는 Lee KyooMin 입니다.
console.log(getName('Lee', )) // result: 저는 Lee 성 없음 입니다.
```

또는

```javascript
function getName(firstName, lastName) {
    const fName = firstName || '성 없음';
    const lName = lastName || '이름 없음';
    return '저는 ' + fName + ' ' + lName + ' 입니다.';
}

// 결과
console.log(getName('Lee', 'KyooMin')) // result: 저는 Lee KyooMin 입니다.
console.log(getName('Lee', )) // result: 저는 Lee 성 없음 입니다.
```

---
<br>

### 3. 비교 연산자 (Comparison Operator)

<br>

* 느슨한 비교 : ==
* 엄격한 비교 : ===

<br>

|비교 연산자|내 용|
|:---:|---|
|===|양쪽이 같다.|
|!==|양쪽이 다르다.|
|>|왼쪽이 더 크다.|
|<|오른쪽이 더 크다.|
|>=|왼쪽이 더 크거나 같다.|
|<=|오른쪽이 더 크거나 같다.|

<br>

예제1)
```javascript
console.log('1' == 1) // result: true (문자열과 숫자형이 같다고 표현된다.)
console.log(0 == 0) // result: true
console.log(0 == '') // result: true (숫자형과 공백이 같다고 표현된다.)
console.log(0 == []) // result: true 
console.log('' == []) // result: true
```

