import { createElement, performUnitOfWork, commitWork } from './utils'

const React = { createElement }
let wipRoot,
  nextUnitOfWork = null

function App() {
  return (
    <div>
      <h1>hello world!</h1>
      <ul>
        <li>foo</li>
        <li>bar</li>
      </ul>
    </div>
  )
}

const container = document.getElementById('root')

function render(el, _container) {
  wipRoot = {
    dom: _container,
    props: {
      children: [el],
    },
  }

  nextUnitOfWork = wipRoot
  while (nextUnitOfWork) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  }
  commitWork(wipRoot.child)
}

render(<App />, container)
