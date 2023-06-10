const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

// Invited Speakers
const speakers = [{
  id: '1',
  speakerName: ' Ochuba Chukwuemeka',
  speakerImage: 'img/speaker1.jpg',
  speakerPosition: 'Michigan Professor of Data Science and Information system',
  speakerInfo: 'Chukwuemeka studied graphic-based peer design, and published his seminal book: The wealth of Networks in 2006.',
},
{
  id: '2',
  speakerName: ' Kalu Amara',
  speakerImage: 'img/speaker2.png',
  speakerPosition: 'Director of Accounting Department at Harvard',
  speakerInfo: 'Kalu Amara helped bring the internet  marketing to Asia and is an outspoken advocate for open web and digital graphics. In 2012, he was inducted into the inaugural class of the internet society\'s (ISOC) Hall of Fame.',
},
{
  id: '3',
  speakerName: ' Esther Nonye',
  speakerImage: 'img/speaker3.jpg',
  speakerPosition: 'Team lead at Google User Experience and user interaction',
  speakerInfo: 'As the main venue for the new media art production in Google, Nigeria promotes cross disciplinary collaboration and understanding among science technology, humanities and the arts.',
},
{
  id: '4',
  speakerName: ' Adeola James',
  speakerImage: 'img/speaker4.jpg',
  speakerPosition: 'CEO Hotbite Group',
  speakerInfo: 'European integration, political democracy and participation of youth through online as her major changes to EU copyright law was approved by Parliament in July.',
},
{
  id: '5',
  speakerName: ' Izuchukwu Josiah',
  speakerImage: 'img/speaker5.png',
  speakerPosition: 'CEO Okechi Media Conglomerate',
  speakerInfo: 'Izuchukwu Josiah is the Executive Director of the Okechi Media Group, the non profit organization that operates Mediagram. Mediagram is freely available in 290 languages and used by nearly half a billion people around the world every month',
},
{
  id: '6',
  speakerName: ' Olanma Olaide',
  speakerImage: 'img/speaker6.png',
  speakerPosition: 'img/Professor at School of Health Science.',
  speakerInfo: 'Olanma had been leading open-source projects at the Orange Health Science Foundation such as the open source movement.',
}];

const guestSpeakers = document.querySelector('#invited-speakers');
for (let i = 0; i < speakers.length; i += 1) {
  guestSpeakers.innerHTML += `
   
    <article class="speakers-card" aria-label="My Expertise ">
    <div class="speakers-image"><img src="${speakers[i].speakerImage}" alt="language details" /></div> 
    <div class="speakers-details">
         <h3 class="">${speakers[i].speakerName}</h3>
         <h5> ${speakers[i].speakerPosition}</h5>
         <span class="line-bar-speaker"></span>
               <p>${speakers[i].speakerInfo}</p>
    </div>
 </article>
      `;
      const speakerBox = document.querySelectorAll('.speakers-card');
      if (i > 1) {
        speakerBox[i].classList.add('hide-speaker');
      }
}
const moreBtn = document.getElementById('more');
const lessBtn = document.getElementById('less');
const speakerBox = document.querySelectorAll('.speakers-card');
moreBtn.addEventListener('click', () => {
  speakerBox.forEach((speaker) => {
    speaker.classList.remove('hide-speaker');
    moreBtn.classList.add('hide-speaker');
    lessBtn.classList.remove('hide-speaker');
  });
});

lessBtn.addEventListener('click', () => {
  speakerBox.forEach((speaker, index) => {
    if (index > 1) {
      speaker.classList.add('hide-speaker');
    }

    moreBtn.classList.remove('hide-speaker');
    lessBtn.classList.add('hide-speaker');
  });
});