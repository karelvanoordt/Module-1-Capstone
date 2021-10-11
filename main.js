// Object declaration
const speakers = [
   {
       spk: 1,
       spk_img: 'Gaston-1.jpg',
       alt_text: 'Gaston Acurio Photograph',
       name: 'Gaston Acurio',
       title: 'Chef, Writer, TV Host',
       copy: 'Responsible for the rise of Peru gastronomic revolution. His restarurants are well known for their exquisite dishes and also have been worldwide awarded multiple times.'
   },

   {
        spk: 2,
        spk_img:'images/speakers/micha-1.jpeg',
        alt_text: 'Mitsuharu Maido Photograph',
        name: 'Mitsuharu Maido',
        title: 'Chef & Businessman',
        copy: 'Known also as "Micha", is also one of the precursos of perus rise in the culinary industry. His part of the 10-best restaurants in the world: Maido, is famous for its fusion between japanese and peruvian culture. '
    },

    {
        spk: 3,
        spk_img: 'images/speakers/virgilio-1.jpeg',
        alt_text: 'Virgilio Martinez Photograph',
        name: 'Virgilio Martinez',
        title: 'Chef & Creator',
        copy: 'He and his wife lead the young chefs generation in Peru. His deconstruction of highlands cuisine has given his restaurant "Central" the award of best restaurant in South America many times, and also a spot in the best 10 worldwide.'
    },

    {
        spk: 4,
        spk_img: 'images/speakers/pia-1.jpeg',
        alt_text: 'Pia Leon Photograph',
        name: 'Pia Leon',
        title: 'Chef, Businesswoman and ',
        copy: 'Recently laureated as "Worlds best female Chef" for her creations in Kjolle, a peruvian concept restaurant located in one Perus bohemian district Barranco. She is the first of many world-leading chefs to come.'
    },

    {
        spk: 5,
        spk_img: 'images/speakers/palmiro-1.jpeg',
        alt_text: 'Palmiro Ocampo Photograph',
        name: 'Palmiro Ocampo', 
        title: 'Chef, Philantropist and UNICEF embassador',
        copy: 'Has traveled around the world developing sustainable ways to to attack hunger. Back in 2014 he was chosen to lead Perus top food festival "Mistura".'
    },
]

// Work Cards 

const speakersContainer = document.getElementById('speakers-container');
const final = document.getElementById('final');

speakers.forEach((dynamicSpeakers) => { 
   // Speaker Card
   const speakerCard = document.createElement('div');
   speakerCard.classList.add('speaker-card');
   speakersContainer.appendChild(speakerCard);

   // Speaker Image
   const speakerImg = document.createElement('img');
   speakerImg.classList.add('speaker-image');
   speakerImg.setAttribute('src', speakers.spk_img);
   speakerCard.appendChild(speakerImg);

   // Speaker Name
   const speakerName = document.createElement('h2');
   speakerName.classList.add('speaker-name');
   speakerName.textContent = speakers.name;
   speakerCard.appendChild(speakerName);

   // Speaker Title
   const speakerTite = document.createElement('h3');
   speakerTite.classList.add('speaker-title');
   speakerTite.textContent = speakers.title;
   speakerCard.appendChild(speakerTite);

   // Separator
   const cardSeparator = document.createElement('hr');
   cardSeparator.classList.add('card-separator');
   speakerCard.appendChild(cardSeparator);

   // Speaker Copy
   const speakerCopy = document.createElement('p');
   speakerCopy.classList.add('speaker-copy');
   speakerCopy.textContent = speakers.copy;
   speakerCard.appendChild(speakerCopy);
});




