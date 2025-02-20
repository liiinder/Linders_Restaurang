let datasrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.228639166317!2d12.017878972629852!3d57.84359979558896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46455fca362c89db%3A0x7aff65f495b03aee!2zU8O2cmfDpXJkc3bDpGdlbiAxMCwgNDQ1IDM3IEJvaHVz!5e1!3m2!1ssv!2sse!4v1739278240716!5m2!1ssv!2sse"

let map = document.getElementById ('mymap');
let frame = document.createElement ('iframe');
frame.src = datasrc;
frame.id = "iframe-map";
frame.width = "600px";
frame.height = "450px";

let maplistner = function (e) {
    map.appendChild(frame);
    removeFadeOut(document.getElementById('placeholder-img'), 2000);
    map.removeEventListener ("mouseover", maplistner);
};

function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.zIndex = -1;
    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}

map.addEventListener ('mouseover', maplistner);

let welcomeMessage = document.getElementById("welcome-message");
const welcome = "Välkommen hem till mig! Vi är ett nystartat företag som fokuserar på personlighet och en hemtrevlig känsla direkt från lägenheten i Bohus. Det serveras hemmagjord pizza på bästa sätt direkt från ugnen till tallriken.";
let temperature = "";

async function getWeather(){
    const url = "https://api.open-meteo.com/v1/forecast?latitude=57.8437&longitude=12.017&current=temperature_2m";
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const temp = json.current.temperature_2m;

        switch (true) {
            case temp < -30:
                temperature = `Det är sjukt jävla kallt ute (${temp}°), vi har tokstängt!`;
                break;
            case temp < -10:
                temperature = `Det är sjukt kallt ute (${temp}°), men så kanske bättre att vänta?!`;
                break;
            case temp <= 5:
                temperature = `Det är ${temp}° ute, lite kallt men det kanske kan fungera ändå?!`;
                break;
            case temp < 15:
                temperature = `Det är ${temp}° ute, ta med en tröja så blir det trevligt!`;
                break;
            case temp < 25:
                temperature = `Det är ${temp}° varmt ute! Helt perfekt!`;
                break;
            case temp < 35:
                temperature = `Det är ${temp}° grader ute, frysen är full med is så det är bara komma förbi!`;
                break;
            case temp >= 35:
                temperature = `Det är ${temp}° ute, ta med flera ombyte! Men kanske bättre vi drar och badar istället?!`;
                break;
        }

        welcomeMessage.innerHTML = `${welcome} ${temperature}`;

    } catch (error) {
        console.error(error.message);
    }
}

getWeather();
