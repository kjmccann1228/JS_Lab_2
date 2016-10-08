" use strict ";

  var Pet = function(petName)
  {
    this.name = petName;
    this.setName = function(newPetName)
    {
      this.petName = newPetName;
    }
    this.getName = function getName()
    {
      return this.name;
    }
    this.speak = function speak()
    {
      return "I identify as a pet.";
    }
    this.drink = function drink(numDrinks)
    {
      var lapping = "";
      for(var i=0; i<numDrinks ; i++)
      {
        lapping += "lap ";
      }
      return lapping;
    }
  }

  var Cat = function(petName)
  {
    Pet.call(this, petName);
    this.speak = function()
    {
      return "Meow";
    }
  }
  Cat.prototype = new Pet();
  /* Cat.prototype.speak = function speak()
  {
    return "Meow";
  } */

  var Dog = function(petName)
  {
    Pet.call(this, petName);
    this.speak = function()
    {
      return "Woof";
    }
  }
  Dog.prototype = new Pet();
  /*Dog.prototype.speak = function speak()
  {
    return "Woof";
  }*/


  var Bird =function Bird(petName)
  {
    Pet.call(this, petName);
    this.speak = function()
    {
      return "Caw!"
    }

  }
  Bird.prototype = new Pet();


  function PetChat(){
    var display = document.getElementById("display");
    var numPets = null;
    var allPets = [];
    var askHowMany = function(){
      return prompt("How many pets do you have?");
    };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      console.log("WE HERE");
      var theName = prompt("What is pet #" + (i+1) + "'s name'?");
      switch(type.toUpperCase())
      {
        case "CAT": var pet = new Cat(theName);
          console.log("Got a cat");
          allPets.push(pet);
          break;
        case "DOG": var pet = new Dog(theName);
          allPets.push(pet);
          break;
        case "BIRD": var pet = new Bird(theName);
          allPets.push(pet);
          break;
      }
    }
  }

  var printPetSpeeches = function(){
    var speeches = "";
    console.log(allPets.length);
    for(var i=0; i < allPets.length ; i++)
    {
      textOut= allPets[i].getName() + " says " + allPets[i].speak() + ", and takes a drink. " + allPets[i].drink(i +1);
      speeches += textOut + "<br />";
    }
    display.innerHTML = speeches;
  }

  this.init = function()
  {
    while(numPets === null)
    {
      numPets = askHowMany();
    }

    askPetInfo();
    printPetSpeeches();
  }
};


var chat = new PetChat();
chat.init();
