const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []
fetch(endpoint)
  .then(data => data.json())
  .then(data => cities.push(...data))

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatches)

function displayMatches() {
  const query = this.value.toLowerCase()
  const matches = findMatches(query, cities)
  
  const html = matches.map(place => {
    const regex = new RegExp(query, 'gi')
    const city = place.city.replace(regex, `<span class="hl">${query}</span>`)
    const state = place.state.replace(regex, `<span class="hl">${query}</span>`)    
    const population = place.population.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    
    return `
      <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${population}</span>
      </li> 
    `
  }).join('')
  
  suggestions.innerHTML = html;
}

function findMatches(query, cities) {
  return cities.filter(place => {
    const regex = new RegExp(query, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}