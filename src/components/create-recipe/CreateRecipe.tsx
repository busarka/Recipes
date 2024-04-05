import React, { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipe.api'
import { IRecipeData } from '../../types/recipe.types'
import User from '../user/User'

const defaultRecipe: IRecipeData = {
    name: '',
    image: '',
    description: ''
}

export default function CreateRecipe() {
    const [recipe, setRecipe] = useState(defaultRecipe)

    const [createRecipe] = useCreateRecipeMutation()

    const handleSumbit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createRecipe(recipe).then(() => setRecipe(defaultRecipe))
    }
    return (
        <div>
            <User></User>
            <form onSubmit={handleSumbit}>
                <p>Create new recipe</p>
                <label>
                    <input type="text" placeholder='Name' value={recipe.name} onChange={(e) => setRecipe({...recipe, name: e.target.value})}></input>
                </label>
                <label>
                    <input type="text" placeholder='Image' value={recipe.image} onChange={(e) => setRecipe({...recipe, image: e.target.value})}></input>
                </label>
                <label>
                    <input type="text" placeholder='Description' value={recipe.description} onChange={(e) => setRecipe({...recipe, description: e.target.value})}></input>
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
