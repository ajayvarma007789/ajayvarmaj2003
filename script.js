
function register(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var password2=document.getElementById('password2').value;
    var msg = document.getElementById('msg');

    if(name =='' || email == '' || password == '' || password2 == ''){
            msg.innerHTML = 'please fill out all fields';
    }else{
            if(name.length < 3){
                msg.innerHTML='name must atleast of 3 characters';

            }else{
                var atpos = email.indexOf('@');
                var dotpos = email.lastIndexOf('.');
            if(atpos<1||dotpos<atpos+2||dotpos+2>=email.length){
                msg.innerHTML='Enter valid Email';
            }else{
                if(password!=password2){
                    msg.innerHTML='password dont match';
                }
                //success
                msg.innerHTML = name+'is registered with email'+email;
            }
                  
        
            }
          
    }

    

}
document.getElementById('regForm').addEventListener('submit',register,false);


