// Question 2: Product Price Calculator Create a form with: Product Name Price Quantity Requirements: Calculate Total = Price × Quantity Display the total amount If total > 5000 show "Discount Eligible"

import React,{useState} from "react"


function ProductCal(){
    const[productName,setProductName]=useState("")
    const[price,setPrice]=useState("")
    const[quantity,setQuantity]=useState("")
    const[total,setTotal]=useState("")
    const[msg,setMsg]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        const totalAmount=price*quantity;
        setTotal(totalAmount);

        if(totalAmount>5000){
            setMsg("Discount Eligible")
        }else{
            setMsg("")
        }
    }


    return(
        <>
        <h1>Product Calculator</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="PRODUCTNAME" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
            <input type="number" placeholder="PRICE" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <input type="number" placeholder="QUANTITY" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            <button type="submit">Submit</button>
            

        </form>
         <p>TOTAL_AMOUNT? = ${total}</p>
        <p>{msg}</p>
        </>
    )
}
export default ProductCal;