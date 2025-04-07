import Header from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components"
import { ContextProvider } from "../Context/globalcontext"
import Formulario from "../components/formulario/Formulario"
const Main = styled.main`
    padding: 50px 0;
    background-color: lightgray;
`

const PaginaBase = () => {
    return <>
        <ContextProvider>
            <Header img="img/KsweetBanner_small.jpg" titulo="Calculo de Cotizaciones" color="white"/>
            <Main>
                <Formulario/>
            </Main>
            <Footer/>
        </ContextProvider>
    </>
}

export default PaginaBase
