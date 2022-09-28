//console logs no jsonData?

// 1. Fetch all countries from the above url, and save the results in a variable
window.addEventListener("DOMContentLoaded", () => {


    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/name/peru");
        const jsonData = await response.json();
        const countriesData = jsonData.data;
        const countriesNames = countriesData.map((country)=>country.name);

        const countryUl = document.querySelector("ul")

        countriesNames.forEach((countryName) => {
            const nameLi = document.createElement("li");
            nameLi.textContent = countryName;
            countryList.appendChild(nameLi);
        })
        }
    })
    // listOfCountries.innerText = jsonData.url;


//     const response = await fetch("https://restcountries.com/v3.1/all")
//     const jsonData = await response.json();


// }

// 3. Generate `li` elements for each country object and add the name of each country to the element's `textContent` value.



// 4. Append the `li` elements to the `ul` element to display a list of country names

// const getCountries = async () => {
//     const countryUrls = []; 
//     for(let i = 1; i < 10; i++){
//         countryUrls.push("https://restcountries.com/v3.1/all");
//     }}

// const countryPromises = countryUrls.map( async (url) => {
//     const response = await fetch(url);
//     return response.json();
// })

// Promise.all(countryPromises).then((allResults)=>{

//     const countriesData = allResults.map((result) => result.data).flat()

//     const countryNames = countriesData.map((country)=>country.name)

//     const countryList = document.querySelector("ul")

//     countryNames.forEach((countryName)=>{
//         const nameLi = document.createElement("li");
//         nameLi.textContent = countryName;
//         countryList.appendChild(nameLi);
// })})}
