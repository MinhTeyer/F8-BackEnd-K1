// # Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

var distance = 125;
var totalFare;
if(distance <= 1) {
    totalFare = 15000;
} 
else if (distance > 1 && distance < 5) {
    totalFare = distance * 13500;
}
else if (distance > 5) {
    totalFare = distance * 11000;
}
else if (distance > 120) {
    totalFare = (distance * 11000) - totalFare * 10 / 100;
}

console.log(`Số tiền cần trả: ${totalFare}`);

// # Tính tiền điện
// Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau

// Input: Số điện tiêu thụ hàng tháng

// Output: Hiển thị số tiền phải đóng

var powerConsumption = 150;
var powerPrice;

if (powerConsumption > 0 && powerConsumption< 50) {
    powerPrice = 1678;
}
else if (powerConsumption > 51 && powerConsumption <= 100) {
    powerPrice = 1734;
}
else if (powerConsumption > 101 && powerConsumption <= 200) {
    powerPrice = 2014;
}
else if (powerConsumption > 201 && powerConsumption <= 300) {
    powerPrice = 2536;
}
else if (powerConsumption > 301 && powerConsumption <= 400) {
    powerPrice = 2834;
}
else if (powerConsumption > 401) {
    powerPrice = 2927;
}
var powerBill = powerConsumption * powerPrice
console.log(`Số tiền điện phải đóng: ${powerBill}`);

// # Tính giai thừa

var n = 5;
var total = 1;
if (Number.isInteger(n)) {
    for (var i = 1; i <= n; i++) {
        total *= i;
    }
    console.log(`Giai thừa của ${n} bằng ${total}`);
}
else {
    console.log(`Không phải số nguyên`);
}

// # Kiểm tra số nguyên tố

var a = 12, result = true;

if (a < 2) // Nếu n bé hơn 2 tức là không phải số nguyên tố
{
    result = false;
}
else
{
    for(var i = 2; i < a-1; i++) // lặp từ 2 tới n-1
    {
        if(a % i == 0)
        {
            result = false;
            break;
        }
    }
}

if(result == true)
{
    console.log(`${a} là số nguyên tố`);
}
else
{
    console.log(`${a} không phải số nguyên tố`);
}







