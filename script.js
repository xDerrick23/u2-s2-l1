class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    static isSameAge(ageA, ageB) {
        return ageA.age === ageB.age;
    }

    isSameAgeInstance(ageToCompare) {
        return this.age === ageToCompare.age
    }

  
}
 console.log(User)

 function users() {
      const user1 = new User ("Aldo", "Baglio", 58, "Palermo");
      console.log(user1);

      const user2 = new User("Giacomo", "Poretti", 54, "Milano");
      console.log(user2);

      if (user1.age < user2.age) {
        return console.log(
            user1.firstName + "è più giovane di" + user2.firstName
        );
      } else {
        return console.log(
            user1.firstName + " è più vecchio di " + user2.firstName
        );
      }
 }

users();

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
}

  