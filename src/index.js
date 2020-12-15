import { render, createTextElement, createElement } from './utils'

// const textEl = createTextElement('hola mundo genial')
// const element = createElement('h1', undefined, textEl)
const element = <h1>hola mundo genial</h1>

const container = document.getElementById('root')
render(element, container)
