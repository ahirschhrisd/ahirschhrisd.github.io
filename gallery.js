

document.addEventListener("DOMContentLoaded", function() {
//setting values based on JSON 


var urlId = json[current].micrio;
var tomb = json[current].rest;
var title = json[current].title;
var date = " "+ json[current].date;
const regex = /\/([a-zA-Z0-9]+)\//;
var match = urlId.match(regex)[1];
const micrioElement = document.querySelector('micr-io');
const artCredit = document.getElementById('tomb');
const artTitle = document.getElementById('title');
const artDate = document.getElementById('date');
artTitle.textContent = title;
artDate.textContent = date;
artCredit.textContent = tomb;
micrioElement.setAttribute('id', match);

const fwd = document.getElementById('fwd');
const back = document.getElementById('back');

$(fwd).click(function () {
    console.log("clicked");
    current++;
    urlId = json[current].micrio;
    tomb = json[current].rest;
    title = json[current].title;
    date = " "+ json[current].date;
    const match = urlId.match(regex)[1];
    const micrioElement = document.querySelector('micr-io');
    micrioElement.setAttribute('id', match);
    artTitle.textContent = title;
    artDate.textContent = date;
    artCredit.textContent = tomb;
    

  });

});