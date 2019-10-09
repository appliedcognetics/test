
const cvid = inputData.canonicalvid;
const note = inputData.note;
const contactemail= inputData.contactemail.trim();
const hapikey ="4637cab8-0bd7-4991-a4ef-65bfdb6f4cf8";
const workflowid ="4183489"; // This is the workflowID for New Leads

const incomingEmail = {
    to_email:  inputData.to_email,  // name <email>
    from_email:  inputData.from_email,
    from_firstName_sender:  inputData.from_firstName_sender,
    from_lastName_sender :  inputData.from_lastName_sender,
    cc : inputData.cc,
    bcc :  inputData.bcc,
    subject :  inputData.subject,
    html:  inputData.html,
    text :inputData.text   
    }
    
// information about the lead needed to create the html email which will be send to the agent
const lead = {
  listingURL : inputData.listingURL ,
  date : ' ',//new Date(inputData.date),
  phone : inputData.contactphone,
  listing : inputData.listing,
  firstname : inputData.from_firstName_sender,
  lastname :inputData.from_lastName_sender,
  hubspotURL : `https://app.hubspot.com/contacts/5434324/contact/${inputData.canonicalvid}`,
  message : inputData.message ,
  email : inputData.contactemail,
  bcc :`5434324@bcc.hubspot.com`,
  subject :`${inputData.agentname} regarding ${inputData.listing}`,
  body : encodeURIComponent(`${inputData.agentname} from Stone Crest Realty, regarding ${inputData.listing} ${inputData.listingURL}`)
};     

console.log ('Date:'+lead.date);
console.log ('Now:'+Date.now());
// set the note get the vid ,if we already have the vid then use the exiting
// get the id of the client so call the function then 

function createAgentEmailBody (lead){
/* Create the LEAD Email body and subject for the email that will be end to the agent */ 

return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width" />
    <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]-->
</head>

