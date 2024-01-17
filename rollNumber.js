let currNum
let ticks;
let fresh = true;
const time = 1000;

const stat1 = document.querySelector('#number1')
const stat2 = document.querySelector('#number2')
const stat3 = document.querySelector('#number3')

function scrollNumber(digits, stat) {
    stat.querySelectorAll('span[data-value]').forEach((tick, i) => {
        tick.style.transform = `translateY(-${100 * parseInt(digits[i])}%)`;
    })

    setTimeout(() => {
        stat.style.width = `${digits.length * 158}px`;
    }, 100)
}

function addDigit(digit, fresh,stat) {
    const spanList = Array(10)
        .join(0)
        .split(0)
        .map((x, j) => `<span>${j}</span>`)
        .join('')

    stat.insertAdjacentHTML(
        "beforeend",
        `<span style="transform: translateY(-1000%)" data-value="${digit}">
        ${spanList}
      </span>`)

    const firstDigit = stat.lastElementChild

    setTimeout(() => {
        firstDigit.className = "visible";
    }, fresh ? 0 : 2000);
}

function removeDigit(stat) {
    const firstDigit = stat.lastElementChild
    firstDigit.classList.remove("visible");
    setTimeout(() => {
        firstDigit.remove();
    }, 2000);
}

function setup(startNum,stat) {
    const digits = startNum.toString().split('')

    for (let i = 0; i < digits.length; i++) {
        addDigit('0', true,stat)
    }

    scrollNumber(['0'],stat)

    setTimeout(() => scrollNumber(digits,stat), 2000)
    currNum = startNum
}

function rollToNumber(idx, num) {
    el.style.transform = `translateY(-${100 - num * 10}%)`;
}

function update(num,stat) {
    if (!num) {
        num = Math.round(Math.random() * 100)
    }
    const toDigits = num.toString().split('')
    const fromDigits = currNum.toString().split('')

    for (let i = fromDigits.length - toDigits.length; i > 0; i--) {
        removeDigit(stat)
    }
    for (let i = toDigits.length - fromDigits.length; i > 0; i--) {
        addDigit(toDigits[i],stat);
    }

    scrollNumber(toDigits,stat)
    currNum = num
}
    // setup(4, stat1)


document.querySelector(".quaySoButon").addEventListener("click",()=>{
    try {
        removeDigit(stat1)
        removeDigit(stat2)
        removeDigit(stat3)
    } catch (error) {
        
    }
    setup(7, stat1)
    setup(8, stat2)
    setup(0, stat3)
    // update(7, stat1)
    // update(8, stat2)
    // update(9, stat3)
})