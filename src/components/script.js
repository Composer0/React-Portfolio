const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const info = document.querySelectorAll('.info')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
});

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
});

info.addEventListener = ('click', () => {
    document.getElementById("about").scrollIntoView({behavior: 'smooth'})
});

$("#info").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#about").offset().top   //id of div to be scrolled
    }, 1000);
});

$("#reach").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#contact-me").offset().top   //id of div to be scrolled
    }, 1000);
});

$("#the-work").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#portfolio").offset().top   //id of div to be scrolled
    }, 1000);
});

$("#skills").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#technology").offset().top   //id of div to be scrolled
    }, 1000);
});

$(".software").hover(function(){
    $('.software').css('color', '#b5c99a');
    $('.software').addClass('pro');
})



// Contact Form 

// Get data
const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const body = document.querySelector('#message')
const success = document.querySelector('#success')
const errorNodes = document.querySelectorAll('.error')
// querySelectorAll is intended for classes. querySelector by itself is intended for IDs.
// Validate date

function validateForm(){

    clearbodys()
    let errorFlag = false;

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "name cannot be blank"
        nameInput.classList.add("error-border")
        errorFlag = true;
    } 
    if(!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(body.value.length < 1) {
        errorNodes[2].innerText = "Please enter body"
        body.classList.add("error-border")
        errorFlag = true;
    }

    if(!errorFlag) {
        success.innerText = "Success!"
        // saveContactInfo(nameInput, email, body);
        // sendEmail(nameInput, email, body)
    }
}


// Clear error / success bodys
function clearbodys() {
    for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    body.classList.remove("error-border");
}

// Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
    console.log(pattern.test)
}

// document.querySelector(".contact-form").addEventListener("submit", submitForm)

// function submitForm(e) {
//     e.preventDefault();
//     nameInput
//     email
//     body

    
//     document.querySelector(".contact-form").reset();

//     sendEmail(nameInput, email, body)
// }


// Send Email Info
// function sendEmail(nameInput, email, body) {
//     Email.send({
//         Host: 'smpt.gmail.com',
//         Username: 'opalmer1989@gmail.com',
//         Password: "DE5FDC6C84B8BB06C0AED112C6B7178508BB",
//         To: 'opalmer1989@gmail.com',
//         From: 'opalmer1989@gmail.com',
//         Subject: `${nameInput} sent you a body`,
//         Body: `${nameInput} <br> Email: ${email} <br> Body: ${body}`
// }).then(
//     message => alert("Message was sent successfully!")
//     )}

$.ajax({
    url: "https://formsubmit.co/ajax/opalmer1989@gmail.com",
    method: "POST",
    data: {
        name: "FormSubmit",
        message: "I'm from Orion Palmer"
    },
    dataType: "json"
});