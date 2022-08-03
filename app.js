fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countryList')
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i]; 
        const div = document.createElement('div')
       div.className = 'country';

        // const h3 = document.createElement('h3')
        // h3.innerText = country.name.common;
        // const p = document.createElement('p')
        // p.innerText = country.capital;
        //  div.appendChild(h3)
        //  div.appendChild(p)

       const countryInfo = `
       <h3 class = 'country-name'>${ country.name.common}</h3>
       <p>${country.capital}</p>
       <button onclick = "countryDetails('${country.name.common}')"> Details </button>
       `
         div.innerHTML = countryInfo;
         countriesDiv.appendChild(div)
        
    }
}

const countryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))

    const renderCountryInfo = country => {
        const countryDetails = document.getElementById('countryDetails');
        countryDetails.innerHTML = `
        <h3> ${country.name.common}</h3>
        <p> ${country.population}</p>
        <p>${country.area}</p>
        <img src= "${country.flags.png}">
        `
    }
}
