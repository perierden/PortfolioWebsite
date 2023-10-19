function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };


const serviceID = "service_5fve5x4";
const templateID = "template_mgki4ng";

emailjs.send(serviceID, templateID, params)
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        alert("Message sent successfully!")
    }
)

.catch(err=>console.log(err));

}