var p = document.createElement('p')
p.textContent =
  'When you click the following buttons, the alert should match the number on the button.'
document.body.appendChild(document.createElement('br'))
document.body.appendChild(p)

for (i = 1; i <= 10; i++) {
  let button = document.createElement('button')
  document.body.appendChild(button)
  button.textContent = `Button ${i}`
  button.style = 'ui button'
  buttonClick(button, i)
}

function buttonClick(button, i) {
  button.onclick = function () {
    alert(`Hello from button ${i}!`)
  }
}
