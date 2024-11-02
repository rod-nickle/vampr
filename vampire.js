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
    // If they are the same vampire, exit immediately.
    if (this.name === vampire.name) {
      return this;
    }

    let thisCurrentVampire = this;
  

    // Go up the tree for this vampire.
    while (thisCurrentVampire) {
      // Go up the tree for the other vampire.
      let otherCurrentVampire = vampire;
      while (otherCurrentVampire) {
        if (thisCurrentVampire.name === otherCurrentVampire.name) {
          return thisCurrentVampire;
        }
        otherCurrentVampire = otherCurrentVampire.creator;
      }
      thisCurrentVampire = thisCurrentVampire.creator;
    }
  }
}

module.exports = Vampire;

