//var SEARCH_QUERY = "label:spam is:read";
//var SEARCH_QUERY = "to:me from:*zillow.com newer_than:1y "; // zillow query ok 
var SEARCH_QUERY = "to:me subject:streeteasy inquiry from   newer_than:5d  "; // street easy 


// develop a search query for each type of email which will be processed by a designated technique
// come up with a parser for each email designation type
// develop a generic parser that will process different types of email forms



// Create an arrayof search objects

var SEARCH =[
  {search: 
   {
    name:"name of search",
    source: { type:"GmailInbox", 
              GmailInbox: {inboxName :"",
                          inboxCredentials :"", // username and password
                          query: ["to:me from:*zillow.com newer_than:1y -no-reply"], 
                          queryDescription : "Zillow Inbox without no reply", 
                          queryName :"Query Name here"}
            },
   destination : { type: "SpreadSheet" ,
                   spreadsheetName :"Sheet1",
                   spreadsheetID :"ID",
                   name:"Destination object here, spreadsheet, email , message queue for processing,etc"    
                 }
   }
  },
  {search: 
   {
    name:"name of search 2",
    source: { type:"GmailInbox", 
              GmailInbox: {inboxName :"",
                          inboxCredentials :"", // username and password
                          query: ["to:me from:*zillow.com newer_than:1d -no-reply"], 
                          queryDescription : "Zillow Inbox without no reply", 
                          queryName :"Query Name here"}
            },
   destination : { type: "SpreadSheet" ,
                   spreadsheetName :"Sheet1",
                   spreadsheetID :"ID",
                   name:"Destination object here, spreadsheet, email , message queue for processing,etc"    
                 }
   }
  }
  ];



  
// try to change the label based on the content

//if there is a forwarded message then start from the forwarded messages

/*
   Create a function to process each type of lead based on some kind of lead search criteria
    
     Create an object that contains the search criteria , the processing routine , destination for the lead, some thing that posts to an audit trail for reporting on lead consumption

*/

