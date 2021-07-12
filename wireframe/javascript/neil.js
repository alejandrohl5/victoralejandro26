    // firestore

    const db = firebase.firestore();


    const taskform = document.getElementById('formulario');
    
    const saveTask = (nombre, correo, numeroDeCelular) =>
    db.collection('Sorteo').doc().set({
        nombre,
        correo,
        numeroDeCelular
    });
    
    
    taskform.addEventListener('submit', async (e) =>{
        e.preventDefault();
    
    
       const nombre = formulario['nombre']; 
        const correo = formulario['correo']; 
        const numeroDeCelular = formulario['numeroDeCelular']; 
    
     await saveTask(nombre.value, correo.value, numeroDeCelular.value);
    
        taskform.reset();
        correo.focus();
    
        console.log(nombre, correo, numeroDeCelular)
      
        alert("Gracias por participar");   
    })
     













//storage

const storageRef = firebase.storage().ref();

var sorteo = document.getElementById("sorteo");



sorteo.addEventListener('change',subirImagenAFirebase);

function subirImagenAFirebase(){
    var imagenASubir = sorteo.files[0];
    
    alert("Subiendo foto");

    storageRef.child(imagenASubir.name).put(imagenASubir).then(function(snapshot) {
    })



}



