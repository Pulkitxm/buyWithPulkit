
function validate() {
    var name = document.getElementById('name').value ;
    var pass = document.getElementById('pass').value ;
    var cpass = document.getElementById('cpass').value ;
    var email = document.getElementById('email').value ;
    var number = document.getElementById('number').value ;
    //Conditions
    var namecheck = /^[A-Za-z]{3,}$/ ;
    var emailcheck = /^[A-Za-z._]{3,}[@]{1}[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var passcheck = /^[A-Za-z!@#$%^&*]{8,16}$/ ;
    var numcheck = /^[6789]{1}[0-9]{9}$/ ;

    if (namecheck.test(name)){
        document.getElementById('error-name').innerHTML="";
        console.log('no-error in name ')
    } else{
        document.getElementById('error-name').innerHTML="<- Correct the name";
        console.log('error in name ')
        // alert('Error in name');
        return false ;  
    }
    if (emailcheck.test(email)){
        document.getElementById('error-email').innerHTML="";
        console.log('no-error in email ')
    } else{
        document.getElementById('error-email').innerHTML="<- Correct the email";
        console.log('error in email ')
        // alert('Error in email');
        return false ;
    }
    if (numcheck.test(number)){
        document.getElementById('error-number').innerHTML="";
        console.log('no-error in number ')
    } else{
        document.getElementById('error-number').innerHTML="<- Correct the number";
        console.log('error in number ')
        // alert('Error in number');
        return false ;
    }
    if (passcheck.test(pass)){
        document.getElementById('error-pass').innerHTML="";
        console.log('no-error in pass ')
    } else{
        document.getElementById('error-pass').innerHTML="<- Correct the pass";
        console.log('error in pass ')
        // alert('Error in pass');
        return false ;
    }
    if (cpass.match(pass)){
        document.getElementById('error-cpass').innerHTML="";
        console.log('no-error in cpass ')
    } else{
        document.getElementById('error-pass').innerHTML="<- Correct the pass and cpass";
        console.log('error in pass ')
        // alert('Error in pass and cpass');
        return false ;
    }

}
