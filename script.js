function Person(first, last, age, intrests, img) {
  this.name = {
    'first': first,
    'last': last
  };
  this.age = age;
  this.intrests = intrests;
  this.img = img;
}


let bob = new Person('Bob', "Sponge", 20, ['jellyfish catching', 'Sandy', 'friendship']
"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png")

console.log(bob.img)
document.getElementById("person").src = bob.img

//let patrick = new Person('Patrick', "Star", 20, ['sleeping', 'eating', 'fun'])



//console.log(patrickl.name['first'])
//console.log(patric.age)

function Math(num1, num1, operator) {
  this.num1 = num1;
  this.num2 = num2;
  this.operator = operator;
}

Math.prototype.add = function() {
  return this.num1 + this.num2
}

Math.prototype.subtract = function() {
  return this.num1 - this.num2
}

problem = new Math(1,2, "+")
console.log(problem.add())
console.log(problem.subtract())
