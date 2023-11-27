let i;
for (i = 1; i <= 100; i++)
{
    console.log(i);
}

console.log("");

let a = 0;
let b = 1;
let c=0;
console.log(a);
console.log(b);
for (let i = 1; i <= 10; i++)
{
    c = a + b;
    a = b;
    b = c;
    console.log(c);
}

console.log("");


for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}


