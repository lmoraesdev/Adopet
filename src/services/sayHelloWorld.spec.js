const sayHelloWorld = require('./sayHelloWorld')

describe('Say Hello test', () => {
  it('Should say Hello World', () => {
    const response = sayHelloWorld.sayHello()

    expect(response).toBe('Hello World!')
  })

  it('Should say Hello Adopet', () => {
    const response = sayHelloWorld.sayHello('Adopet')

    expect(response).toBe('Hello Adopet!')
  })
})
