import styled from "styled-components"

const Cabecera = styled.header`
    position: relative;
    width: 100%;
    height: 27vh;
    @media (max-width: 940px) {
        height: 15vh;
    }
    @media (max-width: 600px) {
        height: 10vh;
    }
    img {
        z-index: 0;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .titulo {
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);
        color: ${props => props.color};
        z-index: 1;
        font-size: 2.5rem;
        text-align: center;
        white-space: nowrap;
        text-shadow:
        -1px -1px 0 black,
         1px -1px 0 black,
        -1px  1px 0 black,
         1px  1px 0 black;
        @media (max-width: 750px) {
            left: 50%;
            font-size: 2rem;
        }
        @media (max-width: 410px) {
            left: 50%;
            font-size: 1.5rem;
        }
    }
`

const Header = ({ img, titulo, color }) => {
    return (
        <Cabecera color={color}>
            <img src={img} alt="banner" />
            <h1 className="titulo">{titulo}</h1>
        </Cabecera>
    )
}


export default Header

