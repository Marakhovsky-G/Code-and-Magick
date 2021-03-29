// 'use strict'
// document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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



var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var popupEscPressHeandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    popupClose();
  }
};
var popupOpen = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHeandler);
};
var popupClose = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHeandler);
};

//Открытие окна
setupOpen.addEventListener('click', function() {
  popupOpen();
});
setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupOpen();
  }
});
//Закрытие окна
setupClose.addEventListener('click', function() {
  popupClose();
});
setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupClose();
  }
});

//Валидация
userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 3-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательно поле');
  } else {
    userNameInput.setCustomValidity('');
  };
});

userNameInput.addEventListener('input', function(evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 3-х символов');
  } else {
    target.setCustomValidity('');
  }
})

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var index = 0;

var coatColorOrder = function () {
  wizardCoat.style.fill = COAT_COLORS[index];
  document.querySelector('.input-coat-color').value = COAT_COLORS[index];
  if (index == COAT_COLORS.length-1) {
    index = 0;
  } else {
    index++;
  };
};

wizardCoat.addEventListener('click', coatColorOrder);


var eyesColorOrder = function () {
  wizardEyes.style.fill = EYES_COLORS[index];
  document.querySelector('.input-eyes-color').value = EYES_COLORS[index];
  if (index == EYES_COLORS.length-1) {
    index = 0;
  } else {
    index++;
  };
};

wizardEyes.addEventListener('click', eyesColorOrder);


var randomFireballColor = function () {
  fireball.style = 'background-color:' + FIREBALL_COLORS[getRandomInt(FIREBALL_COLORS.length)];
  fireball.querySelector('input').value = FIREBALL_COLORS[getRandomInt(FIREBALL_COLORS.length)];
};

fireball.addEventListener('click', randomFireballColor);



