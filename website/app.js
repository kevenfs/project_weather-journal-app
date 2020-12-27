// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
/* Function to GET Web API Data */
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=de81d521f112510def4e1ed18f97247c';

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
postData('/addZip', {
    zip: data.zip,
    feelings: data.feelings
});

/* Function to GET Project Data */
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newZip = document.getElementById('zip').value;
    const newFeelings = document.getElementById('feelings').value;

    getZip('/zipData', )
        .then(function (data) {
            console.log(data);
            postData('/addZip', {
                zip: data.zip,
                feelings: data.feelings
            });
        })
        .then(
            updateUI()
        )
}

const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('entryDate').innerHTML = allData[0].date;
        document.getElementById('zipTemp').innerHTML = allData[0].zip;
        document.getElementById('entryContent').innerHTML = allData[0].feelings;

    } catch (error) {
        console.log("error", error);
    }
}