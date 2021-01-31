//1. String concatenation : 문자열과 문자열을 합해서 새로운 문자열을 만드는 것

//2. Numeric operators(+, -, /, *, **, %)

//3. Increment and decrement operators (++, --)
//-preIncrement
const preIncrement = ++counter;
// counter = counter + 1; 의 값을 preIncrement에 집어넣는거임!

//-postIncrement
const postIncrement = counter++;
//먼저 counter 값을 postIncrement값에 넣어준 후 counter값을 +1하는 것!!

//4. Comparison operator (<, <=, >, >=)

//5. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4<2; //false값을 갖겠지

// || (or), or연산자는 처음으로 true가 나오면 바로 그자리에서 즉시 멈춰버림! or은 하나만 참이어도 참이니까!
console.log(`or: ${value || vlaue2 || check()}`);
//**여기서 주니어들이 많이 하는 실수!!
//** 심플한 value값들을 앞에 놓고 비교적 heavy한 check같은 아이들은 뒤에 놓아야함!

// && (and), false가 나오면 바로 끝나버림 왜냐면 모두 참이어야 참이기때문
console.log(`and: ${value1 && vlaue2 && check()}`);

function check () {
    for (let i = 0; i < 10; i++) {
        console.log('이 체크함수는 그냥 언제나 true를 반환하게 되는 아이임');
    }
    return true;
}

//6. Equality(==, ===)
//왠만하면 ===을 사용하자! ===은 같은 타입인지까지 확인

//7. Conditional operators
//if, else if, else
const name ='dawon';
if (name === 'dawon') {
    console.log('Welcome, dawon!');
} else {
    console.log('unknown');
}

//8. Ternary operator: ? -> if문 더 간단하게 표현하는 방법
//condition ? value1 : value2;
console. log(name === 'dawon' ? 'yes' : 'no');

//9. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('I love you');
        break;
    default:
        console.log('same all');
        break;
}

//10. Loops
// -while
// statement가 false가 될때까지 무한으로 반복된다
let i = 3;
while (i>0) {
    console.log(`while: ${i}`);
    i--;
}

//do-while문
//일단 조건 따지지말고 블록안에 있는 내용을 실행시키고 싶을때는 do-while문을 사용하자!
//일단 블록 실행하고 나서 조건따진다.
do {
    console.log(`do while: ${i}`);
    i--;
}while (i>0);

//for문, for(begin; condition; step)
for (i = 3; i>0; i--) {
    console.log(`for: ${i}`);
}

//숙제
//break, continue
//Q1. 0부터 10까지 짝수만 continue를 이용해서 작성
for(i=0; i<11; i++) {
    if (i%2 !==0) {
        continue;
    }
    console.log(`q1. ${i}`);
} //근데 이건 continue연습용!

for(i=0; i<11; i++) {
    if (i%2 === 0) {
        console.log(`q1. ${i}`);
    }
}//이렇게 작성하는게 더 좋음!

//Q2. 0부터 10까지 출력하되 8을 만나면 그만 break를 이용해서 작성
for(i=0; i<11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}