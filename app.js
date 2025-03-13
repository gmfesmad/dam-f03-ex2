const generateForm = document.querySelector("#generate-form");
const keysContainer = document.querySelector("#keys");

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateKey() {
  const numbers = [];
  while (numbers.length < 5) {
    const num = randomNum(1, 50);
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }

  const stars = [];
  while (stars.length < 2) {
    const star = randomNum(1, 12);
    if (!stars.includes(star)) {
      stars.push(star);
    }
  }

  return { numbers, stars };
}

function generateKeys(numKeys) {
  keysContainer.innerHTML = "";

  for (let i = 0; i < numKeys; i++) {
    const key = generateKey();
    const keyHtml = `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Chave ${i + 1}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Números:</strong> ${key.numbers.join(
                ", "
              )}</li>   
              <li class="list-group-item"><strong>Estrelas:</strong> ${key.stars.join(
                ", "
              )}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    keysContainer.insertAdjacentHTML("beforeend", keyHtml);
  }
}

generateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const numKeys = parseInt(event.target.elements["num-keys"].value);
  generateKeys(numKeys);
});
