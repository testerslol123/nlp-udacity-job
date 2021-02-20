import {checkURL} from "./checkURL"
import {callAPI} from "./callAPI"

function handleClick()
    {
        const url = document.getElementById('url');
        
 
        
        console.log('button pressed')
        
        if (checkURL(url.value)) {
            console.log(url);
            callAPI(url.value);
            }
        else 
            {
                console.log('Invalid URL')
            };
    
    };

 


export {handleClick}
