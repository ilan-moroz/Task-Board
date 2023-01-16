var myTasks = []

// GET DATA FROM LOCAL STORAGE
// const checkForData = () => {
//   myTasks = JSON.parse(localStorage.getItem('tasksInfo'))
//   console.log(myTasks)
// }

// checkForData()

// GET INPUTS & MAKE OBJECT & PUSH TO ARRAY
const addTask = () => {
  var date = document.getElementById('taskDate').value
  date = date.split('-')
  date = `${date[2]}/${date[1]}/${date[0]}`
  var tasks = new Object()
  tasks.name = document.getElementById('taskInfo').value
  tasks.date = date
  tasks.time = document.getElementById('taskTime').value
  myTasks.push(tasks)
  makeTask()
  // localSave()
  document.getElementById('myForm').reset()
}

// SAVE TO LOCAL STORAGE
// const localSave = () => {
//   localStorage.setItem('tasksInfo', JSON.stringify(myTasks))
// }

// ADD NEW TASK
const makeTask = () => {
  var data = ''
  myTasks.map((item) => {
    data += `<div id="newTask" class="fade-in card bg-transparent text-dark">
    <img src="img/notebg.png" class="card-img" alt="card-img-overlay">
    <div class="card-img-overlay ">
      <span class="text-danger glyphicon glyphicon-remove d-flex justify-content-end" onclick="removeTask()"></span>
      <div class="mainTask">
        <p class="card-task">${item.name}</p>
      </div>
        <div class="bottom">
      <p class="card-text">${item.date}</p>
      <p class="card-text"> ${item.time}</p>
      </div>
    </div>
  </div>`
  })
  document.getElementById('note').innerHTML = data
}

// REMOVE TASK
const removeTask = () => {
  const remove = document.getElementById('note')
  for (let index = 0; index < remove.children.length; index++) {
    remove.children[index].onclick = function () {
      myTasks.splice(index, 1)
      remove.removeChild(remove.children[index])
      // localStorage.removeItem[index]
    }
  }
}