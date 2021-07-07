
	



const formulario = document.getElementById('formulario');

const inputs = document.querySelectorAll('#formulario input');

 const expresiones   =  {
	nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/ ,  // Letras y espacios, pueden llevar acentos.
	correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ,
} 

const campos = {
	nombre:false,
	correo:false
}

const validarFormulario = (e) => {
	switch(e.target.name){
		case"nombre":
		if(expresiones.nombre.test(e.target.value)){
			document.getElementById('grupo_nombre').classList.remove('formulario__grupo-incorrecto');			
			document.getElementById('grupo_nombre').classList.add('formulario__grupo-correcto');		
			document.querySelector('#grupo_nombre i').classList.add('fa-check-circle');
			document.querySelector('#grupo_nombre i').classList.remove('fa-times-circle');
			document.querySelector('#grupo_nombre .formulario_input-error').classList.remove('formulario_input-error-activo');

		campos['nombre'] = true;
		} else {
			document.getElementById('grupo_nombre').classList.add('formulario__grupo-incorrecto');
			document.getElementById('grupo_nombre').classList.remove('formulario__grupo-correcto'); 
			document.querySelector('#grupo_nombre i').classList.add('fa-times-circle');
			document.querySelector('#grupo_nombre i').classList.remove('fa-check-circle');
	
			document.querySelector('#grupo_nombre .formulario_input-error').classList.add('formulario_input-error-activo');

		campos['nombre'] = false;
			
		}
		break;

		case"correo":
		if(expresiones.correo.test(e.target.value)){
			document.getElementById('grupo_correo').classList.remove('formulario__grupo-incorrecto');			
			document.getElementById('grupo_correo').classList.add('formulario__grupo-correcto');		
			document.querySelector('#grupo_correo i').classList.add('fa-check-circle');
			document.querySelector('#grupo_correo i').classList.remove('fa-times-circle');
			document.querySelector('#grupo_correo .formulario_input-error').classList.remove('formulario_input-error-activo');

		campos['correo'] = true;

		} else {
			
			document.getElementById('grupo_correo').classList.remove('formulario__grupo-correcto');
			document.querySelector('#grupo_correo i').classList.add('fa-times-circle');
			document.querySelector('#grupo_correo i').classList.remove('fa-check-circle');
	
			document.querySelector('#grupo_correo .formulario_input-error').classList.add('formulario_input-error-activo');

			campos['correo'] = false;	
		}
		break;

		case"terminos":
		if(expresiones.terminos.test(e.target.value)){
			document.getElementById('grupo_terminos').classList.remove('formulario__grupo-incorrecto');			
			document.getElementById('grupo_terminos').classList.add('formulario__grupo-correcto');		
			document.querySelector('#grupo_terminos i').classList.add('fa-check-circle');
			document.querySelector('#grupo_terminos i').classList.remove('fa-times-circle');
			document.querySelector('#grupo_terminos .formulario_input-error').classList.remove('formulario_input-error-activo');

		campos['terminos'] = true;
		} else {
			document.getElementById('grupo_terminos').classList.add('formulario__grupo-incorrecto');
			document.getElementById('grupo_terminos').classList.remove('formulario__grupo-correcto');
			document.querySelector('#grupo_terminos i').classList.add('fa-times-circle');
			document.querySelector('#grupo_terminos i').classList.remove('fa-check-circle');
	
			document.querySelector('#grupo_terminos .formulario_input-error').classList.add('formulario_input-error-activo');

		campos['terminos'] = false;
		}
		break;

	}
}

inputs.forEach((input) =>{
	input.addEventListener('keyup',validarFormulario);
	input.addEventListener('blur',validarFormulario);


formulario.addEventListener('submit',(e) => {
	e.preventDefault();
	if(campos.nombre && campos.correo){
		formulario.reset();
	}
});

});

formulario.addEventListener('submit',(e) => {
	e.preventDefault();
	
		if(campos.nombre && campos.correo){
			formulario.reset();
		}
	
	});
	

	function enviar() 
	{
	   swal.fire ({
		   title:'EMPRESA DE TRANSPORTE GRUPO TOCSAC',
	   
		   html:'<b class="registro_js">Gracias por Registrarse</b>',
		   icon: 'success',
		   background:'white',
		   confirmButtonText:'Listo',
		   footer:'<a class="footer_de_jv" href="../index.html">REGRESAR A LA PAGINA DE INICIO</a>',
		   backdrop:true,
		   timer: 5000,
		   timerProgressBar:true,
		   toast:false,
		   position:'center',
		   allowOutsideClick:false,
		   allowEscapeKey:false,
		   allowEnterKey:false,
		   stopKeydownPropagation:false,
		
		})	
		
	}


 



