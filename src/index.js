document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    doToDo(e.target.new_task_description.value)
    form.reset()


  })


});

function doToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteToDo)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)

}

function deleteToDo(e){
  e.target.parentNode.remove()
}