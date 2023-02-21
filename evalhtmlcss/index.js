const btnAfficherPlus = document.getElementById('btn-afficher-plus');
const commentaireSupplementaire = document.querySelector('.commentaireSupp');

btnAfficherPlus.addEventListener('click', () => {
  commentaireSupplementaire.classList.toggle('hidden');
  btnAfficherPlus.textContent = commentaireSupplementaire.classList.contains('hidden') ? 'Afficher plus de commentaires' : 'Fermer les commentaires';
});



const selectInfos = document.getElementById('infos');

selectInfos.addEventListener('change', (event) => {
  const tarif = event.target.value;

  let prix;

  switch (tarif) {
    case '0':
      prix = '10 000 euros';
      break;
    case '1':
      prix = '20 000 euros';
      break;
    case '2':
      prix = '30 000 euros';
      break;
    case '3':
      prix = '40 000 euros';
      break;
    case '4':
      prix = '50 000 euros';
      break;
    default:
      prix = '';
      break;
  }

  if (tarif === 'info') {
    return;
  }
  alert(`Le prix pour cette destination est de ${prix}`);
});

const image = document.querySelector('.alexia');
const originaleSrc = image.src;
const newSrc = 'artificial-intelligence.jpg';

image.addEventListener('mouseover', () => {
  image.src = newSrc;
});

image.addEventListener('mouseout', () => {
  image.src = originaleSrc;
});



