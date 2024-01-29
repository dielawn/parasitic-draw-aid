import React, {useState} from "react";

export const CustomerInfo = () => {
    const [customer, setCustomer] = useState('')

    return (
        <div>
            <label htmlFor="customerInput">Name</label>
            <input 
                type="text"
                name="customerInput"
                id="customerInput"
                placeholder="Jane Doe"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)} />
        </div>
    )
}