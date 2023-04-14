///phep tinh
// 50 * 6,9% = 3,45
// 50 + n * 3,45

// ---
// const ONE_HUNDRED_PERCENT = 100;
// let year = 3;
// let money = 100;
// let bankPercent = 10;
// let moneyInOneYear = money * (bankPercent / ONE_HUNDRED_PERCENT);
// let interestMoney = year * moneyInOneYear;
// let total = year * interestMoney;

// let message = `
// <pre>
// So Nam Gui: ${year}
// Lai suat: ${bankPercent} %
// Sau ${year} nam tien lai: ${interestMoney}
// So tien goc va lai suat ${year} nam: ${total}

// </pre>
// `;
// document.write(message);


// tinh dien tich chu vi hinh chu nhat
// a * b
//2 * (a+b)

const FACTOR = 2;
let width = prompt('Chieu dai');
let height = prompt('Chieu rong');
let acreage = width * height;
let perimeter = FACTOR * (Number(width) + Number(height));

let message =`
<pre>
Chieu dai: ${width} cm
Chieu rong: ${height} cm
Dien tich: ${acreage} cm
Chu vi: ${perimeter} cm
</pre>
`;
document.write(message)