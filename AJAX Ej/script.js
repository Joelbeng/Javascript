const imgTitle = document.getElementsByTagName('h2')[0];
const img = document.getElementsByTagName('img')[0];
const description = document.getElementsByClassName('description')[0];
const dateImg = document.getElementsByClassName('date')[0];

function hideButton() {
    const getBtn = document.getElementById('getImg');
    getBtn.style.opacity = 0;
}

function getData(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function() {
        if (this.status == 200) {
           const NASAData = JSON.parse(this.responseText);
           
           imgTitle.textContent = NASAData.title;
           img.alt =NASAData.title;
           img.src = NASAData.hdurl;
           dateImg.textContent = NASAData.date;
           description.textContent = NASAData.explanation;   
        } else {
            imgTitle.textContet = 'El pedido fue fallido';
        }

        hideButton();
    });

    xhr.open('GET',"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    xhr.send();
}