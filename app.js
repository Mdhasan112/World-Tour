
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data));


const displayCountries = countries  =>{
    console.log(countries)
    const ul = document.getElementById('list');

    for (let i = 0; i < countries.length -1; i++) {
        const country = countries[i];
        console.log(country)

        const li = document.createElement('li');
        li.innerText = country.name.common;
        ul.appendChild(li);
    }
}
