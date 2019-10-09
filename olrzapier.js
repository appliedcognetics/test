
fetch = require("node-fetch");
var out = {};
async function zap (output) {
var inputData = { date :'1/1/1970',cc:`cc@gmail.com`, body:`Requesting More Information For 200 West 90th Street, Apt. 3-G
Address: 200 West 90th Street, Apt. 3-G
Neighborhood:
City, State, Zip Code: , ,
Type Of Listing: Rental
OLR.com Web ID: 1677270
From: Karen Stone
Company: Halstead Property
Work: 212-381-3323
Mobile: 917-858-1261
Email: kstone@halstead.com
Notes: Hello,I was wondering if we could access this apt tomorrow, Thursday, at around 11:30-1. My client is Keith Sibley. They have a 35lb dog and are looking for a 1 year lease with option to renew. They need to start the lease around April 1 or so. Please advise if this showing can be arranged.Thanks!
Click here to view listing on OLR.com`};
//to:me from:noreply@streeteasy.com Search String for street easy

/* */
const pluscodekey ="AIzaSyBqeAMkHMiXKA-3QiBKqjryi3X9cof2FZM";
const emailregex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;
const phoneregex =/(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i;


function  getpluscode (listing) {
  // returns the promise of getting the vid for the given email
  //console.log ("url"+(`https://plus.codes/api/?address=${encodeURIComponent(listing)}&key=${pluscodekey}`));
     return  fetch (`https://plus.codes/api/?address=${encodeURIComponent(listing)}&key=${pluscodekey}`).then(response => response.json())
    .then(data => ( !(data.plus_code ==="undefined") ? data.plus_code.global_code :"missing")  )
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
if (capture.match (/br/)) { return "\n" }  // for Columbia Leads 
//End Blocks with a delimiter "###"
if (capture.match (/^table/)) { return "###" } 
//if (capture.match (/^br/)) { return "###" } 
// otherwise return "" 
return "";
};

var f = {};

f.body=inputData.body.replace(/=\s\n/g,"").replace(/<head[\W\w]*<\/head>/,"").replace(/<style[^<]*<\/style>/ig,"").replace(/\<([^>]+)>/g,rp2).replace(/\n?=C2=A0\n?/g," ").replace(/=([A-F0-9]{2})/g," ");
 const note = (f.body.match(/notes\:[\s\n]*(.+)/i) || [])[1]||"-";
 const l = (f.body.match(/address\:[\s\n]*(.+)/i) || [])  [1]||"-";
 console.log(f.body);
 console.log (l);
 const company = (f.body.match(/company\:[\s\n]*(.*)/i) || [])[1]||"-";
 const name = (f.body.match(/from\:[\s\n]*(.*)/i) || [])[1]||"-";
 const em = (f.body.match(/email\:[\s\n]*([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i) || [])[1]||"-";
 const mobilephone = ((f.body.match(/mobile:[\s\n]*(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i) || [])[1]||"-").replace(/[^\d]/g,'') ;
 const workphone = ((f.body.match(/work:[\s\n]*(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i) || [])[1]||"-").replace(/[^\d]/g,'') ;
 const moveindate = "";
 const olrwebid =  (f.body.match(/(olr\.com\sweb\sid\:[\s\n]*.*)/i) || [])[1]||"-";
 console.log ("olr:"+olrwebid);
f.source = "OLR";
f.leadtype = "broker";
f.company= company
f.note =   note.trim();
f.listing = l||"-"  ;
f.listingurl = olrwebid;
f.email =  em ? em.trim() : "-";  
f.name  =  name ? name.trim() : "-" ;  
f.from  =  inputData.from; 
f.cc    =  inputData.cc;  
f.date  =  inputData.date;  
f.mobilephone =  mobilephone ;
f.workphone = workphone;
f.moveindate = moveindate || "-";
/// ************* LOOK FOR A PHONE NUMBER IN THE NOTE  
const altphone=(f.note.match(phoneregex)||[])[1];
f.phone = altphone && !f.phone ? altphone : f.phone;                                
f.pluscode = await getpluscode(f.listing);
                             
 
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

   f.smsnote = (f.name+':'+f.email+":"+f.mobilephone+":"+f.listing+":"+f.note).trim().slice(0,160);    

 return  {leadsource: f.source ,mobilephone : f.mobilephone, workphone:f.workphone,name : f.name,email :f.email,note:f.note,listing:f.listing,
    listingurl:f.listingurl,firstname :f.firstname,lastname : f.lastname ,  moveindate:f.moveindate, 
    smsnote: f.smsnote,
pluscode : f.pluscode , company:f.company 
 }
};

 Promise.all([zap()]).then(output => console.log(JSON.stringify(output[0]))) ; 
 


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
