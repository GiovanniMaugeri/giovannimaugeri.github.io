var holderName = "";
const holder = document.getElementById("cardholder-name")
const holder_display = document.getElementById("card-owner-display")
const holder_error = document.getElementById("cardholder-error");

var cardNumber = "";
const number = document.getElementById("card-number");
const number_display = document.getElementById("card-number-display");
const number_error = document.getElementById("cardnumber-error");

var expMM = "";
var expYY = "";
const exp_MM = document.getElementById("card-exp-mm");
const exp_YY = document.getElementById("card-exp-yy");
const exp_display = document.getElementById("card-exp-display");
const exp_error = document.getElementById("cardexp-error");

var cvv = ""
const CVV = document.getElementById("card-cvv");
const cvv_display = document.getElementById("card-cvv-display");
const cvv_error = document.getElementById("cardcvv-error");

const form = document.getElementById("my-form")
const content_wrap = document.getElementById("main-content-wrap");
const success = document.getElementById("success");

holder.addEventListener("input",(e)=>{
    holderName = holder.value.toUpperCase();
    holder_display.textContent = holderName;
})
holder.addEventListener("focusout",()=>{
    if(holderName.match(/^[A-Za-z]+$/) || holderName.length === 0){
        holder.style.borderColor = "hsl(270, 3%, 87%)"
        holder_error.style.visibility = "hidden"
    }
    else{
        holder.style.borderColor = "red"
        holder_error.style.visibility = "visible"
    }
})

number.addEventListener("input",(e)=>{
    cardNumber = number.value;
    number_display .textContent = cardNumber.substring(0,4) + " " 
                                + cardNumber.substring(4,8) + " " 
                                + cardNumber.substring(8,12) + " " 
                                + cardNumber.substring(12);
})

number.addEventListener("focusout",()=>{
    if(cardNumber.match(/^[0-9]+$/) || cardNumber.length === 0){
        number.style.borderColor = "hsl(270, 3%, 87%)"
        number_error.style.visibility = "hidden"
        if(cardNumber.length  !== 16 && cardNumber.length !== 0){
            number.style.borderColor = "red"
            number_error.textContent = "Must contain 16 numbers";
            number_error.style.visibility = "visible"
        }
    }
    else{
        number.style.borderColor = "red"
        number_error.textContent = "Wrong format, numbers only";
        number_error.style.visibility = "visible"
    }        
})


exp_MM.addEventListener("input",(e)=>{
    expMM = exp_MM.value;
    if(parseInt(expMM) > 10 )
        exp_display .textContent = expMM + "/" + expYY;
    else
    exp_display .textContent = "0"+expMM + "/" + expYY;
})
exp_YY.addEventListener("input",(e)=>{
    expYY = exp_YY.value;
    exp_display .textContent = expMM + "/" + expYY;
})

exp_MM.addEventListener("focusout",()=>{
    if(expMM.match(/^[0-9]+$/) || expMM.length === 0 ){
        if(parseInt(expMM) < 13  && parseInt(expMM) > 0){
            exp_MM.style.borderColor = "hsl(270, 3%, 87%)"
            exp_error.style.visibility = "hidden"
        }
        else{
            exp_MM.style.borderColor = "red"
            exp_error.textContent = "MM must be 01 to 12";
            exp_error.style.visibility = "visible"
        }
    }
    else{
        exp_MM.style.borderColor = "red"
        exp_error.textContent = "Wrong format, numbers only";
        exp_error.style.visibility = "visible"
    }        
})
exp_YY.addEventListener("focusout",()=>{
    if(expYY.match(/^[0-9]+$/) || expYY.length === 0 ){
        if(expYY.length === 2){
            exp_YY.style.borderColor = "hsl(270, 3%, 87%)"
            exp_error.style.visibility = "hidden"
        }
        else{
            exp_YY.style.borderColor = "red"
            exp_error.textContent = "Inser a valid YY";
            exp_error.style.visibility = "visible"
        }
    }
    else{
        exp_YY.style.borderColor = "red"
        exp_error.textContent = "Wrong format, numbers only";
        exp_error.style.visibility = "visible"
    }        
})

CVV.addEventListener("input",(e)=>{
    cvv = CVV.value;
    cvv_display .textContent = cvv;
})

CVV.addEventListener("focusout",()=>{
    if(cvv.match(/^[0-9]+$/) || cvv.length === 0){
        CVV.style.borderColor = "hsl(270, 3%, 87%)"
        cvv_error.style.visibility = "hidden"
        if(cvv.length  !== 3 && cvv.length !== 0){
            CVV.style.borderColor = "red"
            cvv_error.textContent = "Must contain 3 numbers";
            cvv_error.style.visibility = "visible"
        }
    }
    else{
        CVV.style.borderColor = "red"
        cvv_error.textContent = "Wrong format, numbers only";
        cvv_error.style.visibility = "visible"
    }        
})
var flag;
form.addEventListener("submit", (e) =>{
    flag = true;
    console.log(e)
    e.preventDefault();
    if(holderName === ""){
        holder.style.borderColor = "red"
        holder_error.style.visibility = "visible"
        holder_error.textContent = "Can't be empty"
        flag =false;
    }
    if(cardNumber === ""){
        number.style.borderColor = "red"
        number_error.textContent = "Can't be empty";
        number_error.style.visibility = "visible"
        flag =false;
    }
    if(expMM === ""){
        exp_MM.style.borderColor = "red"
        exp_error.textContent = "Can't be empty";
        exp_error.style.visibility = "visible"
        flag =false;
    }
    if(expYY === ""){
        exp_YY.style.borderColor = "red"
        exp_error.textContent = "Can't be empty";
        exp_error.style.visibility = "visible"
        flag =false;
    }
    if(cvv == ""){
        CVV.style.borderColor = "red"
        cvv_error.textContent = "Can't be empty";
        cvv_error.style.visibility = "visible"
        flag =false;
    }
    if(flag){
        content_wrap.style.display = "none"
        success.style.display = "flex"
    }    
})