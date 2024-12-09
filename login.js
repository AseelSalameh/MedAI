// login functionality where it takes the doctor or patient to it's page.
function handleLogin(event){
    event.preventDefault();

    const role = document.getElementById('Who').value; // doc or patient?

    // store the selection .. not real database
    sessionStorage.setItem('role',role);

    if(role==='doctor') {
        window.location.href="doctor.html";
    }
    else if(role ==='patient') {
        window.location.href="index.html";

    } 


  }


