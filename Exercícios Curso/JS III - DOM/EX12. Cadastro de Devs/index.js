const registerSection = document.getElementById('register-section')
const mainForm = document.getElementById('main-form')

function nameRegister () {
    const username = document.querySelector('input[name="fullname"]').value
    console.log('Seja bem-vindo ' + username + '!')

    const newTechnologyButton = document.createElement('button')
    newTechnologyButton.innerText = 'Adicionar nova tecnologia'
    mainForm.append(newTechnologyButton)

    registerSection.parentNode.removeChild(registerSection)
}

mainForm.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const newForm = document.createElement('form')
    mainForm.appendChild(newForm)

    const h3 = document.createElement('h3');
    h3.innerText = 'Nova tecnologia';

    const techLabel = document.createElement('label');
    techLabel.innerText = 'Nome da tecnologia: ';
    const techInput = document.createElement('input');
    techLabel.appendChild(techInput);

    const techRadioGroupLabel = document.createElement('label');
    techRadioGroupLabel.innerText = 'Tempo de experiência';

    const radioLabel1 = document.createElement('label');
    radioLabel1.innerText = '0-2 anos';
    const radioOption1 = document.createElement('input');
    radioOption1.type = 'radio';
    radioOption1.name = 'radioOptions';
    radioOption1.value = '0-2 anos';
    
    const radioLabel2 = document.createElement('label');
    radioLabel2.innerText = '3-4 anos';
    const radioOption2 = document.createElement('input');
    radioOption2.type = 'radio';
    radioOption2.name = 'radioOptions';
    radioOption2.value = '3-4 anos';

    const radioLabel3 = document.createElement('label');
    radioLabel3.innerText = '5+ anos';
    const radioOption3 = document.createElement('input');
    radioOption3.type = 'radio';
    radioOption3.name = 'radioOptions';
    radioOption3.value = '5+ anos';

    techRadioGroupLabel.append(radioOption1, radioLabel1, radioOption2, radioLabel2, radioOption3, radioLabel3);

    

    const registerButton = document.createElement('button');
    registerButton.innerText = 'Registrar';
    registerButton.addEventListener('click', function (registerEv) {
        registerEv.preventDefault();
        const techName = techInput.value
        const experience = document.querySelector('input[name="radioOptions"]:checked').value
        console.log("Tecnologia cadastrada!" +
                    "\nNome: " + techName +
                    "\nTempo de experiência: " + experience)
        newForm.remove()
    })

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remover';
    removeButton.addEventListener('click', function () {
        newForm.remove()
    })

    newForm.append(h3, techLabel, techRadioGroupLabel, registerButton, removeButton);
});



/* 
function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
} 


const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0



addTechBtn.addEventListener('click', function (ev) {
  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

  const expLabel = createLabel('Experiência: ')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel1 = createLabel('0-2 anos', id1)
  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel2 = createLabel('3-4 anos', id2)
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function () {
    stackInputs.removeChild(newRow)
  })


  newRow.append(
    techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
  )

  stackInputs.appendChild(newRow)
})



form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)
})
*/