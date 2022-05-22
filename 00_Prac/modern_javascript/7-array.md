<p style="color: #ec4c6a">(작성중...) 재정리 필요</p>

# 배열 (Array)

1. 배열 다루기

```javascript
// 배열 만들기
const studyMembers = ["규민", "피카츄", "라이츄", "파이리"];
console.log(studyMembers);


// 배열의 끝에 요소 추가
studyMembers.push("꼬북이");

// 배열의 앞에 요소 추가
studyMembers.unshift("버터플");


// 배열에서 요소의 인덱스 찾기
studyMembers.indexOf("규민");

// 배열에서 요소 포함 여부 확인
studyMembers.includes("규민");


// 배열에서 앞 요소 지우기
studyMembers.shift('버터플');

// 배열에서 뒷 요소 지우기
studyMembers.pop('꼬북이');

// 배열에서 특정 인덱스 요소 지우기
studyMembers.splice(2, 1); // 2번째 인덱스부터 1개를 지우기
```