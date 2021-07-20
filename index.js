const birthdayForm = document.getElementById('birthdayForm');
const submitBtn = document.querySelector('button[type="submit"]');

let obj = {};

submitBtn.addEventListener("click",(e) => {
    e.preventDefault();
    const formData = new FormData(birthdayForm);
    for(let fields of formData.entries()) {
        const [label, value] = fields;
       obj = {
           ...obj,
           [label] : value
       }
    }
    calculate(obj);
})

const calculate = (obj) => {
    let bDate = Number(obj.birthdaydate.split("-").join("")), number = Number(obj.luckNum);
    let sum = 0;
    console.log(bDate, number);
    while( bDate > 0 ) {
        let lastDigit = bDate % 10;
        sum = sum + lastDigit;
        bDate = Math.trunc(bDate/10);
    }
    console.log(sum, number);
    if(sum % number === 0) {
        console.log("lucky")
    } else {
        console.log("not lucky");
    }
}