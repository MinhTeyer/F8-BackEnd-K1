// Bài 1

function getNum(n) {
    var evenNum = [];
    var oddNum = [];
  
    if (Number.isInteger(n)) {
      for (var i = 0; i <= n; i++) {
        if (i % 2 === 0) {
          evenNum.push(i);
        } else {
          oddNum.push(i);
        }
      }
      return {
        even: evenNum,
        odd: oddNum
      };
    } else {
      return "Bạn đã nhập sai!!!";
    }
  }
  
  var n = 10;
  var result = getNum(n);
  
  if (typeof result === "string") {
    console.log(result);
  } else {
    console.log("Số lẻ: " + result.odd.join(", "));
    console.log("Số chẵn: " + result.even.join(", "));
  }

// Bài 2

var calculateTotal = function(n) {
    var a = 0, total = 0;
    for (var i = 1; i <= n; i++) {
      a = i * (i + 1);
      total += a;
    }
  
    return total;
  }
  
  var n = 7;
  console.log(calculateTotal(n));

//   Bài 3

var a = 5, b = 9;
var totalEven = 0, totalOdd = 0;

if(Number.isInteger(n) && n > 0)
{
    for(var i = a; i <= b; i++)
    {
        if(i % 2 === 0)
        {
            totalEven += i;
        }
        else
        {
            totalOdd += i;
        }
    }

    console.log(`Tổng số lẻ: ${totalOdd}`);
    console.log(`Tổng số chẵn: ${totalEven}`);
}
else
{
    console.log('Không hợp lệ');
}

// Bài 4

function isPrime (n)
{
    if(n === 1)
    {
        return false;
    }

    for(var i = 2; i <= Math.sqrt(n); i++)
    {
        if(n % i === 0)
        {
            return false;
        }
    }
    return true;
}

var n = 7;
if(Number.isInteger(n) && n > 0)
{
    if(isPrime(n))
    {
        console.log(`${n} là số nguyên tố`);
    }
    else
    {
        console.log(`${n} không phải là số nguyên tố`);
    }
}
else
{
    console.log('Không hợp lệ');
}

// Bài 5
var S = 0;
function totalS(n) {
    if (n <= 0) {
        return;
    }
    S += 1 / n;
    totalS(--n)
    return S;
}
console.log(totalS(10));