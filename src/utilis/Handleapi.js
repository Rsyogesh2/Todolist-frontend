import axios from "axios";

const baseUrl = "https://mern-todolist-l8gn.onrender.com"

const getAllToDo = async (setToDo) => {
    let data = await axios.get(baseUrl)
    setToDo(data.data);
}

const addToDo = async (text,setText,setToDo) => {
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        setText("")
        getAllToDo(setToDo)
    })
}
const updateToDo = async (toDoId, text,setToDo,setText,setIsUdating) => {
    await axios.put(`${baseUrl}/update`,{_id:toDoId,text})
    .then((data)=>{
        setText("")
        setIsUdating(false);
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

const deleteToDo = async (toDoId,setToDo) => {
    await axios.delete(`${baseUrl}/delete`,{_id:toDoId})
    .then((data)=>{
        getAllToDo(setToDo);
    })
    .catch((err)=>console.log(err))
}


export {getAllToDo,addToDo,updateToDo,deleteToDo}
