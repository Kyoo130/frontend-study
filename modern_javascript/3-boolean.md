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