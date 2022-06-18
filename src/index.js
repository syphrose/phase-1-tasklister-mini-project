
document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector('form')
    form.addEventListener('submit', (event) =>{
      event.preventDefault()
      addTodo(event.target['new-task-description'].value)
      form.reset()
    })
  });
  function addTodo(input){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.textContent = 'x'
    btn.addEventListener('click', (event)=> event.target.parentNode.remove())
    li.textContent = `${input}  `
    document.querySelector('#list').appendChild(li)
    li.appendChild(btn)
  }
  