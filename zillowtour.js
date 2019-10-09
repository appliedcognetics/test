fetch = require("node-fetch");

async function zap () {
var inputData ={
    raw:`
    96     New tour request for 225 Central Park N #6, Manhattan, NY, 10026
    Madeline found your listing on:
    Madeline Marquis requested a tour and is available:
    Tomorrow
    afternoon or evening
    Mar 25
    morning
    "I am available to tour:
    Tomorrow - afternoon or evening
    Mar 25 - morning"
    Reply directly to this email or
    SMS text   Call
    Other helpful links
    Found a tenant and no longer wish to get inquiries for this property? Deactivate this listing
    Is this inquiry spam? Report spam
    Know your fair housing obligations under Zillow's Respectful Renting Pledge
    Have questions or need help? Find answers on our FAQ page , or contact us .
    © 2006-2019 Zillow, Inc. 1301 Second Avenue, Floor 31, Seattle, WA 98101  Privacy 
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width" /><!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> </head><body bgcolor="#FFFFFF" width="100%" style="-webkit-font-smoothing: antialiased; background:#FFFFFF;-webkit-text-size-adjust:none; margin:0; padding:0;"><img src="https://hotpads.com/t/4428283a-4de6-11e9-b9fe-0e8ce35ec080" height="0" width="0" style="display:none;width:0;height:0;" /><table cellpadding="0" cellspacing="0" border="0" style="padding:0px;margin:0px;width:100%;"><tr><td colspan="3" style="padding:0px;margin:0px;font-size:20px;height:20px;" height="20">&nbsp;</td></tr><tr><td style="padding:0px;margin:0px;">&nbsp;</td><td style="padding:0px;margin:0px;" width="600"> <table border="0" cellPadding="0" cellSpacing="0" style="width:100%"><tbody><tr><td style="border-top:3px solid #0074e4;border-left:1px solid #dddddd;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;color:#333;font-size:14px;font-family:Open-Sans, Arial;line-height:18px;padding:0"><div><table border="0" cellPadding="0" cellSpacing="0" style="text-align:left;padding-bottom:20px;padding-left:20px;width:100%"><tbody><tr><td style="width:74px"><a style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold" href="https://www.zillow.com?ref=undefined&amp;uvl=undefined&amp;utm_source=inquiry&amp;utm_medium=email&amp;utm_campaign=unified_email-renderer&amp;nid=4428283a-4de6-11e9-b9fe-0e8ce35ec080"><img style="height:74px;width:74px" src="https://www.zillowstatic.com/static-email/LATEST/static-email/images/logo-desktop-2x.png"/></a></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" style="margin:auto;padding:0 15px;color:#444"><tbody><tr><td style="padding:0 0 8px 0"><div style="font-size:20px;line-height:32px;font-weight:bold">New tour request for <a style="text-decoration:none;cursor:pointer;color:#0074E4" href="https://zillow.com/rental-manager/properties/2675006_StreetEasy/listing">225 Central Park N #6, Manhattan, NY, 10026</a></div></td></tr><tr><td><table border="0" cellPadding="0" cellSpacing="0"><tbody><tr><td style="padding:0 0 32px 0"><div style="font-size:13px;line-height:20px;font-weight:normal;color:#666">Madeline found your listing on:</div></td><td style="padding:0 0 32px 0"><a style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold" href="https://www.zillow.com/homedetails/2095049537_zpid/?utm_source=inquiry&amp;utm_medium=email&amp;utm_campaign=unified&amp;utm_content=undefined&amp;nid=4428283a-4de6-11e9-b9fe-0e8ce35ec080"><img style="vertical-align:middle;padding-left:8px;width:50%" src="https://nodes3cdn.hotpads.com/email-renderer/dist/lead-attribution-zillow-8TDnDhc.png"/></a></td></tr></tbody></table></td></tr><tr><td style="width:100%;border-top:1px solid #f2f2f2;line-height:0"><span> </span></td></tr><tr><td style="padding:32px 0 16px 0"><div style="font-size:15px;line-height:24px;font-weight:normal"><span style="font-weight:bold">Madeline Marquis</span> requested a tour and is available:</div></td></tr><tr><tr><tr><td><table border="0" cellPadding="0" cellSpacing="0"><tbody><tr><td><img style="padding-right:16px;width:16px;vertical-align:middle" src="https://nodes3cdn.hotpads.com/email-renderer/dist/calendar-zillow-26ShC3m.png"/></td><td><div style="font-size:15px;line-height:24px;font-weight:bold">Tomorrow</div></td></tr></tbody></table></td></tr><tr><td><table border="0" cellPadding="0" cellSpacing="0"><tbody><tr><td style="font-size:14px;padding-left:34px"><div style="font-size:13px;line-height:20px;font-weight:normal">afternoon or evening</div></td></tr></tbody></table></td></tr><tr><td style="padding:8px 0"></td></tr></tr><tr><tr><td><table border="0" cellPadding="0" cellSpacing="0"><tbody><tr><td><img style="padding-right:16px;width:16px;vertical-align:middle" src="https://nodes3cdn.hotpads.com/email-renderer/dist/calendar-zillow-26ShC3m.png"/></td><td><div style="font-size:15px;line-height:24px;font-weight:bold">Mar 25</div></td></tr></tbody></table></td></tr><tr><td><table border="0" cellPadding="0" cellSpacing="0"><tbody><tr><td style="font-size:14px;padding-left:34px"><div style="font-size:13px;line-height:20px;font-weight:normal">morning</div></td></tr></tbody></table></td></tr><tr><td style="padding:8px 0"></td></tr></tr></tr><tr><td style="padding:8px 0 16px 0"><div style="font-size:20px;line-height:30px;font-weight:normal;color:#444">&quot;I am available to tour:
    Tomorrow - afternoon or evening
    Mar 25 - morning&quot;</div></td></tr><tr><div><tr><td style="padding:8px 0;text-align:center;margin:auto"><div style="font-size:15px;line-height:24px;font-weight:normal;color:#444"><b>Reply directly to this email </b>or</div></td></tr><tr><td style="padding:8px 0;text-align:center;margin:auto"><a style="width:100%;min-width:68px;margin:0px;padding:10px 16px;cursor:pointer;text-align:center;text-decoration:none;white-space:normal;border-radius:4px;outline:none;font-size:16px;display:inline-block;box-sizing:border-box;color:#FFF;border:1px #0074E4 solid;background:#0074E4;font-weight:500;max-width:288px" target="_blank" href="https://www.zillow.com/rental-manager/inquiry-contact?controlHash=15493f88eb12f907880ec7944ebdec49&amp;inquiryId=7851955449535414695&amp;landlordBrand=zillow&amp;renterBrand=zillow&amp;name=Madeline%20Marquis&amp;phone=(805)722-8498&amp;date=03/23/19&amp;intentionType=sms&amp;utm_source=inquiry&amp;utm_medium=email&amp;utm_campaign=unified"><span><img style="width:16px;vertical-align:middle" src="https://nodes3cdn.hotpads.com/email-renderer/dist/text-zillow-1cRwhCI.png"/>  SMS text</span></a></td></tr><tr><td style="padding:8px 0;text-align:center;margin:auto"><a style="width:100%;min-width:68px;margin:0px;padding:10px 16px;cursor:pointer;text-align:center;text-decoration:none;white-space:normal;border-radius:4px;outline:none;font-size:16px;display:inline-block;box-sizing:border-box;color:#FFF;border:1px #0074E4 solid;background:#0074E4;font-weight:500;max-width:288px" target="_blank" href="https://www.zillow.com/rental-manager/inquiry-contact?controlHash=15493f88eb12f907880ec7944ebdec49&amp;inquiryId=7851955449535414695&amp;landlordBrand=zillow&amp;renterBrand=zillow&amp;name=Madeline%20Marquis&amp;phone=(805)722-8498&amp;date=03/23/19&amp;intentionType=call&amp;utm_source=inquiry&amp;utm_medium=email&amp;utm_campaign=unified"><span><img style="width:16px;vertical-align:middle" src="https://nodes3cdn.hotpads.com/email-renderer/dist/call-zillow-1I2sfh8.png"/>  Call</span></a></td></tr><tr><td style="padding:12px 0;line-height:0"><span> </span></td></tr></div></tr><tr><td style="width:100%;border-top:1px solid #f2f2f2;line-height:0"><span> </span></td></tr><tr><td style="padding:32px 0 8px 0"><div style="font-size:15px;line-height:24px;font-weight:bold;color:#444">Other helpful links</div></td></tr><tr><td style="padding:8px 0"><div style="font-size:13px;line-height:20px;font-weight:normal;color:#444">Found a tenant and no longer wish to get inquiries for this property? <a style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold" href="https://www.zillow.com/rental-manager/deactivate?encodedAlias=fx2pe67fep72&amp;utm_source=LeadInquiry&amp;utm_medium=email&amp;utm_campaign=LeadInquiry&amp;utm_content=ExpireItNow">Deactivate this listing</a></div></td></tr><tr><td style="padding:8px 0"><div style="font-size:13px;line-height:20px;font-weight:normal;color:#444">Is this inquiry spam? <a style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold" href="https://www.zillow.com/rental-manager/inquiry-contact?controlHash=15493f88eb12f907880ec7944ebdec49&amp;inquiryId=7851955449535414695&amp;landlordBrand=zillow&amp;renterBrand=zillow&amp;name=Madeline%20Marquis&amp;phone=(805)722-8498&amp;date=03/23/19&amp;intentionType=reportInquiryAsSpam&amp;utm_source=inquiry&amp;utm_medium=email&amp;utm_campaign=unified">Report spam</a></div></td></tr><tr><td style="padding:8px 0"><div style="font-size:13px;line-height:20px;font-weight:normal;color:#444">Know your fair housing obligations under Zillow&#x27;s <a style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold" href="https://www.zillow.com/corp/respectful-renting-pledge/">Respectful Renting Pledge</a></div></td></tr><tr><td style="padding:8px 0"><div style="font-size:13px;line-height:20px;font-weight:normal;color:#444">Have questions or need help? Find answers on our <a style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold" href="https://help.zillowrentalmanager.com/hc/en-us">FAQ page</a>, or <a style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold" href="https://help.zillowrentalmanager.com/hc/en-us/requests/new?ticket_form_id=190098">contact us</a>.</div></td><tr><td style="padding:8px 0;line-height:0"><span> </span></td></tr></tr><tr><td style="width:100%;border-top:1px solid #f2f2f2;line-height:0;padding:4px 0"><span> </span></td></tr><tr><td style="padding:24px 0 0 0;text-align:center"><img width="218" height="28" src="https://nodes3cdn.hotpads.com/email-renderer/dist/logo-zg-3DZs5u5.png"/></td></tr><tr><td style="text-align:center;padding:10px 0 32px 0"><img width="276" height="28" src="https://nodes3cdn.hotpads.com/email-renderer/dist/logos-3-brands-26xC_MT.png"/></td></tr></tbody></table><div><table border="0" cellPadding="0" cellSpacing="0" style="font-size:11px" width="100%"><tbody><tr><td></td></tr><tr><td></td></tr><tr><td><table border="0" cellPadding="0" cellSpacing="0" style="background-color:#333;height:30px;vertical-align:middle" width="100%"><tbody><tr><td style="text-align:center;color:#CDD1D4;vertical-align:middle;padding:8px 0;font-size:11px">© 2006-2019 Zillow, Inc. 1301 Second Avenue, Floor 31, Seattle, WA 98101  <a style="text-decoration:none;cursor:pointer;color:#0074E4;font-weight:bold" href="https://www.zillow.com/corp/Privacy.htm?utm_source=email&amp;utm_medium=email&amp;utm_campaign=emm-footerprivacy-HomeReport"><span style="color:#CDD1D4;text-decoration:underline">Privacy policy</span></a></td></tr></tbody></table></td></tr><tr><td></td></tr></tbody></table></div></div></td></tr></tbody></table></td><td style="padding:0px;margin:0px;">&nbsp;</td></tr><tr><td colspan="3" style="padding:0px;margin:0px;font-size:20px;height:20px;" height="20">&nbsp;</td></tr></table></body></html>

         `,
    replyto: "testme@gmail.com",
    fromname :"firstName LastName",
    date: "1/1/1970"
    
    }

    const pluscodekey ="AIzaSyBqeAMkHMiXKA-3QiBKqjryi3X9cof2FZM";
    const emailregex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;
    const phoneregex =/(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i;
    
    
    // Get the plus code
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
    //End Blocks with a delimiter "###"
    if (capture.match (/^table/)) { return "###" } 
    //if (capture.match (/^br/)) { return "###" } 
    // otherwise return "" 
    return "";
    };
    var f ={};
    f.body=inputData.raw.replace(/=\s\n/g,"").replace(/\<([^>]+)>/g,rp2).replace(/\n?=C2=A0\n?/g," ").replace(/=([A-F0-9]{2})/g,replacer);
   // console.log (f.body);        
        const d = f.body.match (/date:\s+([,+\([A-Za-z\s[0-9:]*\))/i) || []  ;   
    // Match Reply-To Email address
        
    // NO CC  Match CC this will be the agent that was assigned the lead 
    //             const cc = f.body.match (/^cc:\s+([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/im);   
    // Match the from 
    //  const from =  f.body.match (/from:\s*\"([\s\w]+)\"\s?\[?([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)\]/i)|| [] ; 
    // Logger.log ("from:"+ from);
      const p =f.body.match(/phone\=(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i) || [] ;  
     // const note = f.body.match(/is\savailable\:([\w\W]+)(?:reply)/i) || [];
      const note = ((f.body.split(/reply\sdirectly/i) || [])[0])||"-" ; //split on reply 
     // console.log("\n\n******note:"+note+"\n\n");
     /*note.forEach(element => {console.log("**************************\n\n\n\:"+element)
          
      });
*/
     // const fromline = f.body.match(/from:\s?\"?([\s\w]+)\"?\s*\[?([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)\]/i) || [];
    // Logger.log ("ANL: "+fromline);
    const listing = (f.body.match ((/(?:message\sabout)|(?:tour\srequest\sfor)(.*)/i) || [])[1]||"-").trim();
    const listingurl=((f.body.match(/found\syour\slisting\son\:\[(.+)\]/i) || [])[1]||"-").trim();
    f.listingurl= listingurl;
    f.listing =listing;
    f.pluscode =  await getpluscode(f.listing);
    f.name  = inputData.fromname || "-";
    f.phone = p.pop() ||"-"; 
    f.email = inputData.replyto;
    //f.from  = from.pop() || ""; 
    // f.cc    =  (cc && !(typeof cc[1] ==="undefined")) ? cc[1]:" ";  
    f.date = inputData.date;
    f.note = note.replace(/\W|\s{/ig," ").trim(); 
    
    
    //look for an name in the subject line           
    f.phone = (!f.phone && phoneregex.test(f.note)) ? f.note.match(phoneregex)[1] :f.phone;
    // *********** Turn this into a function
    // find and name and split it into 1st and last name
    if (f.name && !emailregex.test(f.name)) {
    //if the f.name is not an email
    // try to split the fname on spaces 
    const namesplit = f.name.trim().split(/\s+/);
    if (namesplit.length > 1 ) { f.firstname = namesplit[0]; 
                              f.lastname =namesplit.pop();}
    else { f.firstname =f.name , f.lastname = "";}
    }
    // try to find the name in the email address
    // *********** Turn this into a function
    if (f.name && emailregex.test (f.name)){
      // maybe there is a name in the Email Address
    const esplit = (f.name.split (/@/)[0].split('.'));
      if (esplit.length > 0) {f.name = esplit.join(" ");
                              f.firstname = esplit[0]; 
                              f.lastname =esplit.pop();
        };
    };
    
    
    const aboutme = ((f.body.match(/about\sme([^\#]{3,})/i) || [])[1])|| "-";  
      f.movein =(aboutme.match(/move\W?-in\s*(.*)/i) || [])[1]||"-";
    // Logger.log ("mmmm:"+movein);
    // Logger.log ("MOVEIN:"+aboutme[1].match(/move\W?-in\s*(.*)/i) );
      f.creditscore =(aboutme.match(/credit\s?score\s*(.*)/i) || [])[1]||"-";
      f.income =(aboutme.match(/income\s*(.*)/i) || [])[1]||"-"; 
      f.jobtitle =(aboutme.match(/job\s?title\s*(.*)/i) || [])[1]||"-";
      f.employer =(aboutme.match(/employer\s*(.*)/i) || [])[1]||"-";
      f.employedsince =(aboutme.match(/employed\s?since\s*(.*)/i) || [])[1]||"-";
      f.pastjobs =(aboutme.match(/past\s?jobs\s*(.*)/i) || [])[1]||"-";
      f.reasonformoving =(aboutme.match(/reason\s?for\s?moving\s*(.*)/i) || [])[1]||"-";
      f.employer =(aboutme.match(/employer\s*(.*)/i) || [])[1]||"-";
      f.pets =(aboutme.match(/pets\s*(.*)/i) || [])[1]||"-";
      f.leaselength =(aboutme.match(/lease\s*length\s*(.*)/i) || [])[1]||"-";
      f.parking =(aboutme.match(/parking\s*(.*)/i) || [])[1]||"-";
      f.employer =(aboutme.match(/employer\s*(.*)/i) || [])[1]||"-";
      f.smoker =(aboutme.match(/smoker\s*(.*)/i) || [])[1]||"-";
      f.desiredneighborhood =(aboutme.match(/desired\s?neighborhoods\s*(.*)/i) || [])[1]||"-";
     
    // Look at the intent of the message to figure out how to respond
    //const agent ={sms:'+13473709408',hubspotid:'35013679'};
    
    const agent = (function (cc) {
    switch (cc){
    case 'chris@coulthrust.com' : return {sms :'+13473709408',hubspotid :'35013679'}  
    case 'david@stonecrestrealty.com' : return {sms :'+16173080839',hubspotid:'35029194'}
    case 'caroline@stonecrestrealty.com':return{sms:'+13473709408',hubspotid:'35029193'}
    case 'tzur@stonecrestrealty.com' : return {sms:'+13476851115',hubspotid:'35032776'}
    case 'f.z@stonecrestrealty.com' : return {sms:'+13473709408',hubspotid:'35028612'}
    default : return {sms:'+13473709408',hubspotid:''};
    }})(inputData.cc);
    
    
  
output = {phone : f.phone,
    name : f.name,
    email :f.email,
    note:f.note,
    listing:f.listing,   
    listingurl: f.listingurl,
    date: f.date,
    firstname :f.firstname,
    lastname : f.lastname , 
    creditscore :f.creditscore ,
    income : f.income ,
    jobtitle :f.jobtitle,
    employer : f.employer,
    employedsince :f.employedsince,
    pastjobs : f.pastjobs,
    reasonformoving :f.reasonformoving,
    employer : f.employer,
    pets : f.pets ,
    leaselength : f.leaselength ,
    parking : f.parking, 
    employer : f.employer ,
    desiredneighborhood : f.desiredneighborhood,
    smoker : f.smoker,
    sms :agent.sms , 
    hubspotid:agent.hubspotid,
    pluscode : f.pluscode}

    console.log ("\n\n\n\n\n"+JSON.stringify(output));
    

}

  zap();

