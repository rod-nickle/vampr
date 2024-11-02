const Vampire = require("./vampire");

original = new Vampire("Original", 1900);
ansel = new Vampire("Ansel", 1930);
bart = new Vampire("Bart", 1932);
elgort = new Vampire("Elgort", 1960);
sarah = new Vampire("Sarah", 1981);
andrew = new Vampire("Andrew", 2000);

original.addOffspring(ansel);
original.addOffspring(bart);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
elgort.addOffspring(andrew);

// console.log("Orginal: ", original);
// console.log("Ansel: ", ansel);
// console.log("Elgort: ", elgort);

// console.log("Orginal: ", original.numberOfOffspring);
// console.log("Ansel: ", ansel.numberOfOffspring);
// console.log("Elgort: ", elgort.numberOfOffspring);

// console.log("Orginal: ", original.numberOfVampiresFromOriginal);
// console.log("Ansel: ", ansel.numberOfVampiresFromOriginal);
// console.log("Elgort: ", elgort.numberOfVampiresFromOriginal);

// console.log("Orginal and Ansel ", original.isMoreSeniorThan(ansel));
// console.log("Ansel and Bart: ", ansel.isMoreSeniorThan(bart));
// console.log("Elgort and Ansel: ", elgort.isMoreSeniorThan(ansel));
// console.log("Bart and Andrew: ", bart.isMoreSeniorThan(andrew));

// * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
// * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
// console.log("Ansel and Ansel: ", ansel.closestCommonAncestor(ansel));
// console.log("Ansel and Sarah: ", ansel.closestCommonAncestor(sarah));
// console.log("Ansel and Andrew: ", ansel.closestCommonAncestor(andrew));
// console.log("Ansel and Bart: ", ansel.closestCommonAncestor(bart));
// console.log("Sarah and Bart: ", sarah.closestCommonAncestor(bart));
 
// console.log("Orginal: ", original.getAncestors());
// console.log("Ansel: ", ansel.getAncestors());
// console.log("Elgort: ", elgort.getAncestors());

// console.log(original.vampireWithName("Original"))
// console.log(original.vampireWithName("Andrew"))

// console.log(original.totalDescendents);
// console.log(ansel.totalDescendents);
// console.log(andrew.totalDescendents);

console.log(original.allMillennialVampires);