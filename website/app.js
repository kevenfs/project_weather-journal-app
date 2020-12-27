// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
/* Function to GET Web API Data */
const baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=de81d521f112510def4e1ed18f97247c&units=metric';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    const newZip = document.getElementById('zip').value;
    getZip(baseURL, newZip, apiKey)

}
const getZip = async (baseURL, zip, key) => {

    const res = await fetch(baseURL + zip + key)
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

/* Function to POST data */
postData('/addData', {
    zip: data.zip,
    feelings: data.feelings
});

/* Call update Method */
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    e.preventDefault()
    const ZIPcode = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;

    getWeather(baseURL, ZIPcode, APIkey)
        .then(function (data) {
            postData('http://localhost:8000/data', {
                    date: newDate,
                    temp: data.main.temp,
                    content: userResponse
                })
                .then(function () {
                    UpdateUI();
                })
        })
}

/* Function to GET Project Data */
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log('All data is :');
        console.log(allData);
        document.getElementById('date').innerHTML = allData.theDate;
        document.getElementById('temp').innerHTML = allData.theTemp;
        document.getElementById('content').innerHTML = allData.theFeeling;
    } catch (error) {
        console.log('Error', error);
    }
}