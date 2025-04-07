import styled from "styled-components";
import Header from "../components/header";
import { ContextProvider } from "../Context/globalcontext"
import Modal from "../components/Modal";

const Main = styled.main`
    padding: 20px 0;
`

const Cotizacion = () => {
    return <>
        <ContextProvider>
            <Header img="img/KsweetBanner_small.jpg" titulo="" color="white"/>
            <Main>
                
            </Main>
            <Modal/>
        </ContextProvider>
    </>

}

export default Cotizacion;