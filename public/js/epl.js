const eplTeams = [
    {
        name: "Arsenal",
        location: "London (Holloway)",
        topScorer: "Thierry Henry",
        value: "2.3B",
        photo: "https://www.planetsport.com/image-library/partners/rival/square/500/a/arsenal-defender-william-saliba-joins-nice-on-loan-for-rest-2a9def-sc.jpg",
    },
    {
        name: "Aston Villa",
        location: "Birmingham",
        topScorer: "Gabriel Agbonlahor",
        value: "198M",
        photo: "https://www.planetsport.com/image-library/square/500/v/villa-park-aston-villa-ground-view.jpg",
    },
    {
        name: "Bournemouth",
        location: "Bournemouth",
        topScorer: "Joshua King",
        value: "100M",
        photo: "https://www.planetsport.com/image-library/square/500/a/afc-bournemouth-december-2015.jpg",
    },
    {
        name: "Brighton & Hove Albion",
        location: "Brighton",
        topScorer: "Glenn Murray",
        value: "149M",
        photo: "https://www.planetsport.com/image-library/square/500/b/brighton-fans-outside-amex-august-2021.jpg",
    },
    {
        name: "Chelsea",
        location: "London",
        topScorer: "Frank Lampard",
        value: "2.5B",
        photo: "https://www.planetsport.com/image-library/square/500/s/stamford-bridge-ground-view-corner-flag.jpg",
    },
    {
        name: "Crystal Palace",
        location: "London (Shelhurst)",
        topScorer: "Wilfried Zaha",
        value: "187M",
        photo: "https://www.planetsport.com/image-library/square/500/s/selhurstparkcrystalpalaceview.jpg",
    },
    {
        name: "Everton",
        location: "Liverpool (Walton)",
        topScorer: "Romelu Lukaku",
        value: "392M",
        photo: "https://www.planetsport.com/image-library/square/500/e/everton-crest-goodison-park-stock.jpg",
    },
    {
        name: "Fulham",
        location: "London (Fulham)",
        topScorer: "Clint Dempsey",
        value: "123M",
        photo: "https://www.planetsport.com/image-library/square/500/a/a-general-view-of-a-corner-flag-on-the-pitch-ahead-of-the-premier-league-match-at-craven-cottage-london-picture-date-friday-april-9-2021.jpg",
    },
    {
        name: "Leeds United",
        location: "Leeds",
        topScorer: "Mark Viduka",
        value: "209M",
        photo: "https://www.planetsport.com/image-library/square/500/e/elland-road-stadium-front.jpg",
    },
    {
        name: "Leicester City",
        location: "Leicester",
        topScorer: "Jamie Vardy",
        value: "355M",
        photo: "https://www.planetsport.com/image-library/square/500/l/leicester-city-premier-league-trophy-5-may-2016.jpg",
    },
    {
        name: "Liverpool",
        location: "Liverpool (Anfield)",
        topScorer: "Robbie Fowler",
        value: "3.1B",
        photo: "https://www.planetsport.com/image-library/square/500/l/liverpool-squad.jpg",
    },
    {
        name: "Manchester City",
        location: "Manchester",
        topScorer: "Sergio Aguero",
        value: "2.9B",
        photo: "https://www.planetsport.com/image-library/square/500/m/manchester-city-manager-pep-guardiola-with-202122-premier-league-trophy-may22.jpg",
    },
    {
        name: "Newcastle United",
        location: "Newcastle upon Tyne",
        topScorer: "Alan Shearer",
        value: "202M",
        photo: "https://www.planetsport.com/image-library/square/500/n/newcastle-united-supporters-stock.jpg",
    },
    {
        name: "Tottenham Hotspur",
        location: "London (Tottenham)",
        topScorer: "Harry Kane",
        value: "2.1B",
        photo: "https://www.planetsport.com/image-library/square/500/s/spurs-crest.jpg",
    },
    {
        name: "West Ham United",
        location: "London (Stratford)",
        topScorer: "Michail Antonio",
        value: "374M",
        photo: "https://www.planetsport.com/image-library/square/500/w/west-ham-tunnel.jpg",
    },
    {
        name: "Wolverhampton Wanderers",
        location: "Wolverhampton",
        topScorer: "Raul Jimenez",
        value: "176M",
        photo: "https://www.planetsport.com/image-library/partners/rival/square/500/t/the-challenges-awaiting-bruno-lage-at-molineux-as-new-boss-t-4d3632-sc.jpg",
    },
    {
        name: "West Bromwich Albion",
        location: "West Bromwich",
        topScorer: "Peter Odemwingie",
        value: "82M",
        photo: "https://www.planetsport.com/image-library/partners/rival/square/500/g/goalkeeper-josh-griffiths-signs-new-four-year-contract-at-we-5372d9-sc.jpg",
    },
    {
        name: "Southampton",
        location: "Southampton",
        topScorer: "Matt Le Tissier",
        value: "153M",
        photo: "https://www.planetsport.com/image-library/square/500/s/st-marys-stadium-august-2019.jpg",
    }
];

const container = document.querySelector(".container");

for (let eplTeam of eplTeams) {
    const teamEl = document.createElement("div");
    teamEl.classList.add("box");

    const photoEl = document.createElement("img");
    photoEl.src = eplTeam.photo;
    photoEl.alt = eplTeam.name;
    photoEl.classList.add("img");

    const nameEl = document.createElement("p");
    nameEl.innerText = eplTeam.name;
    nameEl.classList.add("name");

    const locationEl = document.createElement("p");
    locationEl.innerText = "Location: " + eplTeam.location;

    const topScorerEl = document.createElement("p");
    topScorerEl.innerText = "Top Scorer: " + eplTeam.topScorer;

    const valueEl = document.createElement("p");
    valueEl.innerText = "Team Value: " + eplTeam.value;

    teamEl.append(photoEl, nameEl, locationEl, topScorerEl, valueEl);

    container.appendChild(teamEl);
}