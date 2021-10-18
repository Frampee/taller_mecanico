//CUANDO PULSE ENVIAR QUE SALGA UN MENSAJE EMERGENTE
const mensaje = () => {
    const p = document.createElement('p');
    p.setAttribute('id', 'mensajeEmergente');
    p.innerHTML = `<p>¡Le llamaremos pronto!</p>`;
    document.getElementById('formulario').appendChild(p);
}

// INICIO DE SESION
let CONTADOR = 0;
let CONTADOR2 = 0;
const pedirCita = () => {
    if (CONTADOR == 0){
        CONTADOR++
        let temp = document.createElement('section');
            temp.setAttribute('id', 'formularioSesion');
            temp.innerHTML = `
            <form id="inicioSesion">
                <h2>Inicia sesion</h2>
                <label for="registro">¿No tienes cuenta?</label>
                <input type="button" id="registro" value="Creala aquí" onclick="crearCuenta()"><br><br>
                <label for="name">Escriba su nombre de usuario</label><br>
                <input type="text" id="name" required><br>
                <label for="pssword">Escriba su contraseña</label><br>
                <input type="password" id="pssword" required><br><br>
                <button id="inicio">Entrar</button>
            </form>
            `;
        if (document.getElementById('imagenMecanica')) {
            document.getElementById('PrimerFormulario').appendChild(temp);
            eliminarElementoMecanica();
        } else if (document.getElementById('cristalesLuna')){
            document.getElementById('SegundoFormulario').appendChild(temp);
            eliminarElementoCristales();
        } else if (document.getElementById('descripcion')){
            document.getElementById('TercerFormulario').appendChild(temp);
            eliminarElementoChapa();
        }
    }
}

const eliminarElementoMecanica = () => {
    document.getElementById('imagenMecanica').remove();
}
const eliminarElementoCristales = () => {
    document.getElementById('cristalesLuna').remove();
}
const eliminarElementoChapa = () => {
    document.getElementById('descripcion').remove();
}

const crearCuenta = () => {
    if (CONTADOR2 == 0){
        CONTADOR2++;
        const cuenta = document.createElement('section');
        cuenta.getAttribute('id', 'cuenta');
        cuenta.innerHTML = `
        <form id="registrate">
            <h2>Registrate</h2>
            <label for="name">Registre su nombre de usuario</label><br>
            <input type="text" id="name" required><br>
            <label for="email">Correo electrónico</label><br>
            <input type="email" id="email" required><br>
            <label for="pssword">Elija su contraseña</label><br>
            <input type="password" id="pssword" required><br><br>
            <button id="registro">Registrar</button>
    
        </form>
        `
        if (document.getElementById('PrimerFormulario')) {
            document.getElementById('RegistroUno').appendChild(cuenta);
            eliminarElementoPrimerForm();
        } else if (document.getElementById('SegundoFormulario')){
            document.getElementById('RegistroDos').appendChild(cuenta);
            eliminarElementoSegundoForm();
        } else if (document.getElementById('TercerFormulario')){
            document.getElementById('RegistroTres').appendChild(cuenta);
            eliminarElementoCTercerForm();
        }
    }
}

const eliminarElementoPrimerForm = () => {
    document.getElementById('PrimerFormulario').remove();
}
const eliminarElementoSegundoForm = () => {
    document.getElementById('SegundoFormulario').remove();
}
const eliminarElementoCTercerForm = () => {
    document.getElementById('TercerFormulario').remove();
}