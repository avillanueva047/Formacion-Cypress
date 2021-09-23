document.getElementById('btn-alert').addEventListener('click', () => {
    alert('Hola mundo!!!');
})
document.getElementById('btn-confirm').addEventListener('click', () => {
    const borrarMsg = confirm('¿Quieres borrar el mensaje?');
    if (borrarMsg) {
        document.getElementById('confirm-nombre').innerText = '';
    }
})
document.getElementById('btn-prompt').addEventListener('click', () => {
    const nombre = prompt('Introduce tu nombre:');
    console.log({ nombre })
    if (nombre) {
        document.getElementById('prompt-nombre').innerText = nombre;
    }
})
