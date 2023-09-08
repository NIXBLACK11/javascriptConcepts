const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];                       
      
//Promise is actually a new version of callbacks

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            //This error defines if there is ant error in the server query to set new post
            const error  = false;
            
            if(!error) {
                resolve();
            } else {
                reject("error");
            }
        }, 2000);
    });
}


//apply .catch for if there is an error
createPost({ title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(err => console.log(err));