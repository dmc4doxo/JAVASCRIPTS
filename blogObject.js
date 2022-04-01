
let blogPost = {
    title : 'Test1',
    body : 'Hello there',
    author : 'Mack',
    views : 44,
    comments : [
        {comment_author: 'a', comment_body: 'b'},
        {comment_author: 'c', comment_body: 'd'}
        ],

    isAlive: true,
    
}
console.log (blogPost);


// Constructor function

function BlogPost(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isAlive=false;  
}

let Blog1 = new BlogPost('First Post', 'This is the body', 'Mack',views=addViews());

console.log (Blog1);




