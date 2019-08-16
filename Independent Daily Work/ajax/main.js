// $('#submitBtn').click(function(e){
//   addToPokedex(e);
// });

function addToPokedex(event) {
  event.preventDefault();
  let name = $('input[name=pokemon]').val();
  let description = $('textarea[name=description]').val();

  let pokemonContainer = document.createElement('div');
  pokemonContainer.id = name.toLowerCase();
  let pokemonContent = document.createElement('p');
  pokemonContent.innerHTML = `${name} - ${description}`;
  pokemonContainer.appendChild(pokemonContent);
  pokemonContainer.setAttribute(`id`,`${name}`);

  let list = document.getElementById('pokemon-list');
  list.appendChild(pokemonContainer);
}

// // request method and the URL for our reques example
// let httpRequest = new XMLHttpRequest();
// httpRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/${pokemon}/');
// httpRequest.send();


function fetchPokemon(event) {
  let pokemon = event.target.pokemon.value.toLowerCase();

  let request = new XMLHttpRequest();
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
  request.open('GET', url);
  // Process the response handler here
  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      if(request.status === 200) {
        let response = JSON.parse(request.responseText);
        //image path
        let path = response.sprites.front_default;
        let name = response.name;
        //image tag
        let image = document.createElement('img');
        image.src = path;
        image.alt = name;

        //add image object to DOM
        let pokemonListItem = document.getElementById(name.toLowerCase());
        pokemonListItem.appendChild(image);
        
      } else {
        console.log('There was a problem with the request');
      }
    }
  }; 
  request.send();

}

document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('pokedex');
  form.addEventListener('submit', function() {
    addToPokedex(event);
    fetchPokemon(event);
  });
});