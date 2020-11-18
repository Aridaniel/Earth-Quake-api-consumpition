
// VAriable with the apis url

const apisUrl = 'https://apis.is/earthquake/is';





// ASYNC Function with await to fetch the data and more

async function earthquakeIceland (){
    
    
    const response = await fetch(apisUrl)
    const data = await response.json();


  
    
    // Click function that goes through the array , and diplaying each value in each line
    document.getElementById('btnWhere').addEventListener('click', function(){

        const divBox = document.getElementById('divBox')

        
        for (var i= 0; i < data.results.length; i++) {

            // Error handling with try and Catch
            try{

                // VAirable with each property
                const {humanReadableLocation, size, latitude, longitude, timestamp, depth} = data.results[i]

                // Displaying with innerHTML and template literals
                divBox.innerHTML +=  `<p>Where: <span id="whereLine">${humanReadableLocation}</span><br>
                Size: <span id="sizeLine">${size}</span> Richter<br>
                Latitude: <span id="latitudeLine">${latitude}</span><br>
                Longitude: <span id="longitudeLine">${longitude}</span><br>
                Time: <span id="timeLine">${timestamp}</span><br>
                Depth: <span id="depthLine">${depth}</span></p>`
            }
            catch{
                console.log('Error')
            }
            // Console.log for debugging
            console.log(data.results)
        }

    })   

    

    
}        


// Calling the function
earthquakeIceland()

    




