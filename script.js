document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('meuFormulario').addEventListener('submit', function(event){
    event.preventDefault();   
    const nome = document.getElementById('nome').value; 
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const embarque = document.getElementById('embarque').value;
    const desembarque = document.getElementById('desembarque').value;

    const mensagem = `
        <h3>Reserva Feita!</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Hora:</strong> ${hora}</p>
        <p><strong>Embarque:</strong> ${embarque}</p>
        <p><strong>Desembaruqe:</strong> ${desembarque}</p>
        `;

    document.getElementById('mensagem').innerHTML = mensagem;
    });
})
    