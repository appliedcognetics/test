var pf = {
            p: function(b)
            {console.log ("b is:"+b);}

}

pf.p('hello');
console.log ("hello here");

function Person(first, last, age, gender, interests) {
  
    // property and method definitions
    this.first = first;
    this.last = last;
  //...
  }

  var person1 = new Person ('Bob','Smith',32,'male',['music','skating']);

