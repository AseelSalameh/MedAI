// dynamic questions will be here

let answers = []; //answers will be stored in this Array.

//questions flow after patient answer
function nextQuestion(answer){

    answers.push(answer);
    console.log('User selected:',answer);

    const questions = document.getElementById("questtions");

    //conditions to change the question after the patient(user)  answer
    if (answer=== 'New symptoms'){
        questions.innerHTML = `<p>What is your primary symptom?</p>
        <button onclick="nextQuestion('Headache')">Headache</button>
        <button onclick="nextQuestion('Cough')">Cough</button>
        <button onclick="nextQuestion('Fatigue')">Fatigue</button>
        <button onclick="nextQuestion('Other')">Other</button>`;
    } else if (answer === 'Headache') {
        questionContainer.innerHTML = `
            <p>Can you rate your headache on a scale of 1 to 10?</p>
            <button onclick="nextQuestion('1-3 (Mild)')">1-3 (Mild)</button>
            <button onclick="nextQuestion('4-6 (Moderate)')">4-6 (Moderate)</button>
            <button onclick="nextQuestion('7-10 (Severe)')">7-10 (Severe)</button>
        `;
        } else if (answer === '1-3 (Mild)') {
        questionContainer.innerHTML = `
            <p>How long have you been experiencing this headache?</p>
            <button onclick="nextQuestion('Less than a day')">Less than a day</button>
            <button onclick="nextQuestion('1-3 days')">1-3 days</button>
            <button onclick="nextQuestion('More than 3 days')">More than 3 days</button>
        `;
    } else if (answer === 'Less than a day') {
        questionContainer.innerHTML = `
            <p>What do you think triggered the headache?</p>
            <button onclick="nextQuestion('Stress')">Stress</button>
            <button onclick="nextQuestion('Lack of sleep')">Lack of sleep</button>
            <button onclick="nextQuestion('Dehydration')">Dehydration</button>
            <button onclick="nextQuestion('Other')">Other (please specify)</button>
        `;
    } else if (answer === 'Stress') {
        questionContainer.innerHTML = `
            <p>Are you experiencing any other symptoms?</p>
            <button onclick="nextQuestion('Nausea')">Nausea</button>
            <button onclick="nextQuestion('Sensitivity to light')">Sensitivity to light</button>
            <button onclick="nextQuestion('Dizziness')">Dizziness</button>
            <button onclick="nextQuestion('None')">None</button>
        `;
    } else if (answer === 'Nausea') {
        questionContainer.innerHTML = `
            <p>How would you describe your nausea?</p>
            <button onclick="nextQuestion('Mild')">Mild</button>
            <button onclick="nextQuestion('Moderate')">Moderate</button>
            <button onclick="nextQuestion('Severe')">Severe</button>
        `;
    } else {
        // Show the doctor's results at the end 
        displayDoctorResults();
    }
}



