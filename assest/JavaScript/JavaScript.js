/*comentarios*/

let Lv_Mensaje = "Este es mi cuarto mensaje Alert - Externo - despues del body";
alert(Lv_Mensaje);

function mostrartAlert(){
	let Lv_Mensaje_2 = "este mensaje se muestra al presionar el boton: Presioname2 - Script Externo";
	alert(Lv_Mensaje_2);
}

window.addEventListener("DOMContentLoaded",function(){
	/*Se usa constante para que el valor del id no sea modificado*/
	/*document hace referencia al HTML*/
	/*getElementById pide que busque el Elemento dentro del HTML que tenga el ID que doy como Parametro*/
	const Btn3 = document.getElementById("BtnPresioname3");
	Btn3.addEventListener("click", function(){
		let Lv_Mensaje_3 = "este mensaje se muestra al presionar el boton: Presioname3 - Script Externo - ejecutado por medio del ID boton";
		alert(Lv_Mensaje_3);
	});
	
	/*modificar Párrafo uno del HTML*/
	let Parrafo = "Este párrafo fue modiciado en JS externo, no se modificaron las fuentes";
	const Parraf1= document.getElementById("Parrafo_1");
	if(Parraf1){
		Parrafo_1.textContent=Parrafo;
	}
	/*se hackeo un btn*/
	const Btn4 = document.getElementById("BtnPresioname4");
	let Lv_caption = "Tu fuiste Hackeado";
	let Lv_Mensaje_4 = "Este botón no tiene evento click - script externo";
	if(Btn4){
		Btn4.addEventListener("click", function(){
			Btn4.textContent = Lv_caption;
			alert(Lv_Mensaje_4);
			
		});
	}
	/*1.-Metódos de JS relacionado con una páfina HTML*/
	/*Por puro ID: getElementById*/
	const Lv_Titulo = document.getElementById("IdTitulo");
	Lv_Titulo.textContent="este valor cambio por medio del: document.getElementById"
	Lv_Titulo.style.color = "Red";
	
	/*2.-Solo por Class: getElementsByClassName*/
	const items = document.getElementsByClassName("item");
	for (let i=0; i< items.length; i++){
		items[i].textContent='Método 2: Este es el párrafo #${i+1} con la clase: "item" fue modificado por el elemento: getElementsByClassName.';
		items[i].style.fontWeight = "bold";
	}
	/*3.-Solo por Class: getElementsByTagName*/
	const ln_parrafo = document.getElementsByTagName("p");
	for (let i=0; i< ln_parrafo.length; i++){
		ln_parrafo[i].style.border = "3px solid black";
	}
	/*4.-querySelector: */
	const ln_selector = document.querySelector("p");
	ln_selector.style.background = "green";
	/*5.-all*/
	const ln_elementos = document.querySelectorAll("div");
	ln_elementos.style.background = "yellow";
	
});