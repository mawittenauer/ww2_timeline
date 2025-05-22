const map = L.map('map').setView([48.8566, 2.3522], 5); // Centered on Europe

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxzoom: 19,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

const locations = [
  {
    "title": "Japan invades China",
    "date": "July 7, 1937",
    "coordinates": [39.9042, 116.4074],
    "description": "On July 7, 1937, Japan launched a full-scale invasion of China, starting with the Marco Polo Bridge Incident, marking the beginning of the Second Sino-Japanese War."
  },
  {
    "title": "Germany annexes Austria (Anschluss)",
    "date": "March 12, 1938",
    "coordinates": [48.2082, 16.3738],
    "description": "On March 12, 1938, Germany annexed Austria into the Third Reich in a largely unopposed move, violating the Treaty of Versailles and setting the stage for further expansion."
  },
  {
    "title": "Germany occupies Czechoslovakia",
    "date": "March 15, 1939",
    "coordinates": [50.0755, 14.4378],
    "description": "On March 15, 1939, Germany invaded and occupied the remaining parts of Czechoslovakia, breaking the Munich Agreement and increasing tensions in Europe."
  },
  {
    "title": "Germany invades Poland",
    "date": "September 1, 1939",
    "coordinates": [52.2297, 21.0122],
    "description": "Germany invaded Poland on September 1, 1939, marking the official start of World War II. The UK and France declared war on Germany two days later."
  },
  {
    "title": "Soviet Union invades Eastern Poland",
    "date": "September 17, 1939",
    "coordinates": [51.9194, 19.1451],
    "description": "On September 17, 1939, the Soviet Union invaded Poland from the east, in accordance with the secret protocols of the Molotov-Ribbentrop Pact signed with Germany."
  },
  {
    "title": "Germany invades France and the Low Countries",
    "date": "May 10, 1940",
    "coordinates": [48.8566, 2.3522],
    "description": "On May 10, 1940, Germany launched a blitzkrieg against France, Belgium, the Netherlands, and Luxembourg. German forces bypassed the Maginot Line, quickly overwhelming Allied defenses."
  },
  {
    "title": "France signs armistice with Germany",
    "date": "June 22, 1940",
    "coordinates": [47.904, 1.9093],
    "description": "On June 22, 1940, following the German victory in the Battle of France, the French government signed an armistice, resulting in German occupation of the north and west of France."
  },
  {
    "title": "Germany invades the Soviet Union (Operation Barbarossa)",
    "date": "June 22, 1941",
    "coordinates": [55.7558, 37.6173],
    "description": "On June 22, 1941, Germany launched Operation Barbarossa, a massive and brutal invasion of the Soviet Union, opening the Eastern Front and breaking the non-aggression pact."
  },
  {
    "title": "Attack on Pearl Harbor",
    "date": "December 7, 1941",
    "coordinates": [21.3069, -157.8583],
    "description": "On December 7, 1941, Japan attacked the U.S. naval base at Pearl Harbor in Hawaii, drawing the United States into World War II."
  },
  {
    "title": "D-Day: Allied Invasion of Normandy",
    "date": "June 6, 1944",
    "coordinates": [49.3228, -0.621],
    "description": "On June 6, 1944, Allied forces stormed the beaches of Normandy, France, launching Operation Overlord and beginning the liberation of Western Europe from Nazi control."
  },
  {
    "title": "Victory in Europe Day (VE Day)",
    "date": "May 8, 1945",
    "coordinates": [52.52, 13.405],
    "description": "On May 8, 1945, the Allies accepted Nazi Germany’s unconditional surrender, marking the end of World War II in Europe."
  },
  {
    "title": "Atomic bombing of Hiroshima",
    "date": "August 6, 1945",
    "coordinates": [34.3853, 132.4553],
    "description": "On August 6, 1945, the United States dropped the first atomic bomb on the Japanese city of Hiroshima, causing massive destruction and loss of life."
  },
  {
    "title": "Atomic bombing of Nagasaki",
    "date": "August 9, 1945",
    "coordinates": [32.7503, 129.8777],
    "description": "On August 9, 1945, the United States dropped a second atomic bomb on Nagasaki. Combined with the devastation of Hiroshima, this led to Japan’s surrender."
  },
  {
    "title": "Japan formally surrenders (VJ Day)",
    "date": "September 2, 1945",
    "coordinates": [35.6762, 139.6503],
    "description": "On September 2, 1945, Japan officially surrendered aboard the USS Missouri, ending World War II entirely."
  },
  {
    "title": "Battle of Britain",
    "date": "July 10, 1940",
    "coordinates": [51.5074, -0.1278],
    "description": "From July to October 1940, the Royal Air Force defended the UK against massive German air assaults in the first all-air battle in history. Britain's victory ended Hitler's plans for a seaborne invasion and demonstrated that air power alone could decide a campaign."
  },
  {
    "title": "Siege of Leningrad",
    "date": "September 8, 1941",
    "coordinates": [59.9311, 30.3609],
    "description": "The Siege of Leningrad lasted nearly 900 days, resulting in the deaths of over a million civilians due to starvation, disease, and bombardment. The city's endurance became a powerful symbol of Soviet resistance."
  },
  {
    "title": "Battle of Stalingrad",
    "date": "July 17, 1942",
    "coordinates": [48.708, 44.5133],
    "description": "The Battle of Stalingrad marked the turning point in the Eastern Front. The Soviet Union decisively defeated the German Army, halting its advance into the USSR and beginning a long counter-offensive toward Berlin."
  },
  {
    "title": "Battle of the Bulge",
    "date": "December 16, 1944",
    "coordinates": [50.0, 6.0],
    "description": "The last major German offensive campaign on the Western Front, the Battle of the Bulge saw surprise attacks through the Ardennes that nearly split Allied lines. Stubborn American resistance turned the tide."
  },
  {
    "title": "Battle of Midway",
    "date": "June 4, 1942",
    "coordinates": [28.2, -177.35],
    "description": "The Battle of Midway was a crucial naval battle in the Pacific Theater. American forces, through code-breaking, ambushed and sank four Japanese aircraft carriers, halting Japan’s expansion and turning the tide of the war in the Pacific."
  },
  {
    "title": "Second Battle of El Alamein",
    "date": "October 23, 1942",
    "coordinates": [30.8333, 28.95],
    "description": "British forces under General Montgomery defeated the Afrika Korps led by Rommel. This victory in Egypt forced Axis forces to retreat across North Africa and secured the Suez Canal."
  }
];

const locationList = document.getElementById('location-list');

locations.forEach(location => {
    // Create marker
    const marker = L.marker(location.coordinates)
        .addTo(map)
        .bindPopup(`<b>${location.title}</b><br>${location.date}`);

    // Create sidebar entry
    const locationElement = document.createElement('div');
    locationElement.className = 'location-details';
    locationElement.setAttribute('data-coordinates', location.coordinates.join(','));
    locationElement.innerHTML = `
        <div class="location-title">${location.title}</div>
        <div class="location-date">${location.date}</div>
        <div class="location-description">${location.description}</div>
    `;

    // Function to handle highlighting active location
    const setActiveLocation = (element) => {
        // Remove active class from all locations
        document.querySelectorAll('.location-details').forEach(el => {
            el.classList.remove('active');
        });
        // Add active class to clicked location
        element.classList.add('active');
    };

    // Add click handler to sidebar entry
    locationElement.addEventListener('click', () => {
        map.setView(location.coordinates, 6);
        marker.openPopup();
        setActiveLocation(locationElement);
    });

    // Add click handler to marker
    marker.on('click', () => {
        setActiveLocation(locationElement);
        locationElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    locationList.appendChild(locationElement);
});
