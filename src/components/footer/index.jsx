import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../Context/globalcontext"

const Pie = styled.footer`
    background-color: black;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 20px;
    z-index: 1000;
    section{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        @media (min-width: 720px) {
            flex-direction: row;  
            justify-content: space-around; 
            gap: 20px;    
        }
    }
    h2{
        color: #fff;
        font-size: 18px;
        letter-spacing: 0em; 
        text-align: right;
        margin: 5px 0;
        @media (min-width: 720px) {
            text-align: center;    
        }
        @media (min-width: 1024px) {
            font-size: 30px;    
        }
    }
`


const Footer = () => {
    return <Pie>
        <h2>© 2024 Ksweey Bakery</h2>
    </Pie>
}

export default Footer