const pluscodekey ="AIzaSyBqeAMkHMiXKA-3QiBKqjryi3X9cof2FZM";
const emailregex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;
const phoneregex =/(\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/i;

function  getpluscode (listing) {
  // returns the promise of getting the vid for the given email
     return  fetch (`https://plus.codes/api/?address=${encodeURIComponent(listing)}&key=${pluscodekey}`).then(response => response.json())
    .then(data => data)
    .catch(error => {console.error(error)})
  }
  const pluscode =  await getpluscode(f.listing);
  f.pluscode = (!pluscode.plus_code ==="undefined")  ? pluscode.plus_code.global_code :"missing";
