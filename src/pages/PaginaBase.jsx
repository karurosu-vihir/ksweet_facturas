import Header from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components"
import { ContextProvider } from "../Context/globalcontext"
const Main = styled.main`

`

const PaginaBase = () => {
    return <>
        <ContextProvider>
            <Header img="img/KsweetBanner_small.jpg" titulo="Calculo de Cotizaciones" color="white"/>
            <Main>
                
            </Main>
            <Footer/>
        </ContextProvider>
    </>
}

export default PaginaBase
