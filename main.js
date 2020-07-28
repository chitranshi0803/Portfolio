function validate(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(fname.length < 20){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(lname.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 170){
      textarea = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
$('#navbar a, .btn').on('click', function(event){
    if(this.hash!==''){
        event.preventDefault();
        const hash=this.hash;
        $('html, body').animate(
        {
            scrollTop:$(hash).offset().top-80
        },
            800
        );
    }
});