<body bgcolor="#FFFFFF" width="100%" style="-webkit-font-smoothing: antialiased;
    background:rgb(248, 248, 248);-webkit-text-size-adjust:none; margin:0; padding:0;"><img
        src="https://hotpads.com/t/44ae147c-4e9a-11e9-b9fe-0e8ce35ec080" height="0" width="0"
        style="display:none;width:0;height:0;" />
    <table cellpadding="0" cellspacing="0" border="0" style="padding:0px;margin:0px;width:100%;">
        <tr>
            <td colspan="3" style="padding:0px;margin:0px;font-size:20px;height:20px;" height="20">&nbsp;</td>
        </tr>
        <tr>
            <td style="padding:0px;margin:0px;">&nbsp;</td>
            <td style="padding:0px;margin:0px;" width="600">
                <table border="0" cellPadding="0" cellSpacing="0" style="width:100%">
                    <tbody>
                        <tr>
                            <td style="border-top:3px solid #0074e4;border-left:1px solid #dddddd;border-right:1px
                                solid #dddddd;border-bottom:1px solid
                                #dddddd;color:#333;font-size:14px;font-family:Open-Sans,
                                Arial;line-height:18px;padding:0">
                                <div>
                                    <table border="0" cellPadding="0" cellSpacing="0"
                                        style="text-align:left;padding-bottom:20px;padding-left:20px;width:100% ">
                                        <tbody>
                                            <tr>
                                                <td  style="width:74px">
                                                        <img style="height:74px;width:200px ;background:rgb(0, 0, 0)"
                                                        src="https://stonecrestrealty.com/style/images/logo.png"/>
                                                        </a> </td> </tr> </tbody> </table> <table border="0"
                                                        cellPadding="0" cellSpacing="0"
                                                        style="margin:auto;padding:0 15px;color:#444">
                                        <tbody>
                                            <tr>
                                                <td style="padding:0 0 8px 0">
                                                    <div style="font-size:20px;line-height:32px;font-weight:bold">Listing:<a style="text-decoration:none;cursor:pointer;color:#0074E4" href="${lead.listingURL}">${lead.listing}</a> 
                                                    </div>  <!-- Listing URL-->
                                                </td>
                                            </tr> 
                                            <tr>
                                                    <td style="padding:0 0 8px 0">
                                                        <div style="font-size:20px;line-height:32px;font-weight:bold">Date:${lead.date}
                                                        </div>  <!-- Lead Date-->
                                                    </td>
                                                </tr> 
                                                <tr>
                                                        <td style="padding:0 0 8px 0">
                                                            <div style="font-size:20px;line-height:32px;font-weight:bold">Contact:<a style="text-decoration:none;cursor:pointer;color:#0074E4" href="${lead.hubspotURL}">${lead.firstname} ${lead.lastname}</a> 
                                                            </div>  <!-- CHANGE LISTING URL-->
                                                        </td>
                                                    </tr>
                                            <tr>
                                            <tr>
                                            <td style="padding:0 0 8px 0">
                                                <div style="font-size:20px;line-height:32px;font-weight:bold">Phone:${lead.phone}
                                                </div>  <!-- Lead Date-->
                                            </td>
                                        </tr> 
                                                <td>
                                                    <table border="0" cellPadding="0" cellSpacing="0">
                                                        <tbody>
                                                            <!--
                                                            <tr>
                                                                <td style="padding:0 0 32px 0">
                                                                    <div
                                                                        style="font-size:13px;line-height:20px;font-weight:normal;color:#666">
                                                                        FIRST NAME found your listing on:</div>
                                                                 </td>
                                                                <td style="padding:0 0 32px 0"><a
                                                                        style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold"
                                                                        href="https://www.trulia.com/rental/4009088375?utm_source=inquiry&amp;utm_medium=email&amp;utm_campaign=unified&amp;utm_content=undefined&amp;nid=44ae147c-4e9a-11e9-b9fe-0e8ce35ec080">
                                                                                                                                               <img
                                                                        style="vertical-align:middle;padding-left:8px;width:50%"
                                                                        src="https://nodes3cdn.hotpads.com/email-renderer/dist/lead-attribution-trulia-3M3SUhS.png"/>
                                                                        </a> </td> </tr> </tbody> </table> </td> </tr>
                                                                       <!-- CHANGE LINKS LISTING URL-->
                                                                        <tr>
                                                                <td style="width:100%;border-top:1px solid
                                                                    #f2f2f2;line-height:0"><span> </span></td>
                                                            </tr>
                                                            <!--
                                                            <tr>
                                                                <td style="padding:32px 0 16px 0">
                                                                    <div
                                                                        style="font-size:15px;line-height:24px;font-weight:normal">
                                                                        <span style="font-weight:bold">FIRST NAME
                                                                            LAST NAME</span> asked:</div>
                                                                </td>
                                                            </tr>
                                                            -->
                                                            <tr>
                                                                <td style="padding:8px 0 16px 0">
                                                                    <div
                                                                        style="font-size:20px;line-height:30px;font-weight:normal;color:#444">
                                                                        &quot;${lead.message} &quot;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <div>
                                                            <tr>
                                                                <td style="padding:8px
                                                                    0;text-align:center;margin:auto"><a
                                                                        style="width:100%;min-width:68px;margin:0px;padding:10px
                                                                        16px;cursor:pointer;text-align:center;text-decoration:none;white-space:normal;border-radius:4px;outline:none;font-size:16px;display:inline-block;box-sizing:border-box;color:#FFF;border:1px
                                                                        #0074E4
                                                                        solid;background:#0074E4;font-weight:500;max-width:288px"
                                                                        target="_blank"
                                                                    href="mailto:${lead.email}?bcc=${lead.bcc}&subject=${lead.subject}&body=${lead.body}">
                                                                        <span>Reply to E-Mail</span> </a> </td> </tr> <tr>
                                                                <td style="padding:8px
                                                                    0;text-align:center;margin:auto"><a
                                                                        style="width:100%;min-width:68px;margin:0px;padding:10px
                                                                        16px;cursor:pointer;text-align:center;text-decoration:none;white-space:normal;border-radius:4px;outline:none;font-size:16px;display:inline-block;box-sizing:border-box;color:#FFF;border:1px
                                                                        #0074E4
                                                                        solid;background:#0074E4;font-weight:500;max-width:288px"
                                                                        target="_blank"
                                                                        href="${lead.hubspotURL}">
                                                                        <span>Open in HubSpot</span> </a> </td> </tr> <tr>
                                                                <td style="padding:12px 0;line-height:0">
                                                                    <span> </span></td>
                                                            </tr>
                                </div>
                        </tr>
                        <tr>
               
        </tr>
        </tr>
        <tr>
            <td style="width:100%;border-top:1px solid #f2f2f2;line-height:0;padding:4px 0"><span> </span></td>
        </tr>
                    </tbody> </table> <div>
                <table border="0" cellPadding="0" cellSpacing="0" style="font-size:11px" width="100%">
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <table border="0" cellPadding="0" cellSpacing="0"
                                    style="background-color:#333;height:30px;vertical-align:middle" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="text-align:center;color:#CDD1D4;vertical-align:middle;padding:8px
                                                0;font-size:11px">Stone Crest Inc. Lead Generation
                                           </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
    </td>
    <td style="padding:0px;margin:0px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" style="padding:0px;margin:0px;font-size:20px;height:20px;" height="20">&nbsp;</td>
    </tr>
    </table>
