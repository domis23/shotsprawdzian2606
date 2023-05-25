//zad1
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const oblicz = document.querySelector('#oblicz')
const r1 = document.querySelector('#r1')
const r2 = document.querySelector('#r2')
const wynik = document.querySelector('#wynik')
//zad2
const wymiar1 = document.querySelector('#wymiar1')
const wymiar2 = document.querySelector('#wymiar2')
const wymiarZ = document.querySelector('#zatwierdz')
const zdj = document.querySelector('#zdj')
const d2 = document.querySelector('#d2')
//zad3
const d3 = document.querySelector('#d3')
//pozostale
let input1Int
let input2Int
let sumInput
let wynik2
let wymiarInt1
let wymiarInt2

//zad1
const radio = () => {
  input1Int = parseInt(input1.value)
  input2Int = parseInt(input2.value)
  sumInput = input1Int + input2Int

  if (r1.checked == true) {
    wynik2 = sumInput + 5
    wynik.innerText = wynik2
  } else if (r2.checked == true) {
    wynik2 = sumInput + 10
    wynik.innerText = wynik2
  } else if (r1.checked == false && r2.checked == false) {
    alert('Wybierz dodatkowa liczbe')
  }
}
//zad2
const wymiary = () => {
  wymiarInt1 = parseInt(wymiar1.value)
  wymiarInt2 = parseInt(wymiar2.value)
  zdj.style.width = wymiarInt1 + 'px'
  zdj.style.height = wymiarInt2 + 'px'
}
//zad3
const kolorki1 = () => {
  d3.classList.add('blue')
}
const kolorki2 = () => {
  d3.classList.remove('blue')
}

oblicz.addEventListener('click', radio)

d3.addEventListener('mouseover', kolorki1)
d3.addEventListener('mouseout', kolorki2)
wymiarZ.addEventListener('click', wymiary)
