import banana from '../../../assets/banana-removebg-preview.png'
import maça from '../../../assets/maça-removebg-preview.png'
import morango from '../../../assets/morango-removebg-preview.png'

const initialState = [
    {nome: "Banana", src: banana},
    {nome: "Maçã", src: maça},
    {nome: "Morango", src: morango}
]

const fruitsReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
             return state
    }
}

export default fruitsReducer