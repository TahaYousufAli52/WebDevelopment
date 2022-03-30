const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body:'This is Post two'}
];

// Just making scenario in which we are fetching data from web

function getPosts() {
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML += output;
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject("Something went wrong!");
            }

        }, 2000);
        
    });
}

createPost({title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
        .catch(err=>{
        console.log(err);
    });


// Promise All //

const promise1 = Promise.resolve("Hello World!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("GoodBye!");
    }, 2000)
});
const promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'Tata');
})
const promise5 = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json());

Promise.all([promise1, promise2, promise3, promise4, promise5]).then(values=>{
    console.log(values);
});