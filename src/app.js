

const createLi = (character) => {
  const li = document.createElement('li');
  li.textContent = `Name: ${character}` 
  return li
};

const appendToDom = (person) => {
  const ul = document.querySelector('ul');
  ul.appendChild(createLi(person));
}

const fetchCharacter = () => {
  axios.get("https://swapi.dev/api/people/1").then(response => {
    const character = response.data.name;
    console.log(`get character`, character);
    appendToDom(character);
  }) 
  .catch(error => console.error(error));
  };

fetchCharacter();


/*
main();

function main() {
  const url = "https://swapi.dev/api/people/1"
  let personData;
  axios.get(url).then((response) => {
    personData = response.data;
    return axios.get(response.data.films)
  })
  .then((filmsRes) => {
    const filmsName = filmsRes.data.name;
    personData.filmsName = filmsName;
    const md = showMarkdown(personData);
    console.log(md);
  })
  .catch((error) => console.log(error));
}


function showMarkdown(data) {
  return `# ${data.name}
## Info



**Hair Color:** ${data.hair_color}

**Eye Color:** ${data.eye_color}

**Films:** ${data.films.title}
`
}

function onClick(event) {
  event.preventDefault();
}



function displayDetails(data) {
  let name = document.querySelector("#name");
  let hairColor = document.querySelector("#hair_color");
  let eyeColor = document.querySelector("#eye_color");
  let films = document.querySelector("#films[0],films[1],films[2],films[3]");
  let title = document.querySelector("#title");
  let episode= document.querySelector("#episode_id");
  let director= document.querySelector("#director");
  let characters = document.querySelector("#films[0],films[1],films[2],films[3]");
}
let detailsHTML = `<div class="row">`;
forecast.forEach(function (forecastDay, index) {
  if (index < 6) {
    forecastHTML =
      forecastHTML +
      `
      <div class="container">
      <div class="row mb-5">
       <div class="col d-none d-lg-block">
                <input
                   type="submit"
                   value="Characters"
                   class="form-control btn btn-primary w-100"
                 />
        </div>
        <span><a class="active"
         href="#"
         id = "people[1]"
         >  Luke Skywalker  </a><span></span><a class="active"
         href="#"
         id = "persons[4]">  Darth Vadar  </a><span></span><a class="active"
         href="#"
         id = "people[10]">  Obi-Wan Kenobi </a><span></span><a class="active"
         href="#"
         id = "people[5]">  Lei Organa  </a></span>
      </div>
      
      <div class="col">
         <div class="description">
                
                 <li class = "name"> ${name} </li>
                 <li class = "hair color">${hair_color} </li>
                 <li class = "eye color">${eye_color} </li>
                 <li class = "films"><${films[1]},${films[4]},${films[5]},${films[7]} /li>
         </div>
       </div>
             <br />
         <div class="col d-none d-lg-block">
                 <input
                   type="submit"
                   value="Films"
                   class="form-control btn btn-primary w-100"
                 />
          </div>
        </div>
        <span><a class="active"
         href="#"
         id = "films[4]">  Phantom Menace  </a><span></span><a class="active"
         href="#"
         id = "films[1]">  A New Hope  </a><span></span><a class="active"
         href="#"
         id = "films[2]">  The Empire Strikes Back  </a><span></span><a class="active"
         href="#"
         id = "films[7]">  The Force Awakens  </a></span>
        <br />
        <br />
             <div class="col">
               <div class="desciption">
               <div id="data"></div>
                 <li class = "title">${title}</li>
                 <li class = "episode">${episode}</li>
                 <li class = "director">${director}</li>
                 <li class = "characters">${people[1], people[4], people[5], people[10]}</li>
               </div>
             </div>
           </div>
`;
  }
});

detailsHTML = detailsHTML + `</div>`;
detailsElement.innerHTML = detailsHTML;


  */
 
