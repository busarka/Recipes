import CreateRecipe from "./create-recipe/CreateRecipe"
import Header from "./header/Header"
import RecipeItem from "./recipe-item/RecipeItem"

import { useGetRecipesQuery } from "../store/api/recipe.api"
import { useState } from "react"

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [queryTerm, setQueryTerm] = useState('')
  const {isLoading, data} = useGetRecipesQuery(queryTerm)
  
  const handleSearch = () => {
    setQueryTerm(searchTerm)
  }

  return (
    <section>
      <Header></Header>
      <CreateRecipe></CreateRecipe>
      <div style={{padding: 10}}>
        <p>If you want find: </p>
        <div>
          <input type="search" 
            value={searchTerm} 
            onChange={(e)=> setSearchTerm(e.target.value)}
            placeholder="Enter search term"/>
          <button onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div>
      {isLoading ? <div>Loading... </div> : 
      data ? data.map(recipe => <RecipeItem recipe={recipe} key={recipe.id}/>) :
      "not found recipes"}
      </div>
    </section>
  )
}

export default App
