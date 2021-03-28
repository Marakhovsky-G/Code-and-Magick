document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var QUANTITY_WIZARDS = 4;

var getRandomInt = function(max) {
  min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

var getRandomWizard = function() {
  var randomName = WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)];
  var randomSurname = WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)];
  var randomCoatColors = COAT_COLORS[getRandomInt(COAT_COLORS.length)];
  var randomEyesColor = EYES_COLORS[getRandomInt(EYES_COLORS.length)];
  return {
    fullName: randomName + ' ' + randomSurname,
    coatColor: randomCoatColors,
    eyesColor: randomEyesColor
  }
};

var wizards = [];
for (var i = 0; i < QUANTITY_WIZARDS; i++) {
  wizards[i] = getRandomWizard();
};

for (var i = 0; i < QUANTITY_WIZARDS; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].fullName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}





