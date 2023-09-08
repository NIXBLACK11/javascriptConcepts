const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];


// mimics a actual server
// setTimeout(function(){
    
    // }, 1000);
    
    
    //This will cause it tyo load only two posts
    // function getPosts() {
        //     setTimeout(() => {
            //         let output = '';
            //         posts.forEach((post, index) => {
                //             output += `<li>${post.title}</li>`;
                //         });
                //         document.body.innerHTML = output;
                //     }, 1000);
                // }
                
                // function createPost(post) {
                    //     setTimeout(() => {
                        //         posts.push(post);
                        //     }, 2000);
                        // }
                        
                        // getPosts();
                        // createPost({ title: 'Post Three', body: 'This is post three'});
                        
                        
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, Callback) {
    setTimeout(() => {
        posts.push(post);
        Callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);