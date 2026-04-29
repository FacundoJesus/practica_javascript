const API_URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', fetchPosts);

// Buscar Posts
async function fetchPosts() {
    try {
        const response = await fetch(API_URL);
        if(!response.ok) {
            throw new Error("Error ocurred when Fetching Data");
        }
        const posts = await response.json();
        //console.log(posts);

        displayPosts(posts);


    } catch(error) {
        console.log(error);

    }
}

// Mostrar Posts
function displayPosts(posts) {
    let postsList = document.getElementById('postList');
    postsList.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${post.title}: ${post.body}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Post';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = () => deletePost(post.id,li);
        li.appendChild(deleteButton);
        postsList.appendChild(li);
    })
}

// Crear Post
document.getElementById('createPost').onclick = async function() {
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;
    
    const newPost = {
        title,
        body,
        userId: 1
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        if(!response.ok) {
             throw new Error("Error ocurred when Posting post");
        }

        const post = await response.json();
        alert("Post Created Succesfully!");
        
        // Limpio campos
        document.getElementById('postTitle').value = '';
        document.getElementById('postBody').value = '';

        // Muestro los Posts
        fetchPosts();

    }catch(error) {
        console.log(error);
    }
             
}

// Borrar Post
async function deletePost(postId,liElement) {
   try {
        const response = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE',
        });
        if(!response.ok) {
             throw new Error("Error ocurred when Deleting post");
        }
        
        alert("Post Deleted Succesfully!");
        liElement.remove();
        
    }catch(error) {
        console.log(error);
    }

}
