
function sub(event){
	alert("lista dos nomes dos candidatos")
	const xhr = new XMLHttpRequest()
	xhr.open('POST', '/candidato' , true)
	xhr.onload = (event) => {
		click(xhr, event)
	}
	const algo = 10
	xhr.send(algo)

	/*

	*/

}

function click(xhr, event){
	
	if (xhr.status != 200) {
		
        return;
    }
	const data = JSON.parse(xhr.response)
	const trfirst = document.getElementById('m')
	data.forEach((cand) => {
        const td = document.createElement('tr')
        td.innerHTML = `<td>${cand.id}</td> <td> ${cand.nome}</td> <td>${cand.cargo}</td> <td>${cand.tipo}</td> <td>${cand.status}</td>`
		trfirst.appendChild(td)
        
    })

}

function estaduais(event){
	alert('deputados estaduais')
	const xhr = new XMLHttpRequest()
	xhr.onload = (event) => {
		clickestatual(xhr, event)
	}
	xhr.open('POST', '/estaduais' , true)
	const algo = 10
	xhr.send(algo)


}

function clickestatual(xhr, event){
		if (xhr.status != 200) {
		
        return;
    }
		const data = JSON.parse(xhr.response)
		const trfirst = document.getElementById('m')
		data.forEach((cand) => {
        const td = document.createElement('tr')
        td.innerHTML = `<td>${cand.id}</td> <td> ${cand.nome}</td> <td>${cand.cargo}</td> <td>${cand.tipo}</td> <td>${cand.status}</td>`
		trfirst.appendChild(td)
        
    })

}

function federal(){

		alert('deputados estaduais')
		const xhr = new XMLHttpRequest()
		xhr.onload = (event) => {
		clickestatual(xhr, event)
	}
		xhr.open('POST', '/federais' , true)
		const algo = 10
		xhr.send(algo)


}

function clickfederal(){

			if (xhr.status != 200) {
		
       		 return;
    }
			const data = JSON.parse(xhr.response)
			const trfirst = document.getElementById('m')
			data.forEach((cand) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.id}</td> <td> ${cand.nome}</td> <td>${cand.cargo}</td> <td>${cand.tipo}</td> <td>${cand.status}</td>`
			trfirst.appendChild(td)
        
    })

}

function governador(event){
		alert('governador')
		const xhr = new XMLHttpRequest()
		xhr.onload = (event) => {
		clickgovernador(xhr, event)
	}
	xhr.open('POST', '/governador' , true)
	const algo = 10
	xhr.send(algo)

}

function clickgovernador(xhr, event){
			if (xhr.status != 200) {
		
       		 return;
    }
			const data = JSON.parse(xhr.response)
			const trfirst = document.getElementById('m')
			data.forEach((cand) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.id}</td> <td> ${cand.nome}</td> <td>${cand.cargo}</td> <td>${cand.tipo}</td> <td>${cand.status}</td>`
			trfirst.appendChild(td)
        
    })
}

function senador(event){
		alert('senadores')
		const xhr = new XMLHttpRequest()
		xhr.onload = (event) => {
		clickgovernador(xhr, event)
	}
	xhr.open('POST', '/senador' , true)
	const algo = 10
	xhr.send(algo)

}

function clicksenador(xhr,event){
				if (xhr.status != 200) {
		
       		 return;
    }
			const data = JSON.parse(xhr.response)
			const trfirst = document.getElementById('m')
			data.forEach((cand) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.id}</td> <td> ${cand.nome}</td> <td>${cand.cargo}</td> <td>${cand.tipo}</td> <td>${cand.status}</td>`
			trfirst.appendChild(td)
        
    })

}

function presidente(event){
		alert('presidente')
		const xhr = new XMLHttpRequest()
		xhr.onload = (event) => {
		clickgovernador(xhr, event)
	}
	xhr.open('POST', '/presidente' , true)
	const algo = 10
	xhr.send(algo)

}

function clickpresidente(xhr,event){

			 if (xhr.status != 200) {
		
       		 return;
    }
			const data = JSON.parse(xhr.response)
			const trfirst = document.getElementById('m')
			data.forEach((cand) => {
        	const td = document.createElement('tr')
        	td.innerHTML = `<td>${cand.id}</td> <td> ${cand.nome}</td> <td>${cand.cargo}</td> <td>${cand.tipo}</td> <td>${cand.status}</td>`
			trfirst.appendChild(td)
        
    })

}







/*
const key = document.getElementById("cl")
key.addEventListener('click', () => {
	alert('clicou')

});
*/

