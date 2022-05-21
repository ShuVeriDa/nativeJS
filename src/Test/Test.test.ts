import {mult, splitIntoWords, sum} from "./Test";
//data
let a: number
let b: number
let c: number

beforeEach(() =>{
  a = 1
  b = 2
  c = 3
})

test('sum should be correct', () => {

  //action
  const result1 = sum(a,b)
  const result2 = sum(b,c)

  //expect result
  expect(result1).toBe(3)
  expect(result2).toBe(5)
})

test('multiply should be correct', ()=> {

  //action
  const result1 = mult(a, b);
  const result2 = mult(b, c)

  //expect result
  expect(result1).toBe(5)
  expect(result2).toBe(8)
})

test('spliting into words should be correct', () => {
  //data
  const sent1 = "Hello my friend!"
  const sent2 = "JS - the best programming language."

  //action
  const result1 = splitIntoWords(sent1)
  const result2 = splitIntoWords(sent2)

  //result

})