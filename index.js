const birthdayForm = document.getElementById('birthdayForm');
const submitBtn = document.querySelector('button[type="submit"]');
const output = document.getElementsByClassName("output")[0];

let obj = {};
let happyUrl = "/undraw_partying_p92d.svg";
let sadUrl = "/undraw_feeling_blue_4b7q.svg"

submitBtn.addEventListener("click",(e) => {
    e.preventDefault();
    const formData = new FormData(birthdayForm);
    for(let fields of formData) {
        const [label, value] = fields;
       obj = {
           ...obj,
           [label] : value
       }
    }
    calculate(obj);
});

const calculate = (obj) => {
    let bDate = Number(obj.birthdaydate.split("-").join("")), number = Number(obj.luckNum);
    let sum = 0;

    while( bDate > 0 ) {
        let lastDigit = bDate % 10;
        sum = sum + lastDigit;
        bDate = Math.trunc(bDate/10);
    }
    
    if(sum % number === 0) {
        output.style ="display:none";
        output.style = "display: flex";
        output.children[0].src = happyUrl;
        output.children[1].innerText="Hurray, Your Birthday date is a lucky date..."
    } else {
        output.style ="display:none";
        output.style = "display:flex";
        output.children[0].src = sadUrl;
        output.children[1].innerText="Oops.., Your Birthday date is not a lucky date..."
    }
}