// for (let i = 1; i <= 15; i = i + 1) {
//     if (i % 2 === 0) {
//         // break
//         continue
//     }
//     console.log(i)
// }
let a = 0;
while (a < 10) {
    a += 1;
    console.log(a, '1');
}
for (let b = 1; b <= 20; b = b + 1) {
    if (b % 2 === 0)
    console.log(b, '2');
}
for (let c = 0; c <= 64; c = c + 7) {
    console.log(c, '3')
}
let v = 0;
while (v < 5) {
    v += 1;
    console.log(v, '4');
}
for (let h = 0; h <= 70; h++) {
    if (h === 7) {
        break
    }
    console.log(h, '5')
}
for (let n = 1; n < 100; n++) {
    if (n >= 45) {
        break
    }
    console.log(n, '6')
}

let g = 1;
while (g < 20) {
    g += 1;
    if (g % 3 === 0) {
    continue
    }
    console.log(g, '7');
}