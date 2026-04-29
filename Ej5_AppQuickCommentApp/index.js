const API_URL = 'https://jsonplaceholder.typicode.com/comments';

document.addEventListener('DOMContentLoaded',buscarComentarios);

async function buscarComentarios() {
    try {
        const respuesta = await fetch(API_URL);
        if(!respuesta.ok) {
            throw new alert("Error ocurrido cuando buscamos comentarios");
        }

        const comentarios = await respuesta.json();
        //console.log(comentarios);

        mostrarComentarios(comentarios);
        
    }catch(error) {
        console.log(error);
    }
}

function mostrarComentarios(comentarios) {

    let comentariosLista = document.getElementById('commentList');
    comentariosLista.innerHTML = '';

    comentarios.forEach(comentario => {
        // Creo un li y le inserto el contenido (titulo y body)
        const li = document.createElement('li');
        li.textContent = `${comentario.name}: ${comentario.body}`;

        // Creo un boton de borrar 
        const botonBorrar = document.createElement('button');
        botonBorrar.textContent = 'Eliminar Comentario';
        botonBorrar.className = 'btn-eliminar';

        botonBorrar.onclick = () => borrarComentario(comentario.id,li);
        li.appendChild(botonBorrar);
        comentariosLista.appendChild(li);
    });
}

document.getElementById('createComment').onclick = async function() {
    const name = document.getElementById('commentName').value;
    const body = document.getElementById('commentBody').value;

    const newComment = {
        name,
        body,
        postId : 1
    };

    try {

        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newComment)
        });
        if(!respuesta.ok) {
             throw new Error("Error ocurrido creando un post");
        }

        const comentario = await respuesta.json();
        alert("Comentario creado satisfactoriamente!");
        
        // Limpio campos
        document.getElementById('commentName').value = '';
        document.getElementById('commentBody').value = '';

        // Muestro los Posts
        buscarComentarios();

    }catch(error) {
        console.log(error);
    }
}

async function borrarComentario(postId,liElement) {
    try {
        const respuesta = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE',
        });
        if(!respuesta.ok) {
             throw new Error("Error ocurrido borrando Comentario.");
        }
        
        alert("Comentario borrado satisfactoriamente!");
        liElement.remove();
        
        
    }catch(error) {
        console.log(error);
    }
}
    
    

