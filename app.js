const countryApi = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => countryData(data));
};
countryApi();
const countryData = (contries) => {
  //console.log(contries);
  const countryList = document.getElementById("country-list");
  contries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("display-grid");
    div.innerHTML = `
        <h4>Country Name:${country.name}</h4>
        <p>Country Region:${country.region}</p>
        <button onclick="loadCountryName('${country.name}')">Details Info</button>
        `;
        countryList.appendChild(div);
        
  });
};

const loadCountryName = (sname) =>{
const url = `https://restcountries.eu/rest/v2/name/${sname}`
fetch(url)
.then(res => res.json())
.then(data => countryDetails(data[0]))
}

const countryDetails = country =>{
   // console.log(country);
const countryDetails = document.getElementById('country-details')
window.scrollTo(0,40)
countryDetails.innerHTML = `
<h2>${country.name}</h2>
<img style="width:15em" src="${country.flag}"/>
<h3>Currency: ${country.currencies[0].code}</h3>
<p>Language:${country.languages[0].name}</p>
<p>Native Name:${country.languages[0].nativeName}</p>
<p>Population:${country.population}</p>
`
}
