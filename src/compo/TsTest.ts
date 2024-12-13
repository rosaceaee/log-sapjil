function logText<T>(text: T): T {
  console.log(text);
  return text;
}


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const result = swap<string, number>(["hello", 123]); 



// string 타입으로 사용할 때
const str = logText<string>("a");
str.split("");

// number 타입으로 사용할 때
const num = logText<number>(10);
num.toFixed();

// boolean 타입으로 사용할 때
const bool = logText<boolean>(true);
bool.valueOf();




function logText<임의 타입이름>(파라미터명: 임의 타입이름): 임의 타입이름 {
  return 파라미터명;
}
