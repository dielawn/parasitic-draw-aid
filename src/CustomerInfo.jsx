import React, {useState} from "react";

export const CustomerInfo = () => {
    const [customer, setCustomer] = useState('')
    const [isCustomer, setIsCustomer] = useState(false)
    const [email, setEmail] = useState('')

    const handleCustomer = () => {
        if (customer !== '' && email !== '') {
            setIsCustomer(true) 
            console.log(customer, email)
        }
        
    }

    const handleEdit = () => {
       setIsCustomer(false)
    }

    return (
        <div>
            { isCustomer ? (
                <div>
                    <h2>{customer}</h2>
                    <h2>{email}</h2>
                    <button onClick={handleEdit}><span className="material-symbols-outlined">edit</span></button>
                </div>
            ) : (<div>
            <label htmlFor="customerInput">Name: </label>
            <input 
                type="text"
                name="customerInput"
                id="customerInput"
                placeholder="Jane Doe"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)} /><br></br>
            <label htmlFor="emailInput">Email: </label>
            <input 
                type="email"
                name="emailInput"
                id="emailInput"
                placeholder="jdoe@email.com"  
                value={email}  
                onChange={(e) => setEmail(e.target.value)} /> <br></br>
                <button onClick={handleCustomer}>Add Vehicle Owner</button>
           
        </div>)  
            }
        </div>
    )
}
