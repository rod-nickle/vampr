class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    // climb "up" the tree (using iteration), counting nodes, until the original (no parent) is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const thisVampireNumberOfVampires = this.numberOfVampiresFromOriginal;
    const otherVampireNumberOfVampires = vampire.numberOfVampiresFromOriginal;

    if (thisVampireNumberOfVampires < otherVampireNumberOfVampires) {
      return true;
    }
    return false;
  }


  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let thisCurrentVampire = this;
  
    // Go up the tree for this vampire.
    while (thisCurrentVampire) {
      // Go up the tree for the other vampire.
      let otherCurrentVampire = vampire;
      while (otherCurrentVampire) {
        if (thisCurrentVampire === otherCurrentVampire) {
          return thisCurrentVampire;
        }
        otherCurrentVampire = otherCurrentVampire.creator;
      }
      thisCurrentVampire = thisCurrentVampire.creator;
    }
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }

    for (const vampire of this.offspring) {
      const foundVampire = vampire.vampireWithName(name);

      if (foundVampire) {
        return foundVampire;
      }
    }

    return null;
  }

 
  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDescendentsCount = 0;
    
    totalDescendentsCount += this.offspring.length;
    
    // Use depth first traversal to calculate the total descendents
    for (const vampire of this.offspring) {
      totalDescendentsCount += vampire.totalDescendents;
    }

    return totalDescendentsCount;
  }
  
  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    const millenialConvertedYear = 1980;
    let vampires = [];

    if (this.yearConverted > millenialConvertedYear) {
      vampires.push(this);
    }

    for (const vampire of this.offspring) {
      const millennialVampires = vampire.allMillennialVampires;
      vampires = vampires.concat(millennialVampires);
    }

    return vampires;
  }
}

module.exports = Vampire;

