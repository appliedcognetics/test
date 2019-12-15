const fetch = require("node-fetch"); 

const posts =[
	{title:"post one", body :"This is post one"},
	{title:"post 2ed", body :"This is post two"}
]

function getDate (){
var date= new Date();

function formatDate () {};
return date;
};

function getPosts() {
	setTimeout(() => {
		let output ='';
		posts.forEach ((post,index) => {
			output += `<li>${post.title}</li>`;
		});
		//document.body.innerHTML =output;		
		console.log (output);
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
	createPost ({title:"Post Await" ,body:"This is an await POST"});
	getPosts();
};
// init();
 
 
 //Async Await with Fetch
 
 async function fetchUsers ()
 {
	 const res= await fetch('https://jsonplaceholder.typicode.com/users');
     data = await res.json();
	 console.log ("d");
	 console.log (JSON.stringify(data));	 
	 
 };
 
 //fetchUsers();
 

//createPost ({title:"Post 4" , body:"This is Post $"})
//.then(getPosts)
//.catch (err => console.log(err));
//
const promise1 = Promise.resolve ('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => 
						setTimeout(resolve,2000,'Goodbye'));

//const promise4 = fetch ('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then (r => console.log(JSON.stringify(r)));

//Promise.all( [promise4]).then(values => console.log(values));

//promise1,promise2,promise3,
//


function Shape () {/*from  ww  w  .j a v  a 2  s. co  m*/
    this.X = 0;
    this.Y = 0;

	// Setter Function
    this.move = function (x, y) {
        this.X = x;
		this.Y = y;
	 }
    this.distance_from_origin = function () {
        return Math.sqrt(this.X*this.X + this.Y*this.Y);
	}
	
	this.area = function () {
		return this.X * this.Y;
	}
}


var s = new Shape();
s.move(10, 10);

console.log(s.distance_from_origin()," ", s.area(), s.X);

let xq = { a:1 , b:2, c:4, d:[1,3]};

const xa = [];

console.log (Object.entries(xq));
Object.entries(xq).forEach ( ([key,value]) => {console.log ("key:",key," value:",value); xa.push(value)});

console.log (xa.propertyIsEnumerable (3), xa[3]);

console.log ("k:",Object.keys(xq));

let xhi = "hi";

xr = xhi.split("").reverse().join("");


const obj2 = {

	a:1,
	b:2,
	getA() {console.log (this.a);
	return this}, // Because this returns the method
	getB () {console.log (this.b)}
};

//obj2.getA().getB();


console.log ("START HERE");

// Create the print method for the Array data type
Array.prototype = {
			print2: () => {console.log('xxx:',this,":yyy")}
		}
		
		;
// This works and not the arrow function because the arrow function changes how .this works
Array.prototype.print = function () {console.log(this.toString())};
let ab= [1,2,"VVV"];
ab.print();


//

//bind
let c1 = { 	x:5 ,
			y:10 };
let c2 = {  x:75,
			y:235};

function printc ()
{console.log (this.x,'-', this.y);}

const c1f = printc.bind(c1);
c1f();

class Counter {
constructor ()
{
this.count=0;
};

countIt() {this.count ++};

}

dd= new Counter;

console.log (dd.count);
dd.countIt();
console.log (dd.count);

class Bubble {
	constructor () {
		this.x =1;
		this.y =3;
	};
 move ()
	{ this.x= this.x+10};
}


u = new Bubble ();
console.log (u.x,u.y);
u.move();
console.log (u.x,u.y);


////////////////////

class Rectangle {
	constructor(height, width) {
	  this.name = 'Rectangle';
	  this.height = height;
	  this.width = width;
	}
	sayName() {
	  console.log('Hi, I am a ', this.name + '.');
	}
	get area() {
	  return this.height * this.width;
	}
	set area(value) {
	  this.area = value;
	}
  }
  
  class Square extends Rectangle {
	constructor(length) {
	  //this.height; // ReferenceError, super needs to be called first!
  
	  // Here, it calls the parent class's constructor with lengths
	  // provided for the Rectangle's width and height
	  super(length, length);
  
	  // Note: In derived classes, super() must be called before you
	  // can use 'this'. Leaving this out will cause a reference error.
	  this.name = 'Square';
	}
  }

  s = new Square(1)
  console.log ("height",s.height);
  console.log (s.name);
  s.sayName();