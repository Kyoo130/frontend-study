<p style="color: #ec4c6a">(작성중...) 재정리 필요</p>

# 문자 자료형 (String)

### 1. Template Literals
* 멀티라인(개행) 이 자유롭다.
* Basic String Formatting => 보간법을 활용 => 표현식을 문자열 포함 가능
* HTML Escaping: 안전하게 사용하도록 도움 (XSS, SQL Injection)

1) 예제
```javascript
// ES2015+
function genDivision(innerText) {
  return `<div>${innerText}</div>`;
}

const divTag = genDivision("Kyoo");
body.innerHTML = divTag;
```