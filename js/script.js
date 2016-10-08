" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var textOut = type + " " + name + "<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function()
  {
    while(numPets === null)
    {
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

function Pet(petName)
{
  this.petName = petName;
  setName = function(newPetName)
  {
    this.newPetName = n;
  }
  getName = function()
  {
    return this.petName;
  }
  speak = function()
  {
    display.innerHTML("");
  }
}

function Cat(name)
{
  Pet.call(this, name);
  speak = function()
  {
    display.innerHTML("Meow");
  }
}
Cat.prototype = new Pet;

function Dog()
{
  Pet.call(this, name);
  this.speak = function()
  {
    display.innerHTML("Woof");
  }
}
Dog.prototype = new Pet;

function Bird()
{
  Pet.call(this, name);
  this.speak = function()
  {
    display.innerHTML("Caw")
  }
}
Bird.prototype = new Pet;

var chat = new PetChat();
chat.init();
