
const a = 7;
const b = 3;
const c = 2;

if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b < c) {
    console.log('O maior número é: ' + b + ' (b)');
} else {
    console.log('O maior número é: ' + c + ' (c)');
}