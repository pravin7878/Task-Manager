import axios from "axios"

const url = "https://task-managment-app-zhotqp-default-rtdb.firebaseio.com/tasks.json"

export const getTask = async() => {
try{
const res = await axios.get(url)
// console.log(res.data);

const todosArray = Object.values(res.data);
console.log(todosArray[0]);

}
catch(err){
    console.log(err);
}
}
