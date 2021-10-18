//CUANDO PULSE ENVIAR QUE SALGA UN MENSAJE EMERGENTE
const mensaje = () => {
    const p = document.createElement('p');
    p.setAttribute('id', 'mensajeEmergente');
    p.innerHTML = `<p>¡Le llamaremos pronto!</p>`;
    document.getElementById('formulario').appendChild(p);
}