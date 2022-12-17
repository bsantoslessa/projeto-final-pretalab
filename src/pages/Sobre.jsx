import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
export function Sobre () {
    return (
    <>
    <Header text="Um pouquinho de mim" image={sobreImg}/>
    <h1>Bárbara Lessa</h1>
    <h3>Nascida em São Paulo, sobre o signo de Áries e mãe do Miguel. <br/>
        11 anos no mundo da liderança de call center, migrei para a área de tecnologia em 2022.
    </h3>
    </>
    )
}