let sh = [];
let myName = [];
for (let i = 0; i < 8; ++i) {
    for (let b = 0; b < 8; ++b) {
        if ((i + b) % 2 == 0) {
            myName.push('Black')
        } else {
            myName.push('White')
        }

    }
    sh.push(myName);
    wh = [];
}
console.log(sh);

