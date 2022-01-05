// function3.js
//배열
function sumAry(ary) {
    var sum = 0;
    for (var i = 0; i < ary.length; i++) {
        sum += ary[i];
    }
    return sum;
}

// 배열 리턴
var result = sumAry([1, 2, 3, 4, 5]);
console.log(`결과값: ${result}`);


// 큰 값
function getMax(first, last) {
    if (first > last) {
        return first;
    } else {
        return last;
    }
}

console.log(`큰 값: ${getMax(30,40)}`);

// 최대값
function getMaxVal(ary) {
    var maxVal = ary[0];
    for (var i = 0; i < ary.length; i++) {
        if (ary[i] > maxVal) {
            maxVal = ary[i];
        }
    }

    return maxVal;
}

// 최소값
function getMinVal(ary) {
    var minVal = ary[0];
    for (var i = 0; i < ary.length; i++) {
        if (ary[i] < minVal) {
            minVal = ary[i]
        }
    }
    return minVal;
}


var numAry = [34, -20, 15, 8, 10, -55];
console.log(`최대값: ${getMaxVal(numAry)}`);
console.log(`최소값: ${getMinVal(numAry)}`);