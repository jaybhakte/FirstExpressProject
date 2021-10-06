let submitBtn = document.getElementById('submitBtn');
let cityName = document.getElementById('cityName')
let city_name = document.getElementById('city_name');
let temp_status = document.getElementById('temp_status');
let temp_real_val = document.getElementById('temp_real_val');

//function call after click
let getinfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = 'Kindly enter city name!';
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f8675270d51c720e53138ea0094c302d`;
       
            //async await : json fetch karene tak hum wait karenge
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]; //array of objects banaya
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            //condition to check sunny or cloudy
            if(tempMood == 'Clear'){
                temp_status.innerHTML = `<i class="fas fa-cloud-sun" style="color:#eccc68"></i>`
            }else if(tempMood=='Clouds'){
                temp_status.innerHTML =` <i class="fas fa-cloud" style="color:#f1f2f6"></i>`
            }else if(tempMood=='Rain'){
                temp_status.innerHTML =` <i class="fas fa-cloud-rain" style="color:#a4b0be"></i>`
            }else{
                temp_status.innerHTML = `<i class="fas fa-sun" style="color:#eccc68"></i>`
            }
            
        } catch {
            city_name.innerText = 'Please enter the city name properly!';
            temp.innerHTML = '';
            temp_status.innerHTML = '';
        }
    }
}


submitBtn.addEventListener('click', getinfo);