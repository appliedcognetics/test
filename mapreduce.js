const companies = [{name:"applied cognetics",category:"industrial",state:1981,end:1983},
                    {name:"General",category:"technology",state:1915,end:1983},
                    {name:"amazon",category:"retail",state:1994,end:2003},
                    {name:"apple",category:"technology",state:1981,end:1989},
                    {name:"ford",category:"industrial",state:1908,end:2020},];


const ages =  [23,37,54,11,77,21,12,25,10,19,28];


let p = ages.map((age) => age*2);
console.log (p);

let m = ages.filter(age => age>50);
console.log (m);

let n = ages.reduce((sum,age) => sum+age,0);
console.log ("n:"+n);


let sage = ages.sort((a,b) => b-a);
console.log (sage);