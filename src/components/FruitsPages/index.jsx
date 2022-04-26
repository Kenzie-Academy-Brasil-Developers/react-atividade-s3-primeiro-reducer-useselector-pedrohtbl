import { useSelector } from "react-redux"
import './style.css'

const FruitsPages = () =>{
    const fruits = useSelector(state => state.fruits)

    return (
        <ul>
            {fruits.map(fruit => 
            <>
                <li>
                    <p key={fruit.nome}>{fruit.nome}</p>
                    <img src={fruit.src} alt={fruit.nome}/>
                </li>
            </>
            )}
        </ul>
    )
}

export default FruitsPages