</body>
</html>`;
}

function assignWorkFlow (email,workflowid)
{
return fetch(`https://api.hubapi.com/automation/v2/workflows/${workflowid}/enrollments/contacts/${email}?hapikey=${hapikey}`, { method: 'POST', body: 'a=1' })
    .then(res => res) // expecting no response
}

 function  findContactvid (email) {
// returns the promise of getting the vid for the given email
   return  fetch (`https://api.hubapi.com/contacts/v1/contact/email/${email}/profile?hapikey=${hapikey}&property=vid&propertyMode=value_only`).then(response => response.json())
  .then(data => {console.log ("processing"+data.vid);return (data.vid) } )
  .catch(error => {console.error(error)})
}

function performPost(url = ``,data) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
           "Content-Type": "application/json",
          //      // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
};
 
async function insertNote (data,notetext ) {
  // build the note object
const noteobj =
{
    "engagement": {
        "active": true,
        "ownerId": 1,
        "type": "NOTE",
        "timestamp": Date.now(),
    },
    "associations": {
        "contactIds": [data],
        "companyIds": [ ],
        "dealIds": [ ],
        "ownerIds": [ ]
    },
   
    "metadata": {
        "body": notetext
    }
}
return performPost(`https://api.hubapi.com/engagements/v1/engagements?hapikey=${hapikey}`, noteobj)
.then(data => {console.log("inserting note"+data); return (data) } )
.catch(error => {console.error(error); return{}})
}

async function insertEmail (data,incomingEmail){
  console.log ("Logging in here");
  const emailobj =
{
    "engagement": {
        "active": true,
        "ownerId": 1,
        "type": "EMAIL",
        "timestamp": Date.now(),
    },
    "associations": {
        "contactIds": [data],
        "companyIds": [ ],
        "dealIds": [ ],
        "ownerIds": [ ]
    },
   
"metadata": {
    "from": {
    // The details of the sender
      "email": incomingEmail.to_email,
      // String; the email address of the sender
      "firstName": incomingEmail.firstName ,
      // String; The first name of the sender
      "lastName": incomingEmail.lastName
      // String; The last name of the sender
    },
    "to": [
    // The details of the recipient
      {
        "email": incomingEmail.to_email , //"contact name <test@test.com>"
        // String; the email address of the recipient 
      }
         
    ],
    "cc": [],
    // A list of details for anyone cc'd on the email.
    "bcc": [],
    // A list of details for anyone bcc'd on the email.
    "subject": incomingEmail.subject ,//"This is the subject of the email",
    // String; The subject of the email
    "html":  incomingEmail.html,
    // String; The body of the HTML email
    "text": incomingEmail.text 
    // String; The body of the text-only email.
}

}
return performPost(`https://api.hubapi.com/engagements/v1/engagements?hapikey=${hapikey}`, emailobj)
.then(data => {return (data) } )
.catch(error => {console.error(error); return{}})

}


if (!cvid) {
var op = await findContactvid(contactemail).then(data => {insertNote(data,note); insertEmail (data,incomingEmail);return(data)});
console.log ("done with email insert")
}
else 
// otherwise insert a note
{var op= await insertNote (cvid,note).then(() => insertEmail (cvid,incomingEmail) )};

//assign to workflow  loop through workflowid's 
//var as = await assignWorkFlow ( contactemail,workflowid)
//assign to workflow  loop through workflowid's 
var as = await assignWorkFlow ( contactemail,workflowid)
// Get the HTML Body to be used later
var htmlBody = createAgentEmailBody (lead);

output = {id:1,htmlBody:htmlBody, op:op, as:as};