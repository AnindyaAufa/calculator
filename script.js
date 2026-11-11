let display = document.getElementById('display');
let currentInput = '0';

// Memperbarui tampilan kalkulator
function updateDisplay() {
    display.textContent = currentInput;
}

// Menghapus semua angka
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

// Menghapus satu karakter terakhir
function backspace() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }

    updateDisplay();
}

// Menambahkan angka atau operator
function appendCharacter(char) {
    if (currentInput === '0' && char !== '.') {
        currentInput = char;
    } else {
        currentInput += char;
    }

    updateDisplay();
}

// Menghitung hasil operasi
function calculate() {
    try {
        let expression = currentInput
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100');

        let result = eval(expression);

        currentInput = String(result);
        updateDisplay();

    } catch (error) {
        currentInput = 'Error';
        updateDisplay();

        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}