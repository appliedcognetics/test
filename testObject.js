'use strict'
const fetch = require("node-fetch");

function Person(first, last, age, gender, interests) {
  
    // property and method definitions
    this.first = first;
    this.last = last;
  //...
  }
  var person1 = new Person ('Bob','Smith',32,'male',['music','skating']);

  
  function replacer (match,capture,offset,wholestring) 
    { console.log ("m:"+match);
      console.log ("s:"+capture);
      console.log ("t:"+offset)
      console.log ("whole:"+wholestring);
      console.log ("int:"+parseInt(capture,16));
      console.log ("char:"+String.fromCharCode(parseInt(capture,16)));
      return String.fromCharCode(parseInt(capture,16)) };

  var string = "=3F=3F=C2Beef=0AC|";

 const r ="asdkjklj@lkjlkjsdf@lkjlkjsdf";
 let ew = r.match (/@/g) || []   ;
 console.log ("ff:"+r.match (/@/g)[1]);

 console.log ("val:"+ew[3]);



 var add = (x2) => (yp) => x2+yp;

 console.log ("a:"+add(1)(2));
 
 const search = [ { processor: 'zillow', query : 'to:me from:*zillow.com  "new inquiry via zillow" newer_than:1m  ' },
                 { processor: 'streeteasy', query : 'to:me subject:streeteasy inquiry from  newer_than:1y' },

];

search.forEach(element => { console.log("e:"+ element.processor);  
});


var sss = 10 ;
console.log (sss+=sss);

var threads = [];
while (!threads.length) {
  console.log ("TTTT")
  threads.push (1);
}; 
var arr =[];
do {
arr.pop();
console.log ("one");
} while (arr.length> 0)

/// Classes

//16.17

class Particle {
constructor (x,y)
{


}
}


class Confetti extends Particle {

// write your own constructor when extending another class
  constructor  (x,y) {
    super(x,y);// run the constructor of the super class
 this.bright= random (255);
 this.r =10;
}
// if you write a function with the same name it will override the super classes function
  show ()
      { fill(this.bright),
        square (this.x,this.y,this.r);
      };
  
  update () { 
          super.update(); // do whatever you do in the parent object
          this.r += random(-2,2);
  }

}

const hapikey ="4637cab8-0bd7-4991-a4ef-65bfdb6f4cf8";

fetch(`https://api.hubapi.com/automation/v2/workflows/4183489/enrollments/contacts/coulthrust@gmail.com?hapikey=${hapikey}`, { method: 'POST', body: 'a=1' })
    .then(res => res) // expecting a json response
   
    
    var obj2 = { get x() { return 17; } };
    console.log (obj2.x) // throws a TypeError


    var language = {
      set current(name) {
        this.log.push(name);
        this.log2.push(name)
      },
      log: [],
      log2:[]
    }
    console.log("language.log:"+language.log);
    language.current = 'EN';
    console.log("language.log:"+language.log);
    language.current = 'FA';
    
    console.log(language.log);
    console.log(language.log2);


let expr = 'foo';

var obj = {
  get [expr]() { return 'bar'; }
};

console.log(obj[expr]); // "bar"
const pp ="some guy is tourt requestd for Address 123"
const listing1 = ((pp.match (/(?:message\sabout)|(?:request\sfor)(.*)/i) || [])[1]||"-").trim();
console.log (`listing1:${listing1}`);

//const listing = ((f.body.match (/(?:message\sabout)|(?:request\sfor)(.*)/i) || [])[1]||"-").trim();
//console.log (`listing :${listing}`);

var generateTemplateString = (function(){
  var cache = {};
  function generateTemplate(template){
      var fn = cache[template];
        console.log ('fn ::'+template);
      if (!fn){
          // Replace ${expressions} (etc) with ${map.expressions}.

          var sanitized = template
              .replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function(_, match){
                  return `\$\{map.${match.trim()}\}`;
                  })
              // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
              .replace(/(\$\{(?!map\.)[^}]+\})/g, '');
                // Returns a function that will use a template to generate the string
          fn = Function('map', `return \`${sanitized}\``);
      }
      return fn;
  }

  return generateTemplate;
})();

var bodyTemplate = generateTemplateString('${name} is \nking! \nphone number');

console.log(bodyTemplate({name: 'Bryan'}));




let template = ({x,y}) => `${x} + ${y} = ${x+y}` ;
 
let three = template({x:2, y:3});
let ten = template({x:5, y:5});

console.log ('rr '+three);
console.log ('rr'+ten);