const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
}

console.log(sayHi('siwan', 27, 'male'));

export {};