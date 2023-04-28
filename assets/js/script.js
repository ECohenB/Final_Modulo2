const selectDigimon = document.querySelector('#select-digimon');
const digimonTableBody = document.querySelector('#digimon-table tbody');

    // Obtener los datos de la API de Digimon
  fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {
    // Crear las opciones del elemento de selección a partir de los nombres de los Digimon
const digimonNames = data.map(digimon => digimon.name);
const options = digimonNames.map(name => `<option value="${name}">${name}</option>`);
selectDigimon.innerHTML += options.join('');

  // Agregar un event listener al elemento de selección
selectDigimon.addEventListener('change', () => {
  const selectedDigimon = selectDigimon.value;
  const filteredDigimon = data.filter(digimon => digimon.name === selectedDigimon);
  displayDigimonDetails(filteredDigimon[0]);
  });
  })
    .catch(error => console.error(error));
function displayDigimonDetails(digimon) {
  digimonTableBody.innerHTML = '';
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${digimon.name}</td>
    <td>${digimon.level}</td>
    <td><img src="${digimon.img}" alt="${digimon.name}"></td>`;
  digimonTableBody.appendChild(tr);
  }
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
  var toast = new bootstrap.Toast(toastLiveExample)
  toast.show()
  })
  }   

    