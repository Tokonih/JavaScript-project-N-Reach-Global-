let name = document.getElementById("name")
let num = document.getElementById("number")
let email = document.getElementById("email")
let adress = document.getElementById("adress")
let note = document.getElementById("note")
let date = document.getElementById("date")
let time = document.getElementById("time")
let form = document.getElementById("form")
let btn = document.getElementById("btn")
let career = document.getElementById("car")
let growth =document.getElementById("grow")

form.addEventListerner("btn", (e) =>{
    e.preverntDefault()
    myfunction()
})

// function myfunction(){
//     alert("working")
//     if (career.value == "career" ){
//         location.href = "career.html"
//     }
// }

// let field = document.forms["my-form"];
// let menu =field.Consultant
// let option = field.Consultant.option

 
// menu.onchange = function(){
//     let optionValue = this.career

//      location.href = "career.html"
//     // console.log(optionValue)
    
// }

// menu.onchange = function(){
//     let growvalue  = this.growth

//     location.href = "growth.html"
    
   
// }














// menu.onchange = myfunction(e){
//     e.preventDefault()
//     let optionValue = this.value
//     location.href = "https://www.php.net"
// } 

