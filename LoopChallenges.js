//Print odds 1-20
for(var i=1;i<=20;i+=2) {
    console.log(i)
}

//Decreasing multiples of 3
var i = 100

while(i>=1) {
    if(i%3 == 0) {
        console.log(i)
    }
    i--;
}

//Print the sequence
for(i=4;i>=-4;i-=1.5) {
    console.log(i)
}

// Sigma
var i = 1;
var sum = 0;

while(i<=100) {
    sum += i;
    i++;
}

console.log(sum);

// Factorial
var i = 1;
var product = 1;

while(i<=12) {
    product*=i;
    i++;
}

console.log(product);