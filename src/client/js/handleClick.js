
function handleClick()
    {
        const btn = document.getElementById('btn');
        const url = document.getElementById('url');
        
        const irony = document.getElementById('irony');
        const confidence = document.getElementById('confidence'); 
        const agreement = document.getElementById('agreement'); 
        const subjectivity = document.getElementById('subjectivity'); 
        
        
        
        btn.addEventListener("click", function() {
        
            if (checkURL(url.value)) {
                console.log(url.value);
                callAPI();
                }
            else 
                {
                    console.log('Invalid URL')
                };
        
        });

    }


export {handleClick}
