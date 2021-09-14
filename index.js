const select = document.getElementById('select')
const input = document.querySelector('.month-text')

let a = ''

select.addEventListener('change', (e) => {
  a = e.target.value
  if (a == 'Month') {
    input.value = ''
    input.classList.remove('hidden')
    minmax(0, 30, 'month')
  } else if (a == 'Date') {
    input.value = ''
    input.classList.remove('hidden')
    minmax(0, 150, 'date')
  } else {
    input.classList.add('hidden')
  }
})

function minmax(min, max, val) {
  console.log(min, max)
  input.addEventListener('input', (e) => {
    console.log(min, max)
    if (+e.target.value > max) {
      input.value = max
    }
  })
}
