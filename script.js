const form = document.getElementById('converterForm');
const semestersInput = document.getElementById('semesters');
const sgpaInputsContainer = document.getElementById('sgpaInputs');
const resultContainer = document.getElementById('result');

// Event listener to generate SGPA input fields
semestersInput.addEventListener('input', () => {
    const numSemesters = parseInt(semestersInput.value);
    sgpaInputsContainer.innerHTML = ''; // Clear existing inputs
    
    if (numSemesters > 0) {
        for (let i = 1; i <= numSemesters; i++) {
            const sgpaField = `
                <div class="input-field">
                    <label for="sgpa${i}">Enter SGPA for Semester ${i}:</label>
                    <input type="number" id="sgpa${i}" name="sgpa${i}" step="0.01" min="0" max="10" placeholder="SGPA" required>
                </div>`;
            sgpaInputsContainer.insertAdjacentHTML('beforeend', sgpaField);
        }
    }
});

// Event listener to calculate CGPA
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const numSemesters = parseInt(semestersInput.value);
    let totalSGPA = 0;
    
    for (let i = 1; i <= numSemesters; i++) {
        const sgpa = parseFloat(document.getElementById(`sgpa${i}`).value);
        if (!isNaN(sgpa)) {
            totalSGPA += sgpa;
        }
    }
    
    const cgpa = totalSGPA / numSemesters;
    
    resultContainer.textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
});
