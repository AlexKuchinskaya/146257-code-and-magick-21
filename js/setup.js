'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_COAT = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

const getRandomParameter = function (arr) {
  let randomFeature = arr[Math.round(Math.random() * arr.length)];
  return randomFeature;
};

let getWizardArray = function () {
  let wizardsArray = [];
  for (let i = 0; i < 4; i++) {
    wizardsArray.push({
      name: getRandomParameter(WIZARD_NAMES) + ` ` + getRandomParameter(WIZARD_SURNAMES),
      eyesColor: getRandomParameter(WIZARD_EYES),
      coatColor: getRandomParameter(WIZARD_COAT)
    });
  }
  return wizardsArray;
};
const wizards = getWizardArray();

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};
const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
