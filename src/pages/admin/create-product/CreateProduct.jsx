import React from 'react'
import "./createproduct.scss"
import { useGetInputValue } from '../../../hooks/useGetInputValue'

const initialState = {
    title: "",
    price: "",
    url: "",
    category: "",
    desc: "",
}
const CreateProduct = () => {
    const {formData, handleChange, setFormData} = useGetInputValue(initialState)

    const handleCreateProduct = (e) => {
        e.preventDefault()
        console.log(formData)
    }

  return (
    <div>
        <h2>CreateProduct</h2>
        <form onSubmit={handleCreateProduct}  action="">
            <input type="text" name="title" onChange={handleChange} value={formData.title} />
            <button>Create</button>
        </form>
    </div>
  )
}

export default CreateProduct