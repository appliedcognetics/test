fetch = require("node-fetch");
var out = {};

async function zap (output) {
var inputData = { date :'1/1/1970',cc:`cc@gmail.com`, body:`Rachel has sent you a message:
I would like to set a time to view this apartment. And please send any more info you have on the listing. Thanks.
Reply now [ mailto:reply-9faxh5ghvz03s4iikd1msq@app.nakedapartments.com?subject=Re: Your Message about a Naked Apartments Listing ]
 
Listing:
515 West 122, New York, NY 10027 #64 [ https://www.nakedapartments.com/rental/17436771 ]
$1,999 | studio | 1.0 bath
Morningside Heights 
Pets Allowed
Renter name:
Rachel
Renter email:
rachel.m.kenney@gmail.com
Phone:
(216) 408-5862
Max rent:
$2,000.0
Roommates:
0 roommates
Pets:
No
Move date:
July 1, 2015 
Contact Us [ mailto:info@nakedapartments.com ]
Privacy Policy [ https://www.zillow.com/corp/Privacy.htm ] • Terms of Service [ https://www.zillow.com/corp/Terms.htm ]
130 Fifth Avenue New York, NY 10011
Made in NYC`};
//to:me from:noreply@streeteasy.com Search String for street easy
const pluscodekey ="AIzaSyBqeAMkHMiXKA-3QiBKqjryi3X9cof2FZM";
const emailregex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;
const phoneregex =/(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i;

async function  getpluscode (listing) {
  // returns the promise of getting the vid for the given email
  //console.log ("url"+(`https://plus.codes/api/?address=${encodeURIComponent(listing)}&key=${pluscodekey}`));
     return  fetch (`https://plus.codes/api/?address=${encodeURIComponent(listing)}&key=${pluscodekey}`).then(response => response.json())
    .then(data => {return (data) } )
    .catch(error => {console.error(error)})
  }

function replacer (match,capture,offset,wholestring) 
{return String.fromCharCode(parseInt(capture,16)) };

   function rp2 (match,capture,offset,wholestring) 
{  // Do different operations for different tags

// this is for an alt tage in an image     
// if  (capture.replace(/^img[^>]+alt=3D\W([\w]+)\W>/g,'[$1]')) {return "["+capture+"]"}
if (capture.match (/alt=3D|alt=\W([\w]+)\W/)) { return "["+capture.match (/alt=3D|alt=\W([\w]+)\W/)[1]+"]";}  ///^img[^>]+alt=3D\W([\w]+)\W/
// preserve any anchor tags
if (capture.match (/^a[^>]+(https?:[^"]+)\W/)) { return "["+capture.match (/^a[^>]+(https?:[^"]+)\W/)[1]+"]";} 
if (capture.match (/^a[^>]+(mailto?:[^"]+)\W/)) { return "["+capture.match (/^a[^>]+(mailto?:[^"]+)\W/)[1]+"]";} 
// preserve any emails embedded in <> 
if (capture.match (/^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/)) { return "["+capture+"]" } 
// return a lf for a td for zillow might process differently for other providers
if (capture.match (/^tr/)) { return "\n" } 
//End Blocks with a delimiter "###"
if (capture.match (/^table/)) { return "###" } 
//if (capture.match (/^br/)) { return "###" } 
// otherwise return "" 
return "";
};

var f = {};

f.body=inputData.body.replace(/=\s\n/g,"").replace(/<head[\W\w]*<\/head>/,"").replace(/<style[^<]*<\/style>/ig,"").replace(/\<([^>]+)>/g,rp2).replace(/\n?=C2=A0\n?/g," ").replace(/=([A-F0-9]{2})/g," ");
//      .replace(/^[\w\W\n]*<html/i).replace(/<style[^<]*<\/style>/ig,"")
 const n = (f.body.match(/sent\syou\sa\smessage\:([\w\W]+)(?:Reply\snow)/i) || [])[1]||"-";
// console.log (f.body);
 const l = (f.body.match(/listing\:\n*([^\[]+)\[([^\]]+)/i) || []) ;//  [1]||"-";
 const note = (n ? n.replace(/\n.+/i," "): n).trim(); // remove the 1st line
 const name = (f.body.match(/renter\sname\:[\s\n]*(.*)/i) || [])[1]||"-";
 const em = (f.body.match(/renter\semail\:[\s\n]*(.*)/i) || [])[1]||"-";
 const phone = ((f.body.match(/phone:[\s\n]*(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i) || [])[1]||"-").replace(/[^\d]/g,'') ;
 const moveindate = (f.body.match(/move\sdate\:[\s\n]*(.*)/i) || [])[1]||"-";

f.source = "nakedapartments"
f.note =   n.trim();
f.listing = l[1]||"-"  ;
f.listingurl = l[2]||"-";
f.email =  em ? em.trim() : "-";  
f.name  =  name ? name.trim() : "-" ;  
f.from  =  inputData.from; 
f.cc    =  inputData.cc;  
f.date  =  inputData.date;  
f.phone =  phone ;
f.moveindate = moveindate || "-";
/// ************* LOOK FOR A PHONE NUMBER IN THE NOTE  
const altphone=(f.note.match(phoneregex)||[])[1];
f.phone = altphone && !f.phone ? altphone : f.phone;                                
                              
 
// *********** Turn this into a function
// find and name and split it into 1st and last name
if (!emailregex.test(f.name)) {
  //if the f.name is not an email
  // try to split the fname on spaces 
const namesplit = f.name.trim().split(/\s+/);
// Logger.log ("\nns:"+namesplit);
if (namesplit.length > 1 ) { f.firstname = namesplit[0]; 
                            f.lastname =namesplit.pop();}
  else { f.firstname =f.name , f.lastname = "-";}
}
// try to find the name in the email address
//  Logger.log ("\nf.name:"+f.name);
//  Logger.log ("\nf.lastname:"+f.lastname);
//   Logger.log ("\nf.firstname:"+f.firstname);
// *********** Turn this into a function
  if (emailregex.test (f.name)){
    // maybe there is a name in the Email Address
  const esplit = (f.name.split (/@/)[0].split('.'));
    if (esplit.length > 0) {f.name = esplit.join(" ");
                            f.firstname = esplit[0]; 
                            f.lastname =esplit.pop();
     };
  };

  const pluscode =  await getpluscode(f.listing);

  f.pluscode = pluscode? pluscode.plus_code.global_code :"missing";
  

  const agent = (function (cc) {
    switch (cc){
    case 'chris@coulthrust.com' : return {sms :'+13473709408',hubspotid :'35013679'}  
    case 'david@stonecrestrealty.com' : return {sms :'+16173080839',hubspotid:'35029194'}
    case 'caroline@stonecrestrealty.com':return{sms:'+13473709408',hubspotid:'35029193'}
    case 'tzur@stonecrestrealty.com' : return {sms:'+13476851115',hubspotid:'35032776'}
    case 'f.z@stonecrestrealty.com' : return {sms:'+13473709408',hubspotid:'35028612'}
    default : return {sms:'+13473709408',hubspotid:'35013679'};
    }})(inputData.cc);

  f.smsnote = (f.name+':'+f.email+":"+f.phone+":"+f.listing+":"+f.note).trim().slice(0,160);    

 return  {source: f.source,phone : f.phone,name : f.name,email :f.email,note:f.note,listing:f.listing,listingurl:f.listingurl,firstname :f.firstname,lastname : f.lastname , sms :agent.sms , hubspotid:agent.hubspotid,smsnote: f.smsnote,
pluscode : f.pluscode};
  
;
  // get the pluscode

//https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA



//var xx = fetch (`https://first-project-baa3e.firebaseio.com/txt.json?print=pretty`,options).then((response) => console.log("xxx:"+JSON.stringify(response)));
  
  //.log ("URI"+encodeURIComponent(f.listing));
  //console.log ("listing:"+f.listing);
 
 //console.log ("op:"+JSON.stringify(f.pluscode));
 // Use the plus_code.global_code 

 }

 console.log ( Promise.all([zap()]).then(output => console.log(output[0]))) ; 
 


// Get the plus code, match the plus code for the owning sales person, get any messaging or alerts for the apartment
// Send the text message or email message for the apartment
// Design a chain of messages of the apartment
// Analyze all of the responses from the sales person , responses for particular queries
// Send a message to John about this idea of analyzing responses




// get the best street address and the local_code 
// await for the 
//console.log ("ppp"+pluscodekey);
 // console.log("op"+op);
 /*
  console.log (f.listingurl);
  console.log (f.cc);
  console.log (f.phone);
  console.log (f.name);
  console.log (f.listing);
  console.log (f.firstname);
  console.log (f.lastname);
  console.log (f.email);
  console.log (f.note);
  console.log (f.date);
  console.log (agent.sms);
  console.log (agent.hubspotid);
  console.log(f.creditscore );
  console.log(f.income );
  console.log(f.jobtitle );
  console.log(f.employer);
  console.log(f.employedsince);
  console.log(f.pastjobs );
  console.log(f.reasonformoving );
  console.log(f.employer);
  console.log(f.pets );
  console.log(f.leaselength );
  console.log(f.parking );
  console.log(f.employer );
  console.log(f.desiredneighborhood );
  console.log(f.smoker );
*/
//  console.log (f.body);


/*
Function to get the plusCode
function plusCode(address) {
  
  if (!address) {return ('no address')}
 
 var url = 'https://plus.codes/api/?'
   + 'address='+encodeURIComponent(address) 
   + '&key=AIzaSyBqeAMkHMiXKA-3QiBKqjryi3X9cof2FZM';
  
var response =UrlFetchApp.fetch(url);
 // use the global code because that value is unique at least
console.log(JSON.parse(response).plus_code.global_code); 
 return response ?  JSON.parse(response).plus_code.global_code : "Missing"
}
*/



