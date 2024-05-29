const regex = /\/([a-zA-Z0-9]+)\//;
function refresh(index) {
  const micrioElement = document.querySelector('micr-io');
  const artCredit = document.getElementById('tomb');
  const artTitle = document.getElementById('title');
  const artDate = document.getElementById('date');

  obj_number = json[index].obj_number;
  makerArray = findMakers(obj_number);
  urlId = json[index].micrio;
  tomb = json[index].rest;
  title = json[index].title;
  date = " " + json[index].date;
  const match = urlId.match(regex)[1];
  micrioElement.setAttribute('id', match);
  setMakers(makerArray, index);
  artTitle.textContent = title;
  artDate.textContent = date;
  artCredit.textContent = tomb;
}

function setMakers(makerArray, index) {
  $('#clone').remove();
  const makerBlock = document.getElementById('maker-block');
  const artMaker = document.getElementById('maker');
  const makerAttribution = document.getElementById('attribution');
  const makerNationality = document.getElementById('nationality');
  const makerRole = document.getElementById('role')
  makerAttribution.textContent = "";
  artMaker.textContent = "";
  makerNationality.textContent = "";
  makerRole.textContent = "";
  
  if (makerArray.length == 0) {
    
    makerAttribution.textContent = json[index].location;

  } else {
    console.log(makerArray);
    for (i = 0; i < makerArray.length; i++) {

      if ( i > 0) {


      const clonedItem = makerBlock.cloneNode(true);
      // try cloning individual blocks
      clonedItem.id = "clone";
      divs = clonedItem.querySelectorAll('div');
      makerBlock.appendChild(clonedItem);
      divs.forEach(item => {
        item.id = "clone-div";
        console.log(item);
      });
  

      document.getElementById('maker clone-div').textContent = makerArray[i].name;
     document.getElementById('attribution clone-div').textContent = makerArray[i].attribution;
     document.getElementById('role clone-div').textContent = makerArray[i].role;
     document.clonedItem.getElementById('nationality clone-div').textContent = makerArray[i].location;
     
    
      } else {
        artMaker.textContent = makerArray[i].name;
        makerNationality.textContent = makerArray[i].location;
        makerRole.textContent = makerArray[i].role;
        makerAttribution.textContent = makerArray[i].attribution;
      }
      
    }


  }



}

function findMakers(value) {
  // Filter the array to get objects where the specified attribute matches the desired value
  let results = makers.filter(obj => obj["obj_number"] === value);
  return results;
}


document.addEventListener("DOMContentLoaded", function () {
  refresh(current);
  //setting values based on JSON 
  const fwd = document.getElementById('fwd');
  const back = document.getElementById('back');

  $(fwd).click(function () {
    if (current == json.length) {
      current = 0;
    }
    else {
      current++;
    }
    refresh(current);
  });

  $(back).click(function () {
    
    if (current == 0) {
      current = json.length - 1;
    }
    else {
      current--;
    }
    refresh(current);
  });
});