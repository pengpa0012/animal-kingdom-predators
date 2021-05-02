const btnsNext = document.querySelectorAll("[data-next]");
const btnsPrev = document.querySelectorAll("[data-prev]");

btnsNext.forEach((btn) => {
  btn.addEventListener("click", nextPage);
});

btnsPrev.forEach((btn) => {
  btn.addEventListener("click", prevPage);
});

const backToFirstBtn = document.querySelector("[data-first]");
backToFirstBtn.addEventListener("click", backToFirst);

function nextPage(e) {
  const currentContent = e.target.closest(".heading");
  const nextContent = document.querySelector(`[${e.target.id}]`);

  nextContent.classList.add("active");
  nextContent.classList.remove("scale");
  currentContent.classList.add("scale");
  popUp.classList.remove("active");
}

function prevPage(e) {
  const currentContent = e.target.closest(".heading");
  const prevContent = document.querySelector(`[${e.target.id}]`);

  prevContent.classList.add("active");
  prevContent.classList.remove("scale");
  currentContent.classList.add("scale");
  popUp.classList.remove("active");
}

function backToFirst() {
  const headings = document.querySelectorAll(".heading");
  headings.forEach((head) => {
    head.classList.remove("scale");
    head.classList.remove("active");
    popUp.classList.remove("active");
  });
}

const infoBtns = document.querySelectorAll("[data-info]");

infoBtns.forEach((btn) => {
  btn.addEventListener("click", popUpGallery);
});

const popUp = document.querySelector(".animal-info-popup");
const animalInfo = popUp.querySelector(".animal-info");
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", closePopUp);

function popUpGallery(e) {
  let animalName = e.target.offsetParent.children[1].textContent;

  const animalStats = [
    {
      name: "TARANTULA",
      sciName: "Theraphosidae",
      type: "arachnid",
      status: "Not extinct",
      lifeSpan: "10+ years",
      speciesCount: "850+ species",
    },
    {
      name: "BLACK MAMBA",
      sciName: "Dendroaspis polylepis",
      type: "snake",
      status: "Not extinct",
      lifeSpan: "11+ years",
      speciesCount: "4 mamba species",
    },
    {
      name: "PIRANHA",
      sciName: "Pygocentrus nattereri",
      type: "Serrasalmidae",
      status: "Not extinct",
      lifeSpan: "10+ years",
      speciesCount: "60 species",
    },
    {
      name: "WOLF",
      sciName: "Canis lupus",
      type: "wild dog like carnivores",
      status: "Least Concern",
      lifeSpan: "14 years",
      speciesCount: "3 main species",
    },
    {
      name: "KOMODO DRAGON",
      sciName: "Varanus komodoensis",
      type: "monitor lizard",
      status: "Vulnerable",
      lifeSpan: "30 years",
      speciesCount: "3,000 lizard species",
    },
    {
      name: "CROCODILE",
      sciName: "Crocodylinae",
      type: "Crocodilia",
      status: "Not Extinct",
      lifeSpan: "at least 30–40 years",
      speciesCount: "13 species",
    },
    {
      name: "KILLER WHALE",
      sciName: "Orcinus orca",
      type: "oceanic dolphin",
      status: "endangered",
      lifeSpan: "10-45 years",
      speciesCount: "3 species",
    },
    {
      name: "GRIZZLY BEAR",
      sciName: "Ursus arctos",
      type: "brown bear",
      status: "Endangered",
      lifeSpan: "20 – 25 years",
      speciesCount: "8 bear species",
    },
    {
      name: "LION",
      sciName: "Panthera leo",
      type: "Felidae",
      status: "Vulnerable",
      lifeSpan: "10 – 14 years",
      speciesCount: "2 subspecies",
    },
    {
      name: "GREAT WHITE SHARK",
      sciName: "Carcharodon carcharias",
      type: "Mackerel shark",
      status: "Vulnerable",
      lifeSpan: "60 years",
      speciesCount: "440+ species",
    },
  ];

  let currentAnimal = animalStats.filter((animal) => {
    return animal.name === animalName;
  });

  animalInfo.innerHTML = `<ul>
                            <li>Scientific Name: 
                              <span>${currentAnimal[0].sciName}</span>
                            </li>
                            <li>Status: 
                              <span>${currentAnimal[0].status}</span>
                            </li>
                            <li>Type: 
                              <span>${currentAnimal[0].type}</span>
                            </li>
                            <li>Life Span: 
                            <span>${currentAnimal[0].lifeSpan}</span>
                            </li>
                            <li>Total Species: 
                              <span>${currentAnimal[0].speciesCount}</span>
                            </li>
                          </ul>`;

  popUp.classList.add("active");
  overlay.classList.add("active");
}

const btnClose = document.querySelector("[data-close]");

btnClose.addEventListener("click", closePopUp);

function closePopUp() {
  popUp.classList.remove("active");
  overlay.classList.remove("active");
}
