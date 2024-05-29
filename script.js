// repositório de Bason Technology
// acesse @bason.technology

document.addEventListener('DOMContentLoaded', function() {
    fetch('codes.json')
        .then(response => response.json())
        .then(data => {
            // Para o primeiro card
            const button1 = data.button1;
            document.getElementById('buttonHtml1').textContent = button1.html;
            document.getElementById('buttonCss1').textContent = button1.css;

            // Para o segundo card
            const button2 = data.button2;
            document.getElementById('buttonHtml2').textContent = button2.html;
            document.getElementById('buttonCss2').textContent = button2.css;

            const button3 = data.button3;
            document.getElementById('buttonHtml3').textContent = button3.html;
            document.getElementById('buttonCss3').textContent = button3.css;

            const button4 = data.button4;
            document.getElementById('buttonHtml4').textContent = button4.html;
            document.getElementById('buttonCss4').textContent = button4.css;
        })
        .catch(error => console.error('Error loading JSON:', error));
});

// Função para copiar o código HTML
function copyHtml(elementId) {
    const htmlCode = document.getElementById(elementId).textContent;
    const tempElement = document.createElement('textarea');
    tempElement.value = htmlCode;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
}

// Função para copiar o código CSS
function copyCss(elementId) {
    const cssCode = document.getElementById(elementId).textContent;
    const tempElement = document.createElement('textarea');
    tempElement.value = cssCode;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
}
