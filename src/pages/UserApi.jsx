import {useState,useEffect} from "react";

function UserApi(){
    const[user,setUser]=useState([]);
    const[search,setSearch]=useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUser(data))
        .catch((error)=>console.log(error))
    },[])

    const filteredUser=user.filter((user)=>
        user.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return(
        <>
        <h1>USER---API</h1>
        <input type="text" placeholder="USER" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <ul>
        {filteredUser.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
        </ul>
        </>
    )
}
export default UserApi;