
for (let step = 1; step < 11; step++) {
  console.log(step);
}

for (let step = -1; step > -11; step--) {
  console.log(step);
}

let result = 1;
for(let i = 1; i < 6; i++){
    result = result * i;
}
console.log(result);

const x = 7;
let n = 1;
  for (n = 1; n < 11; n++) {
    let res = x * n;
    console.log('7 * ' + n + ' = ' + res);
  }
  
let sum = 0;
for (n = 1; n < 16; n+=2) {
  sum += n;
}
console.log(sum);
 
let str = '';
for (let i = 1; i < 8; i++) {
  str+='*';
} 
console.log(str);

const userInput = Number(prompt('Bведите число'));
let stars = '';
for (let i = 1; i <= userInput; i++) {
  stars+='*';
} 
console.log(stars);

const a = Number(prompt('Bведите кол-во звезд'));
let s = '';
for(let j = 0; j <= a; j++){
  for (let i = 0; i <= a; i++) {
    s+='* ';
  }
  s+='\n';
}
console.log(s);

let num;
do {
  num = Number(prompt("Введите число от 0 до 30"));
} while (num != 15);

