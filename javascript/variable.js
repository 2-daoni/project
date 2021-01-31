//1. Use strict
//순수 바닐라js를 사용시에는 쓰는게 좋다 => strict모드
'use strict'; 

//2. Variable
//**let (added in ES6) - let으로 "변수 선언" 가능
//let은 mutable데이터 타입!(변경 가능)
// 그 전에는 let대신 var을 사용했는데 var은 절대 사용하지말자 이자식아. 왜냐면 var hoisting때문이야
//hoisting은 뭐냐? 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어 올려주는 것을 말합니다요

//3. constants
//-security, thread safety, reduce human mistakes
//constants는 immutable데이터 타입!
//한번 선언하면 절대 변하지 않는 값

//정리하자면 자바스크립트에서 변수선언 방법은 두가지!
//mutable type의 - let
//immutable type의 const

//4. Variable types (자바스크립트 데이터 타입)
//primitive, signle item: number, string, boolean, null, undefined, symbol
//object, box container (위의 싱글아이템 여러가지를 묶어서 한 단위(박스)로 관리하는것)
//function, firts-class function -> 함수도 변수에 할당이 가능하다는것