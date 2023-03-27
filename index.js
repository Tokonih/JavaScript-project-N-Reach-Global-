let fname = document.getElementById("name")
let num = document.getElementById("number")
let email = document.getElementById("email")
let adress = document.getElementById("adress")
let date = document.getElementById("date")
let time = document.getElementById("time")
let form = document.getElementById("form")
let btn = document.getElementById("btn")
let career = document.getElementById("car")
let growth =document.getElementById("grow")
let NOV = document.getElementById("number_of_visitor")
let note = document.getElementById("note")


// let cost = $20


// let name_err =document.getElementById("name_err")
// let number_err = document.getElementById("number_err")
// let email_err = document.getElementById("email_err")
// let adress_err = document.getElementById("adress_err")
// let date_err = document.getElementById("date_err")
// let time_err = document.getElementById("time_err")
// let visitor_err = document.getElementById("visitor_err")
// let note_err = document.getElementById("note_err")
// let cost 


form.addEventListener("btn", (e) =>{
    e.preventDefault()
    myfunction()
    error()
})


function myfunction(){
    // alert("working")


    


    if(fname.value == "" || fname.value == undefined){
        name_err.innerHTML="Enter your Name"
        name_err.style.color = "red"
        return false
    }

    else if (num.value=="" || num.value==undefined){
        number_err.innerHTML = "Enter your number"
        number_err.style.color = "red"
        return false
    }

    else if (email.value=="" || email.value == undefined){
        email_err.innerHTML ="Enter your Email"
        email_err.style.color ="red"
        return false
    }

    else if (adress.value=="" || adress.value== undefined){
        adress_err.innerHTML= "Enter your Adress"
        adress_err.style.color = "red"
        return false
    }

    else if (date.value == "" || date.value== undefined){
        date_err.innerHTML = "Enter Date of Appointment"
        date_err.style.color = "red"
        return false
    }

    else if (time.value == "" || time.value== undefined){
        time_err.innerHTML = "Enter Time for Appointment"
        time_err.style.color = "red"
        return false
    }

    else if (NOV.value <=3){
        alert("slot avaliable")
       
       }else if( NOV.value >3){
       alert("slot not avaliable")
       
    }
    

    else if(note.value == "" || note.value == undefined){
        note_err.innerHTML = "Enter a brief note"
        note_err.style.color = "red"
    }


   if ( fname.value!= null && num.value!= null && email.value!= null && adress.value!= null && date.value!= null && time.value!= null && NOV.value!= null){
    
    document.write( "Name: " + fname.value + '<br><br>' + "Number: " + num.value + '<br><br>' + "Email: " + email.value + '<br><br>'+ "Adress: " +  adress.value +'<br><br>' +  "Date: " +date.value +'<br><br>' + "Time: " +time.value +  '<br><br>' + "Visitors: " + NOV.value +'<br><br>' + "Note: "+ note.value + "<br><br>" + "Cost: " )
   }

}



function errror(){
    fname.onfocus=()=>{
        name_err.innerHTML="";
    };

    

    // num.onfocus=()=>{
    //     number_err.innerHTML=" ";
    // }
}
error()


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

