


#### Understand Where an Object’s Prototype Comes From
`Dog.prototype.isPrototypeOf(beagle)`

#### Understand the Prototype Chain
`Object.prototype.isPrototypeOf(Dog.prototype);`

#### Inherit Behaviors from a Supertype
`let duck = Object.create(Animal.prototype);`

#### Set the Child's Prototype to an Instance of the Parent
`Dog.prototype = Object.create(Animal.prototype)`

#### Reset an Inherited Constructor Property
#### Use a Mixin to Add Common Behavior Between Unrelated Objects
#### Use Closure to Protect Properties Within an Object from Being Modified Externally
```js
function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
```