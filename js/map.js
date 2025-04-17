const map = L.map('map').setView([48.8566, 2.3522], 3); // Centered on Europe

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// WWII Events
const ww2Events = [
    {
        lat: 52.2297, lng: 21.0122,
        title: "Germany Invades Poland",
        date: "Sept 1, 1939",
        description: "Germany invades Poland, starting World War II."
    },
    {
        lat: 48.8566, lng: 2.3522,
        title: "France Signs Armistice",
        date: "June 22, 1940",
        description: "France surrenders to Germany after the Battle of France."
    },
    {
        lat: 55.7558, lng: 37.6173,
        title: "Operation Barbarossa",
        date: "June 22, 1941",
        description: "Germany invades the Soviet Union, breaking their non-aggression pact."
    },
    {
        lat: 21.3069, lng: -157.8583,
        title: "Attack on Pearl Harbor",
        date: "Dec 7, 1941",
        description: "Japan attacks Pearl Harbor, bringing the U.S. into WWII."
    },
    {
        lat: 49.3228, lng: -0.6210,
        title: "D-Day: Normandy Landings",
        date: "June 6, 1944",
        description: "Allied forces begin the liberation of Western Europe."
    },
    {
        lat: 34.3853, lng: 132.4553,
        title: "Hiroshima Bombing",
        date: "Aug 6, 1945",
        description: "First atomic bomb dropped by the U.S. on Japan."
    },
    {
        lat: 32.7503, lng: 129.8777,
        title: "Nagasaki Bombing",
        date: "Aug 9, 1945",
        description: "Second atomic bomb dropped, leading to Japanese surrender."
    },
    {
        lat: 35.6762, lng: 139.6503,
        title: "Japan Surrenders",
        date: "Sept 2, 1945",
        description: "Japan formally surrenders aboard the USS Missouri."
    }
];

// Add markers to the map
ww2Events.forEach(event => {
L.marker([event.lat, event.lng])
    .addTo(map)
    .bindPopup(`<strong>${event.title}</strong><br>${event.date}<br><p>${event.description}</p>`);
});
