/* this function is used in the text message recording */
async function zap ()
{
var inputData = {direction:"outbound",body: "this is the message body"
                , to:"+5180000000",from:"+9990000000", owneremail:"coulthrust@gmail.com"} ;

const direction = inputData.direction;
const from_number = inputData.from;
const to_number = inputData.to;
const body = inputData.body;
const vemail= inputData.owneremail;
const hapikey ="4637cab8-0bd7-4991-a4ef-65bfdb6f4cf8";


// look at the incoming message to see if the welcome message has been send
//Search database to see where we are in the flow

// Send the welcome message introducing the agent and information about the listing

// Accept any replies for appointment

return { key : direction === "outbound" ? to_number : from_number} ;
};

r = zap().then(data => data);

Promise.all ([r]).then (values=> console.log(values[0]) );
//https://firestore.googleapis.com/v1/projects/first-project-baa3e/databases/(default)/documents/txt?key=AIzaSyCj83_0Hi5mJuMvuMF4JM9WaZxUVkt0mCw

//console.log (r.then(data => console.log (data)));
//https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA

//https://sheets.googleapis.com
//https://securetoken.googleapis.com/v1/token?key=AIzaSyCj83_0Hi5mJuMvuMF4JM9WaZxUVkt0mCw
//https://first-project-baa3e.firebaseio.com/txt.json?auth=AIzaSyCj83_0Hi5mJuMvuMF4JM9WaZxUVkt0mCw
//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&keyAIzaSyBqeAMkHMiXKA-3QiBKqjryi3X9cof2FZM 
//https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters
//plus code
//https://plus.codes/api/?address=168 west 86 st &key=AIzaSyBqeAMkHMiXKA-3QiBKqjryi3X9cof2FZM
//https://plus.codes/api/?address=168%20west%2086%20st%20apt%204j&key=AIzaSyBqeAMkHMiXKA-3QiBKqjryi3X9cof2FZM

