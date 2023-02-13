const laligaTeams = [
    {
        name: "Athletic Bilbao",
        location: "Bilbao",
        topScorer: "Telmo Zarra",
        value: "261M",
        photo: "https://styles.redditmedia.com/t5_2uh3p/styles/communityIcon_lf3sibfdfoa81.png",
    },
    {
        name: "Atlético Madrid",
        location: "Madrid",
        topScorer: "Luis Aragonés",
        value: "1.5B",
        photo: "https://www.planetsport.com/image-library/square/500/a/atletico-madrid-europa-league-16-may-2018.jpg",
    },
    {
        name: "Barcelona",
        location: "Barcelona",
        topScorer: "Lionel Messi",
        value: "4.76B",
        photo: "https://www.planetsport.com/image-library/square/500/b/barcelona-camp-nou-march-2015.jpg",
    },
    {
        name: "Getafe",
        location: "Getafe",
        topScorer: "Jorge Molina",
        value: "32M",
        photo: "https://m.media-amazon.com/images/I/61pH57UehTL._AC_.jpg",
    },
    {
        name: "Real Madrid",
        location: "Madrid",
        topScorer: "Cristiano Ronaldo",
        value: "5.1B",
        photo: "https://www.planetsport.com/image-library/square/500/r/real-madrid-crest.jpg",
    },
    {
        name: "Sevilla",
        location: "Sevilla",
        topScorer: "Frédéric Kanouté",
        value: "316M",
        photo: "https://www.planetsport.com/image-library/square/500/s/sevilla-fc-ramon-pizjuan-ground-view.jpg",
    },
    {
        name: "Levante",
        location: "Levante",
        topScorer: "Roger Martí",
        value: "102M",
        photo: "https://s.yimg.com/cv/apiv2/default/soccer/20181127/500x500/Levante_wbg.png",
    },
    {
        name: "Villarreal",
        location: "Villarreal",
        topScorer: "Gerard Moreno",
        value: "123M",
        photo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
    },
    
];

const container = document.querySelector(".container");

for (let laligaTeam of laligaTeams) {
    const teamEl = document.createElement("div");
    teamEl.classList.add("box");

    const photoEl = document.createElement("img");
    photoEl.src = laligaTeam.photo;
    photoEl.alt = laligaTeam.name;
    photoEl.classList.add("img");

    const nameEl = document.createElement("p");
    nameEl.innerText = laligaTeam.name;
    nameEl.classList.add("name");

    const locationEl = document.createElement("p");
    locationEl.innerText = "Location: " + laligaTeam.location;

    const topScorerEl = document.createElement("p");
    topScorerEl.innerText = "Top Scorer: " + laligaTeam.topScorer;

    const valueEl = document.createElement("p");
    valueEl.innerText = "Team Value: " + laligaTeam.value;

    teamEl.append(photoEl, nameEl, locationEl, topScorerEl, valueEl);

    container.appendChild(teamEl);
}