document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.calc-button');
    let screenValue = '0';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();

            if (value === 'AC') {
                screenValue = '0';
            } else if (value === 'DEL') {
                screenValue = screenValue.slice(0, -1) || '0';
            } else if (value === '=') {
                try {
                    screenValue = eval(screenValue.replace('×', '*').replace('÷', '/').replace('−', '-').replace('plus;', '+')).toString();
                } catch {
                    screenValue = 'Error';
                }
            } else {
                if (screenValue === '0' && !isNaN(value)) {
                    screenValue = value;
                } else if (screenValue === 'Error') {
                    screenValue = value;
                } else {
                    screenValue += value;
                }
            }

            screen.textContent = screenValue;
        });
    });
});
