// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// crate a function 
// have it assign new variables that take in value and replaces it with a new value
//return changed string

// a) Create a test with expect statements using the variables provided.
describe("hello", () => {

    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"

 
    it("returns a string that says hiCreate a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
  
      
      expect(no(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(no(secretCodeWord2)).toEqual("Gobbledygook")
      expect(no(secretCodeWord3)).toEqual("Eccentric")
    })
  })




  const no = (str) => {
     a = str.replace(/[a]/gi, '4')
     b = a.replace(/[e]/gi, '5')
     c = b.replace(/[i]/gi, '1')
     return c.replace(/[o]/gi, '0')
  }



const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

//needed to crate a function that iterates through an array 
//uses a for loop to iterate 
//use .find to evaluate the element for matching perimeters 
//return a array 

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

const found = (array) => {
    for (let i = 0; i < array.length; i++){
    array.find(element => 'a')
    }
    return array
}

describe("found", () => {

    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"

 
    it("returns a string that says hiCreate a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
  
      
      expect(found(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
     
    })
  })




// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// I really didnt get this one. I wanted to iterate through the array and setting up a if statement matching the two first values and checking if they are the same
// use the the .map function 
// return a boolean vale 

describe("addUp", () => {

    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]

 
    it("Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind..", () => {
  
      
      expect(addUp(hand1)).toEqual(true)
      expect(addUp(hand2)).toEqual(false)
      expect(addUp(hand3)).toEqual(false)
     
    })
  })


const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const addUp = (array) => {
    for (array.map){
        if i==i 
    }
    return array
}



// b) Create the function that makes the test pass.
