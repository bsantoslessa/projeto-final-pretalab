import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
export function Portfolio () {
    return (
    <>
    <Header text="Projetinhos iniciais" image={portfolioImg}/>
    <ul>
        <li>Primeiro projeto HTML - Módulo 1 - Pretalab</li>
        <li>Primeiro projeto Javascript - Módulo 2 - Pretalab</li>
        <li>Primeiro projeto React - Módulo 3 - Pretalab</li>
    </ul>
    </>
    )
}