const week = 10080;
const day = 1440;
const hour = 60;


const buildAuto = 2190;

if (buildAuto % week >= 1) {
        console.log(`${Math.floor(buildAuto/week)}w ${Math.floor(buildAuto % week/day)} d`)
} 

else if (buildAuto % day >=1){
        console.log(`${Math.floor(buildAuto/day)}d ${Math.floor(buildAuto % week/hour)} h`)
}

else if (buildAuto % hour >=1){
        console.log(`${Math.floor(buildAuto/hour)}h ${Math.floor(buildAuto % week/hour)} h`)

}

console.log()


















const obj = {
    name: 'Boris',
    hobby: 'skatebording',
    viewHobby: () => console.log(obj.hobby)
}
obj.viewHobby()

const obj1 = {
    name: 'John',
    hobby: 'surfing',
    viewHobby: () => console.log(obj1.hobby)
}
obj1.viewHobby()

const obj2 = {
    name: 'Alex',
    hobby: 'music',
    viewHobby: () => console.log(obj2.hobby)
}
obj2.viewHobby()

const obj3 = {
    name: 'Sarah',
    hobby: 'cooking',
    viewHobby: () => console.log(obj3.hobby)
}
obj3.viewHobby()

const obj4 = {
    name: 'Jamie',
    hobby: 'coding',
    viewHobby: () => console.log(obj4.hobby)
}
obj4.viewHobby()



const vara = 'frig';
switch (vara) {
    case "cald":
    console.log(`Vara este ${vara}`)
    break;
    case "luminoasa":
    console.log(`Vara este ${vara}`)
    break;
    case "verde":
    console.log(`Vara este ${vara}`)
    break;
    default:
        console.log('Nu este denumire de anotimp')
}

class Animals {
    constructor(options) {
        this.paws = options.paws
        this.tails = options.tails
        this.food = options.food
  }
}

const animals = new Animals({paws: 4, tails: 1, food: 'carnivore'})
console.log (animals)

class Cat extends Animals {
    constructor(options) {
        super(options)
        this.favfood = options.favfood
        this.toys = options.toys
        this.hobby = options.hobby
    }
}

const siamese = new Cat({paws: 4, tails: 1, food: 'carnivore', favfood: 'whiskas', toys: 'humans', hobby: 'sratching'})
console.log(animals)
console.log(siamese)

class Dog extends Animals {
    constructor(options) {
        super(options)
        this.favfood = options.favfood
        this.toys = options.toys
        this.hobby = options.hobby
    }
}

const pug = new Dog({paws: 4, tails: 1, food: 'carnivore', favfood: 'everything', toys: 'furniture', hobby: 'farting'})
console.log(animals)
console.log(pug)