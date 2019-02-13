
const posts =[
	{title:"post one", body :"This is post one"},
	{title:"post 2ed", body :"This is post two"}
]

function getDate (){
var date= new Date();

function formatDate () {};

return date;

}

let name

function getPosts() {
	setTimeout(() => {
		let output ='';
		posts.forEach ((post,index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML =output;		
	}, 1000);
};

function createPost(post,callback){
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			posts.push(post);
			const error = false;
			if (!error){
				resolve()				
			} else reject ('error something went wrong');
		}, 2000);
	});
};

//  Async Await
async function init() {
	await createPost ({title:"Post Await" ,body:"This is an await POST"});
	getPosts();
};
 init();
 
 
 //Async Await with Fetch
 
 async function fetchUsers ()
 {
	 const res=await fetch('https://jsonplaceholder.typicode.com/users');
     data = await res.json();
	 console.log ("d");
	 console.log (data);	 
	 
 };
 
 fetchUsers();
 

//createPost ({title:"Post 4" , body:"This is Post $"})
//.then(getPosts)
//.catch (err => console.log(err));
//
const promise1 = Promise.resolve ('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => 
						setTimeout(resolve,2000,'Goodbye'));
const promise4 = fetch ('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all( [promise1,promise2,promise3,promise4]).then(values => console.log(values));



