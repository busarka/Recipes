import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"

export default function User() {
    const {isLoading, error, user} = useTypedSelector(state => state.user)
    const {getUserById} = useActions()

    return (
        <div className="user">
            {isLoading ? <div>Loading...</div> : 
                error ? <div>{error}</div> : 
                user?.name ? <h3>Hello, {user.name}</h3> : 
                <h3>Guest, please, login</h3>}
            <button onClick={() => getUserById(1)}>
                Login
            </button>
                
        </div>
    )
}