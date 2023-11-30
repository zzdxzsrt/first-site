const myname=document.getElementById("name")
const email=document.getElementById("email")
const message=document.getElementById("message")
const text=document.getElementById("success-message")

document.getElementById("form1").addEventListener("submit",function (e){
    e.preventDefault()  //перезагружаеться страница
    console.log("name - ", myname.value, "email - ", email.value, "message - ", message.value)
    text.innerHTML="Форма успешно отправлена!"
    myname.value=""
    email.value=""
    message.value=""

})


