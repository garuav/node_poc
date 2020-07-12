console.log('script called ');


const weatherForm = document.querySelector('form');
const successP = document.querySelector('.success-msg');
const errorP = document.querySelector('.error-msg');
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    successP.textContent = 'Loading...';
    errorP.textContent = '';
    const inputValue = document.querySelector('#search-txt').value;
    // use this when running in local host
    // http://localhost:3000
        fetch(`/weather?address=${inputValue}`).then(response => {
            console.log('response  = ',response);
            response.json().then(json => {
                if(json.error) {
                    console.log('error from API  = ', json.error);
                   
                    errorP.textContent = json.error;
                    successP.textContent = '';
                } else {
                    console.log('forecast  = ',json.forecast);
                    console.log('location  = ',json.location);
                    console.log('location Details  = ',json.locationDetails);
                    successP.textContent = `${json.locationDetails} Weather is ${json.forecast.weather_descriptions[0]}. Temparature is ${json.forecast.temperature} degrees it feels like ${json.forecast.feelslike} degrees out.`;

        
                }
            }).catch(error => {
                console.log('error  in json = ',error);
            })
        }).catch(error => {
            console.log('error   = ',error);
        })
    console.log('inputValue = ', inputValue);
})