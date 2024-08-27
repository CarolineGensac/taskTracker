import axios from 'axios'

const baseUrl = "http://localhost:8080"

const getAllToDo = (setToDo) => {
  axios
  .get(baseUrl)
  .then(({data}) => {
    console.log('data --->', data);
    setToDo(data)
  }) 
  
}

export {getAllToDo}