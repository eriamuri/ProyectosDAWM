window.addEventListener("DOMContentLoaded", 
	function(){
		const VariableJS = document.getElementById("IdControl");
		VariableJS.addEventListener("click",function(){
			let Lv_Mensaje_3 = "Este mensaje se muestra al presionar el boton: presioname3 - script Externo - ejecutado por medio del Id del botón";
			alert(Lv_Mensaje_3);
		});
});

window.addEventListener("DOMContentLoaded", 
	function(){
		const VariableJS = document.getElementById("textName");
		textName.addEventListener("click",function(){
			let Lv_Mensaje_3 = "Probando primer evento";
			alert(Lv_Mensaje_3);
		});
});

/*
window.addEventListener("DOMContentLoaded", 
	function(){
		const VariableJS = document.getElementById("sltPais");
		sltPais.addEventListener("click",function(){
			let Lv_Mensaje_3 = "Probando tercer evento";
			alert(Lv_Mensaje_3);
		});
});
*/

window.addEventListener("DOMContentLoaded", 
	function(){
		const VariableJS = document.getElementById("TxtEmail");
		TxtEmail.addEventListener("click",function(){
			let Lv_Mensaje_3 = "Probando segundo evento";
			alert(Lv_Mensaje_3);
		});
});


const selectPais = document.getElementById('sltPais');

  selectPais.addEventListener('change', function() {
    const form = document.getElementById('FrmRegistro');
    
    switch (this.value) {
      case 'Ecuador':
        form.style.backgroundColor = '#d4f1be'; // Verde claro
        break;
      case 'Colombia':
        form.style.backgroundColor = '#fff7b2'; // Amarillo claro
        break;
      case 'EEUU':
        form.style.backgroundColor = '#b2d7ff'; // Azul claro
        break;
      default:
        form.style.backgroundColor = ''; // Fondo por defecto
    }
  });
