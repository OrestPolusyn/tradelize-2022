//modalBtnFirst  - modal Left button
//modalBtnSec - modal Right button
//modalName (@name) - modal Name (top)
//modalTitle (@title) - modal Title content
//modalText (@text) - modal Text content
//btnFirstAction (@firstFunc) - modal Left button function
//btnSecAction (@secFunc) - modal Right button function
//@btnFirstName - modal Left button name
//@btnSecName - modal Right button name


const modalBtnFirst = document.querySelector('#modal-btn-first')
const modalBtnSec = document.querySelector('#modal-btn-sec')
const modalName = document.querySelector('.modal-name')
const modalTitle = document.querySelector('.modal-title')
const modalText = document.querySelector('.modal-text')


function modalData(name, title, text, firstFunc, secFunc, btnFirstName, btnSecName) {

  if (modalName) {
    modalName.innerText = name
  }

  if (modalTitle) {
    modalTitle.innerText = title
  }
  if (modalText) {
    modalText.innerText = text
  }
  if (modalBtnFirst) {
    modalBtnFirst.innerText = btnFirstName
  }
  if (modalBtnSec) {
    modalBtnSec.innerText = btnSecName
  }
  if (modalBtnFirst) {
    modalBtnFirst.addEventListener('click', firstFunc)
  }
  if (modalBtnSec) {
    modalBtnSec.addEventListener('click', secFunc)
  }
}


function modalBtn(modalBtn, oldClass, newClass) {
  if (modalBtn) {
    modalBtn.classList.replace(oldClass, newClass)
  }
}

function btnFirstAction() {
  console.log('text')
}


function btnSecAction() {
  console.log('sec');
}


modalBtn(modalBtnSec, 'btn-background', 'btn-delete')

modalData(null, null, 'sss', btnFirstAction)
