// The best way to deal with promises is async await



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
// createPost({ title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(err => console.log(err));

//Async // Await  a more elegant way to handle promises
// async function init() {
//     await createPost({ title: 'Post Three', body: 'This is post three'});

//     getPosts();
// }

// init();

//  async and  await wiht fetch
async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
}

fetchUsers();


// if there are a lot of promises you have to use a lot of dot then
// the time taken to return is the time for the max promise

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());


// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

