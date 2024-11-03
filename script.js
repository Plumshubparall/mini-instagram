document.getElementById('upload-button').addEventListener('click', function(){
    
    let photoInput = document.getElementById('photo-input');
    let commentInput = document.getElementById('comment-input');

    if(photoInput.files.length > 0){  //contiene una imagen            
        let file = photoInput.files[0]; //busco la posicion 0 de la imagen       
        let reader = new FileReader();  
        reader.onload = function(e){
            let photoUrl = e.target.result;
            let comment = commentInput.value;
            addPost(photoUrl, comment);
        }
        reader.readAsDataURL(file);


    }else{
        Swal.fire({
            icon: "error",            
            text: "Por favor, seleccione una imagen",            
        });;
    }
});



function addPost(photoUrl, comment){  
    let feed = document.getElementById('feed'); //identifique el punto

    let post = document.createElement('div');
    post.className = 'post';

    let img = document.createElement('img');
    img.src = photoUrl;   
    
    //comentarios mios
    let commentSection = document.createElement('div');
    commentSection.className = 'comments';

    let initialComment = document.createElement('p');
    initialComment.innerHTML = comment;


     //Boton me gusta
    let likebutton = document.createElement('button');
    likebutton.className = 'like-button';
    likebutton.innerText = 'Me gusta';
    likebutton.addEventListener('click', function(){
        likebutton.innerText = 'Me gusta (' + (parseInt(likebutton.dataset.likes) + 1 ) + ')';
        likebutton.dataset.likes = parseInt(likebutton.dataset.likes) + 1;
    });
    likebutton.dataset.likes = 0;
    
     //comentarios por mis amigos
    
    let commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.className = 'comment-input';
    commentInput.placeholder = 'Escribe aqui tu comentario';

    let commentButton = document.createElement('button');
    commentButton.className = 'comment-button';
    commentButton.innerText = 'comentar';     
    commentButton.addEventListener('click', function(){
        let newComment = document.createElement('p');
        newComment.className = 'commentUser';
        newComment.innerHTML = commentInput.value;
        commentSection.appendChild(newComment);
        commentInput.value = '';        
    })     

    post.appendChild(img);  //agrego la imagen dentro del div padre, post
    post.appendChild(commentSection); //agrego la seccion de los comentarios
    commentSection.appendChild(initialComment);  
    post.appendChild(likebutton);
    post.appendChild(commentInput);
    post.appendChild(commentButton);  

    feed.appendChild(post);   //todo el post va dentro del feed.
}

