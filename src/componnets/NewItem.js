import React, { useState } from "react"
const NewItem = () => {
    const [userInput, setUserInput] = useState({
        entredProductName: '',
        entredProductPrice: '',
        entredProductDescription: ''
    })

    const nameChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState, entredProductName: event.target.value
            }
        })
        console.log(event.target.value)
    }

    const priceChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState, entredProductPrice: event.target.value
            }
        })
        console.log(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState, entredProductDescription: event.target.value
            }
        })
        console.log(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const productData={
            name:userInput.entredProductName,
            price:userInput.entredProductPrice,
            description:userInput.entredProductDescription
        }
        console.log(productData)
    }

    return (
        <div className="mx-5 my-5">
            <h1>Register your Product Here</h1>
            <form onSubmit={submitHandler} className="form-horizontal w-50 my-5">
                <div className="form-group">
                    <label>Product Name</label>
                    <input onChange={nameChangeHandler} type='text' className="form-control" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input onChange={priceChangeHandler} type='number' className="form-control" min='0.01' step='0.01' />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input onChange={descriptionChangeHandler} type='text' className="form-control" />
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success my-3 mx-auto " type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default NewItem