window.onload = function() {
    const role =sessionStorage.getItem('role');

    if(role !== 'doctor') {
        window.location.href="login.html";
    }
        showResults();

    }

function showResults() {
    const diagnosisResults =document.getElementById("diagnosis");


diagnosisResults.innerHTML= `        <strong>Possible Diagnoses:</strong><br>
        1. Tension Headache - 60%<br>
        2. Migraines - 30%<br>
        3. Dehydration-related Headache - 10%<br>
`;

}

function logout() {
    sessionStorage.removeItem('role');
    window.location.href = "login.html";
}