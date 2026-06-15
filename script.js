let html = ``;
let container = document.getElementById('countries');

async function loadCountries() {
    const url = "countries.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const countries = await response.json();

        countries.forEach(country => {
            html += `
            <div class="country-card">
             <img src="${country.flags.png}" class="countryflag">
             <h2>${country.name.common}</h2>
             <p class="population"><strong><i class="fa-solid fa-users"></i> Population: </strong> ${country.population.toLocaleString()}</p>
             <p class="region"><strong><i class="fa-solid fa-earth-americas"></i> Region: </strong> ${country.region}</p>
             <p class="capital"><strong><i class="fa-solid fa-building"></i> Capital: </strong>${country.capital}</p>
             <p class="area"><strong><i class="fa-solid fa-chart-area"></i> Area: </strong>${country.area.toLocaleString()} km²</p>
             <p class="language"><strong><i class="fa-solid fa-language"></i> Language: </strong>${country.language}</p>
             <p class="currency"><strong><i class="fa-solid fa-money-bill-wave"></i> Currency: </strong>${country.currency.name} (${country.currency.symbol})</p>
             <p class="timezone"><strong><i class="fa-solid fa-clock"></i> Timezone: </strong>${country.timezone}</p>
            </div>
        `;
        })

        container.innerHTML = html;
        console.log(countries);
    } catch (error) {
        console.error(error.message);
    }
}

loadCountries();

const themeBtn = document.querySelector('.theme-btn');
const themeIcon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        themeIcon.className = 'fa-regular fa-moon';
    }
});