function getEmails_(q) {
  var emails = [];
    //email regex that works
  const emailregex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;
  // phone regex that works
  const phoneRegex =/(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i
 //Regex that to find the text forwarded message , the g tag is needed so that lastIndex works properly
  const forwardedMsgRegex = /\s(forwarded)\s(message)\s-+/ig;
  const urlRegex =/[A-Za-z]+:\/\/[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_:%&;\?\#\/.=]+/g;
  const addressRegex=  /(?:information\s+about|to\s+tour|inquiry\s+for|contact\s+for|inquiry\s+for|tour\srequest\s+for|application\s+for|request\s+for|tour\s+for|question\s+about)\W(.*)$/i ;
 
  // label is an object not a string
   var threads = GmailApp.search(q);
    for (var i in threads) {
     // Change the label of the thread here figure out some logic here 
     //  threads[i].addLabel(label);    
      var msgs = threads[i].getMessages();
      //just do the #1st message
      j= 0;
            
          // if the message is forwarded then process the message differently 
          //   Worry about this later we will process directly out of the email box
          // create a different object that will support methods and stuff to support multiple email addresses
      
     // Return an object if you want the values pushed into the array, return a scalar if you want the key to create
     // a new element

      var e = {  "channel": "email",
                 "campaign": "", // put the address here 
                 "source": "", //source of the lead domain of inbound email
                 "type":"",        // this is the type of request that is received can be a tour,information,or unknown 
                 "subject":"",
                 "body":"",
                 "from": "",
                 "name" : "",         // name of the lead ;
                 "note" : "",
                 "email": "",
                 "phone": "",
                 "aboutme": [],
                 "listing": "",
                 "listingurl":"",
                };
   
      e.subject = msgs[j].getSubject();
      e.from = msgs[j].getFrom().trim();
      e.to = msgs[j].getTo();
      e.threadID = threads[i].getId();
      //clean the body by removing the style blocks and tags,trimming and removing all of the extra \n characters
      // There are some cases where
    
       var parseObject = { 
                           streeteasy:{ body: function (f,body,plainbody) {f.body=body; 
                                                        const d = f.body.match (/^date:\s+([,+\([A-Za-z\s[0-9:]*\))/im);   
                                                        const rt = f.body.match (/^reply-to:\s*([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/im); 
                                                        const cc = f.body.match (/^cc:\s+([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/im); 
                                                        const from =  f.body.match (/^from:[\s\w"]+\<?([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)>/im); 
                                     // Process the email address     The reply-to email address is the most reliable
                                           f.email =  (rt && !(typeof rt[1] ==="undefined")) ? rt[1]:" ";  
                                           f.from  =  (from && !(typeof from[1] ==="undefined")) ? from[1]:" "; 
                                           f.cc    =  (cc && !(typeof cc[1] ==="undefined")) ? cc[1]:" ";  
                                           f.date  =  (d && !(typeof d[1] ==="undefined")) ? d[1]:" ";  
                                       //look for an alternate name in the body             
                                            const an = f.subject.match(/streeteasy\s*inquiry\s*from\s*(.+)/i) 
                                                    // check is the alternate is an email address in which case we will not assign it
                                                   if (an && !(typeof an[1] === 'undefined' && !emailregex.test(an))) { f.alternatename=an[1]}
                                         f.strippedbody= f.body.replace(/^[\w\W\n]*<html/i).replace(/<style[^<]*<\/style>|<[^>]*>/ig,"").trim().replace(/[\n\s]{2,}/ig,"\n").replace(/=20\n?|=A9|=B7|=C2|=A0|=\n|=E2|=80|=99/ig,"");
                                         // from[1] , email[2] , phone[3] , note [4]
                                                    //    Logger.log(f.strippedbody);
                                         arr =f.strippedbody.match(/(from:.*)\n*(email:.*\n?)?(phone:.*\n?)?([\w\W]+)(?:REPLY\s?NOW)/i);  
                                         f.note = (arr && !(typeof arr[4] ==="undefined")) ? arr[4].replace(/=20|=C2|=A0|=\n|=E2|=80|=99/ig,"").trim(): "";
                                                       
                                         // does the array and the element exist if yes then operate on it
                                        // Process Phone if there is phone number in the "note field then use it, some times this happens
                                         if (arr && !(typeof arr[3] ==="undefined")){
                                           const p=arr[3].match(phoneRegex);
                                          f.phone = (p && !(typeof p[1] ==="undefined")) ? p[1]:" ";  
                                         } else
                                         { if (phoneRegex.test(f.note)) {f.phone=f.note.match(phoneRegex)[1] } };
                                        
                                          
                                              // if the name is a email and the email is undefined then assign email the value of the "name"
                                              // check if there is an email in the name and there was a name in the subject line then use the name in the subject line
                                         if (arr && !(typeof arr[1] ==="undefined")){
                                           f.name =arr[1].replace (/from:\s*/i,"");
                                           // if the fname is an email address and there is a non- email address nane in the alternate name derived from subject then use that
                                           f.name =  !(typeof f.alternatename === 'undefined') && emailregex.test(f.name) ? f.name= f.alternatename :f.name;
                                         }  // if there is no first name then assign the name to the email or the email before the @
                                           else { f.name=f.email}
                                         
                                         const l = f.strippedbody.match(/You\s?have\s?a\s?new\s?inquiry\s?for\s?([^\n]*)/i);
                                         // this is the URL
                                           const url = f.body.match(/streeteasy\s+url\:[\s\n]*(.*)/i);
                                            
                                         if (url && !(typeof url[1] === 'undefined') && l && !(typeof l[1] === 'undefined')) 
                                          { f.listing=l[1] ;
                                           f.listingurl= url[1]} ;
                                        
                                     //    };     
                                         
                                        },      
                     
                      },
         
         // ********* Redo the zillow parsing here  and complete the other parsing routines
        zillow : { 
                  from : function (f,from) {
                                            f.from = from;
                                            const email = f.from.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i);
                                            if (email && !(typeof email[1]==='undefined')) {f.email=email[1]}
                  
                  },
          // search for the address in the subject line of the zillow message
                  subject : function (f,subject) { f.subject = subject;
                                const sub=f.subject.match(/(?:(information\s+about)|(to\s+tour)|(inquiry\s+for)|(contact\s+for)|(tour\srequest\s+for)|(application\s+for)|(request\s+for)|(tour\s+for)|(question\s+about))([.\-\s\w\\#\,\W]*)/i);
                                                  if (sub && !(typeof sub[1] === 'undefined')) {f.listing =sub[1]};
                  },
                  body : function () {     
                 },
                     } 
          
                 }             
  
      // Try stripping and assigning the body to e
       // Always process the subject line first
  
      parseObject["streeteasy"].body(e,msgs[j].getRawContent() );
      var col1 = e.phone || "000-000-0000"; 
      var col2 = e.email; 
      var col3= e.name ; 
      var col4 = e.note 
      var col5 = e.from;  
      var col6 = e.listingurl;
      var col7 = e.listing; 
      var col8 = e.cc;
      var col9 = e.date;
      var col10= e.alternatename;
      var col11= e.subject;
      var col12 = e.threadID
      
       
      
    //  Logger.log ("******** note:"+e.note);
     // Logger.log ("******** phone:"+e.phone);
    //  Logger.log ("******** email:"+e.email);
    //  Logger.log ("******** name:"+e.name);
    //  Logger.log ("******** alternatename:"+e.alternatename);
    //  Logger.log ("******** listing:"+ !(typeof e.listing==='undefined') ? e.listing[0]: "missing");
      
      // Extract any valuable information out of the subject line
   // var parseSubject = {"zillow":{"row": [{"r": " r=s.match(/(?:(information\\s+about)|(to\\s+tour)|(inquiry\\s+for)|(contact\\s+for)|(tour\\srequest\\s+for)|(application\\s+for)|(request\\s+for)|(tour\\s+for)|(question\\s+about))([.\\-\\s\\w\\#\\,\\W]*)/i);if (!r) {r=[s];}; return r.pop()","key":"address"}]},
   //                   } ;

 var parseBody =
      { "zillow":{ 
"row":[ // these key stay under the aboutme key so that the items are arrayed under the element aboutme
{"r":"r=b.match(/income\\s*([\$.\\w\040]*)/i); if (!r) {r=[\"-\"];} return { \"income\": r.pop() }","key":"aboutme" },
{"r":"r=b.match(/pets\\s*([.\\w\040]*)/i); if (!r) {r=[\"-\"];} return { \"pets\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/past\\s*jobs\\s*([.\\w\040]*)/i); if (!r) {r=[\"-\"];} return { \"pastjobsobs\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/desired\\s*neighborhoods\\s*([.\\w\040]*)/i); if (!r) {r=[\"-\"];} return { \"desiredneighborhood\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/credit\\s*score([\\w\\040]*)/i); if (!r) {r=[\"-\"];} return { \"creditscore\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/job\\s*title\\s*([.\\w\040]*)/i); if (!r) {r=[\"-\"];} return { \"jobtitle\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/reason\\s*for\\s*moving\\s*([.\\w\\040]*)/i); if (!r) {r=[\"-\"];} return { \"reasonformoving\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/employer\\s*([.\\w\040]*)/i); if (!r) {r=[\"-\"];} return { \"employer\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/employed\\s*since\\s*([.\\w\\040\,]*)/i); if (!r) {r=[\"-\"];} return { \"employedsince\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/lease\\s*length([.\\w\\040]*)/i); if (!r) {r=[\"-\"];} return { \"leaselength\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/(\\(?[0-9]{3}\\)?[-.\\s]?[0-9]{3}[-.\\s]?[0-9]{4})/i); if (!r) {r=[\"000-000-0000\"];} return r.pop()" ,"key":"phone"},
{"r":"r=b.match(/replying\\s*directly\\s*to\\s*this\\s*email\\W+([\\-\\,\\.\\w\\s]+)/i); if (!r) {r=[\"missing\"];} return { \"name\": r.pop() }","key":"aboutme"},
{"r":"r=b.match(/\\[image\:\\smsg\\]\\s+\\n([\\w\\W]*)(?:about\\s+me)/i); if (!r) {r=b.match(/\\[image\:\\smsg\\]\\s+\\n([\\w\\W]*)(?:your\\s+listing)/i);} if (!r) {r=[\"-\"];} return r.pop()","key":"message" }
  ,{"r":"r=b.match(/your\\s+listing[\\s+\\n\\<]+([A-Za-z]+:\\/\\/[A-Za-z0-9\\-_]+\\.[A-Za-z0-9\\-_:%&;\\?\\#\\/.=]+)[\\W]+([\\w\\s.\\#\\,\\$]+)/i);if (r === null ){r=[\"missing\",\"missing\",\"missing\"];} return { \"listing\": r[2] ,\"url\": r[1]}","key":"listing"},
]}
 }; 
   
 
  emails.push([col1,col2,col3,col4,col5,col6,col7,col8,col9,col10,col11]);
   
}
   return emails;
}

function appendData_(sheet, array2d) {
    sheet.getRange(sheet.getLastRow() + 1, 1, array2d.length, array2d[0].length).setValues(array2d);
}

function saveEmails() {
  //SEARCH_QUERY);
   var array2d = getEmails_(SEARCH_QUERY);

  
   if (array2d) {
       appendData_(SpreadsheetApp.getActiveSheet(), array2d);
   }
}