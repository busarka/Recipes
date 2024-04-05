import { useDispatch, useSelector } from 'react-redux'
import styles from './RecipeItem.module.css'
import { actions } from '../../store/favorites/favorites.slice'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'
interface IRecipeItem {
    recipe: IRecipe
}

export default function RecipeItem({recipe}:IRecipeItem) {
    const favorites = useFavorites()
    const {toggleFavorites} = useActions()
    const isExsists = favorites.some(r => r.id === recipe.id)

    return (
            <div className={styles.item}>
                <div>
                    <img src={recipe.image} alt={recipe.name} width={200}></img>
                    <h2>{recipe.name}</h2>
                    <button onClick={() => toggleFavorites(recipe)}>
                    {isExsists ? "Delete from ": "Add to "}favorites</button>
                </div>
                <div className={styles.description}>
                    <p>{recipe.description}</p>
                </div>
        </div>
    )
}
