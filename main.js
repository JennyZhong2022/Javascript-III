import './style.css'

import { isNumber, mySort } from './src/utils'


const list = []

const btn = document.querySelector('#add')
// document.querySelectorAll()=[] //可以多选，选一个【】里面是是0

btn.addEventListener('click', () => {
  const input = document.querySelector('#myInput')
  const value = +input.value
//   if (isNumber(value)) {
//     list.push(value)
//   }
  console.log(list);
  input.value = ''
  const orderList = mySort(list)
  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''
  orderList.forEach((element, index) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.textContent = index + 1

    const td = document.createElement('td')
    td.textContent = element

    tr.append(th, td)
    tbody.append(tr)

  })
})


