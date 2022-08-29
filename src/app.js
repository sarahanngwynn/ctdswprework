// Characters
const createLi = (hairColor) => {
  const li = document.createElement('li');
  li.textContent = `Hair Color: ${hairColor}. Click here to find the characters first film.`; 
  return li
};



  const appendToDom2 = (person) => {
    const secondLi = document.getElementById('second');
    secondLi.appendChild(createLi(person))
  }

  const fetchCharacter2 = () => {
    axios.get("https://swapi.dev/api/people/4").then(response => {
      const hairColor = response.data.hair_color;
      appendToDom2(hairColor);
  
    }) 
    .catch(error => console.error(error));
    };

  
  document.getElementById('people[4]').addEventListener('click', fetchCharacter2);

  const appendToDom = (person) => {
    const firstLi = document.getElementById('first');
    firstLi.appendChild(createLi(person))
  }
  
  const fetchCharacter1 = () => {
    axios.get("https://swapi.dev/api/people/1").then(response => {
      const hairColor = response.data.hair_color;
      appendToDom(hairColor);
  
    }) 
    .catch(error => console.error(error));
    };
  
    document.getElementById('people[1]').addEventListener('click', fetchCharacter1);

    //Films
  
    
      const appendToDom3 = (person) => {
        const li = document.getElementById('fifth');
        li.appendChild(createLi2(person))
      };

       const createLi2 = (actor) => {
      const li = document.createElement('li');
      li.textContent = `Character: ${actor}. Click here to find out their first film.`; 
      return li
    };
    
      const fetchFilms1 = () => {
        axios.get("https://swapi.dev/api/people/5").then(response => {
          const oneCharacter = response.data.name;
          appendToDom3(oneCharacter);
      
        }) 
        .catch(error => console.error(error));
        };

        document.getElementById('films[1]').addEventListener('click', fetchFilms1);

        const appendToDom4 = (person) => {
          const secondLi = document.getElementById('sixth');
          secondLi.appendChild(createLi2(person))
        }
      
        const fetchFilms2 = () => {
          axios.get("https://swapi.dev/api/people/10/").then(response => {
            const oneCharacter = response.data.name;
            appendToDom4(oneCharacter);
        
          }) 
          .catch(error => console.error(error));
          };
  
          document.getElementById('films[4]').addEventListener('click', fetchFilms2);

        //Character 1 Link
        const createLi3 = (film) => {
        const li = document.createElement('li');
        li.textContent = `Luke Skywalkers's first film was: ${film}`; 
        return li
      };
      
      
      
        const appendToDom5 = (person) => {
          const li = document.getElementById('seventh');
          li.appendChild(createLi3(person))
        }
      
        const characterLink1 = () => {
          axios.get("https://swapi.dev/api/films/1").then(response => {
            const oneCharacter = response.data.title;
            appendToDom5(oneCharacter);
        
          }) 
          .catch(error => console.error(error));
          };
  
    
    document.getElementById('first').addEventListener('click', characterLink1);

//character 2 link

const createLi4 = (film) => {
  const li = document.createElement('li');
  li.textContent = `Darth Vadar's first film was: ${film}`; 
  return li
};



  const appendToDom6 = (person) => {
    const li = document.getElementById('eighth');
    li.appendChild(createLi4(person))
  }

  const characterLink2 = () => {
    axios.get("https://swapi.dev/api/films/6").then(response => {
      const oneCharacter = response.data.title;
      appendToDom6(oneCharacter);
  
    }) 
    .catch(error => console.error(error));
    };


document.getElementById('second').addEventListener('click', characterLink2);
        
        // film 1 link
        const createLi5 = (film) => {
          const li = document.createElement('li');
          li.textContent = `Leia Organa's first film was: ${film}`; 
          return li
        };
        
        
        
          const appendToDom7 = (person) => {
            const secondLi = document.getElementById('third');
            secondLi.appendChild(createLi5(person))
          }
        
          const filmsLink1 = () => {
            axios.get("https://swapi.dev/api/films/1").then(response => {
              const oneCharacter = response.data.title;
              appendToDom7(oneCharacter);
          
            }) 
            .catch(error => console.error(error));
            };
    
      
      document.getElementById('fifth').addEventListener('click', filmsLink1);
    
      //film 2 link
    const createLi6 = (film) => {
      const li = document.createElement('li');
      li.textContent = `Obi-Wan Kenobi's first film was: ${film}`; 
      return li
    };

      const appendToDom8 = (person) => {
        const firstLi = document.getElementById('fourth');
        firstLi.appendChild(createLi6(person))
      }
      
      const filmsLink2 = () => {
        axios.get("https://swapi.dev/api/films/1").then(response => {
          const oneCharacter = response.data.title;
          appendToDom8(oneCharacter);
      
        }) 
        .catch(error => console.error(error));
        };
      
        document.getElementById('sixth').addEventListener('click', filmsLink2);
  
  