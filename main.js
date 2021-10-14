// Navigation bar mobile

const navbarMenu = document.querySelector('.navbar-menu');
const openMenu = document.querySelector('.hamburger');
const backdrop = document.querySelector('.backdrop');
const hamburger = document.querySelector('.hamburger');

function open() {
  navbarMenu.classList.remove('display-none');
  backdrop.classList.remove('display-none');
  // hamburger.classList.add('display-none');
}

openMenu.addEventListener('click', open);

const closeMenu = document.getElementById('exit-link');

function close() {
  navbarMenu.classList.add('display-none');
  // hamburger.classList.remove('display-none');
  backdrop.classList.add('display-none');
}

closeMenu.addEventListener('click', close);

const links = document.querySelectorAll('.menu-list-option');
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    navbarMenu.classList.add('display-none');
  });
}

// Object declaration
const speakers = [
  {
    spk: 1,
    pic: 'images/speakers/Gaston-1.jpg',
    alt_text: 'Gaston Acurio Photograph',
    name: 'Gaston Acurio',
    title: 'Chef, Writer, TV Host',
    copy: 'Responsible for the rise of Peru gastronomic revolution. His restarurants are well known for their exquisite dishes and also have been worldwide awarded multiple times.',

  },

  {
    spk: 2,
    pic: 'images/speakers/micha-1.jpg',
    alt_text: 'Mitsuharu Maido Photograph',
    name: 'Mitsuharu Maido',
    title: 'Chef & Businessman',
    copy: 'Known also as "Micha", is also one of the precursos of Perus rise in the culinary industry. His part of the 10-best restaurants in the world: Maido, is famous for its fusion between japanese and peruvian culture. ',
  },

  {
    spk: 3,
    pic: 'images/speakers/virgilio-1.jpg',
    alt_text: 'Virgilio Martinez Photograph',
    name: 'Virgilio Martinez',
    title: 'Chef & Creator',
    copy: 'He and his wife lead the young chefs generation in Peru. His deconstruction of highlands cuisine has given his restaurant "Central" the award of best restaurant in South America many times, and also a spot in the best 10 worldwide.',
  },

  {
    spk: 4,
    pic: 'images/speakers/pia-1.jpg',
    alt_text: 'Pia Leon Photograph',
    name: 'Pia Leon',
    title: 'Chef and Businesswoman ',
    copy: 'Recently laureated as "Worlds best female Chef" for her creations in Kjolle, a peruvian concept restaurant located in one Perus bohemian district Barranco. She is the first of many world-leading chefs to come.',
  },

  {
    spk: 5,
    pic: 'images/speakers/palmiro-1.jpg',
    alt_text: 'Palmiro Ocampo Photograph',
    name: 'Palmiro Ocampo',
    title: 'UNICEF embassador',
    copy: 'Has traveled around the world developing sustainable ways to to attack hunger. Back in 2014 he was chosen to lead Perus top food festival "Mistura".',
  },
];

// Work Cards

const speakersContainer = document.getElementById('speakers-container');
// const final = document.getElementById('final');

speakers.forEach((dynamicSpeakers) => {
  // Speaker Card
  const speakerCard = document.createElement('div');
  speakerCard.classList.add('speaker-card');
  speakersContainer.appendChild(speakerCard);

  // Speaker Image
  const speakerImg = document.createElement('img');
  speakerImg.classList.add('speaker-image');
  speakerImg.setAttribute('src', dynamicSpeakers.pic);
  speakerCard.appendChild(speakerImg);

  // Speaker Name
  const speakerName = document.createElement('h2');
  speakerName.classList.add('speaker-name');
  speakerName.textContent = dynamicSpeakers.name;
  speakerCard.appendChild(speakerName);

  // Speaker Title
  const speakerTite = document.createElement('h3');
  speakerTite.classList.add('speaker-title');
  speakerTite.textContent = dynamicSpeakers.title;
  speakerCard.appendChild(speakerTite);

  // Separator
  const cardSeparator = document.createElement('hr');
  cardSeparator.classList.add('card-separator');
  speakerCard.appendChild(cardSeparator);

  // Speaker Copy
  const speakerCopy = document.createElement('p');
  speakerCopy.classList.add('speaker-copy');
  speakerCopy.textContent = dynamicSpeakers.copy;
  speakerCard.appendChild(speakerCopy);
});
