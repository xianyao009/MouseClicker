let leftCount = document.getElementById('leftCount');
let rightCount = document.getElementById('rightCount');
let lCount = 0;
let rCount = 0;

function clickIncrement(event) {
    if(event.button === 0) {
        lCount++;
        leftCount.innerHTML = lCount;
    }else if (event.button === 2) {
        rCount++;
        rightCount.innerHTML = rCount;        
    }
}

function rst() {
    lCount = 0;
    rCount = 0;
    leftCount.innerHTML = "0";
    rightCount.innerHTML = "0";
}