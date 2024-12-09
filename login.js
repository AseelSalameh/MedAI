// login functionality where it takes the doctor or patient to it's page.
function handleLogin(event){
    event.preventDefault();

    const username= document.getElementById('username').value;
    const id = document.getElementById('id').value; //input id (staff will login for patient)
    const Who = document.getElementById('Who').value; // doc or patient?
  if(username && id) {
    // store the selection .. not real database
    sessionStorage.setItem('Who',id);

    if(id==='doctor') {
        window.location.href="doctor.html";
    }
    else if(role ==='patient') {
        window.location.href="index.html";
    } else {
        alert("Please enter your username and id!!")
    }

  }


}