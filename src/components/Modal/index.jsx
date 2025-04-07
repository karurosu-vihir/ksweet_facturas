import { useContext, useRef, useState } from "react"
import styled from "styled-components"
import { Context } from "../../Context/globalcontext"

const Overlay = styled.div`
background-color:rgba(3, 18, 47,.70);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 100px;
  background:darkkhaki;
  padding:0;
  display: flex;
  flex-direction: column;
  border:5px solid pink;
  border-radius: 15px;
  left: 50%;
  transform: translate(-50%);
    .cerrar {
            background: transparent;
            border: none;
            cursor: pointer;
            align-self: flex-end;
        }
    form {
        padding: 5%;
        width: 100%;
        height: 100%;
        @media (max-width: 800px){
            padding: 5% 2%;
        }
        @media (max-width: 500px){
            padding: 0;
        }
        h3{
            color: whitesmoke;
            text-transform: uppercase;
            font-weight: 900;
            font-size: 40px;
            text-align: center;
            margin-bottom: 25px;
            text-shadow:
                -1px -1px 0 black,
                1px -1px 0 black,
                -1px  1px 0 black,
                1px  1px 0 black;
        }
        p{
            margin-bottom: 15px;
            text-align: center;
            font-size: 20px;
        }
    }
`

const Formdiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
    input{
        border: 3px solid #2271D1;
        border-radius: 10px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: forestgreen;
        padding: 10px;
    }
`

const Botones = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`

const Button = styled.input`
    width: 45%;
    height: 54px;
    border-radius: 15px;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    border: 2px solid #2271d1;
    background-color: ${props=> props.value === "Cambiar" ? "green" : props.value === "Nuevo" ? "red" : "burlywood"} ;
    cursor: pointer;
` 

const Modal = () => {
    const {estadoModal, setestadoModal, empresa, setempresa, rtn, setrtn} = useContext(Context)

    // Dom de los inputs
    const inputNombre = useRef(null)
    const inputRtn = useRef(null)

    const guardar = (e) =>{
        e.preventDefault();
        setestadoModal(false)
    }

    return <>
            {estadoModal && <>
                    <Overlay />
                    <DialogEstilizado>
                    <button className="cerrar" onClick={()=>{setestadoModal(false)}}>
                                <img src="/img/X - cancel.png" alt="Cerrar" />
                            </button>
                        <form method="dialog" noValidate>
                            <Formdiv>
                                <h3>Gestion de Cotizacion</h3>
                                <p>Introduzca el nombre de la empresa, el RTN es opcional.<br/>Si da en cambiar podra ver la cotizacion (cuando haya un nombre de empresa).<br/> El resto de opciones estan en los botones.</p>
                                <Fieldset>
                                    <input ref={inputNombre} name="empresa" type="text" placeholder="Nombre de la Empresa" 
                                    minLength="3" required value={empresa} onChange={(e)=>setempresa(e.value)}/>                                
                                </Fieldset>
                                <Fieldset>
                                    <input ref={inputRtn} name="rtn" type="number" placeholder="RTN  EJ:18319001126221" minLength="13" maxLength="13" value={rtn} onChange={(e)=>{setrtn(e.value)}}/>
                                </Fieldset>
                                <Botones>
                                    <Button type="button" value="Cambiar"/>
                                    <Button type="button" value="Nuevo"/>
                                </Botones>
                                <Botones>
                                    <Button type="button" value="Correo"/>
                                    <Button type="button" value="Imprimir"/>
                                </Botones>
                            </Formdiv>
                        </form>
                    </DialogEstilizado>
                </>
            }
    </>
}

export default Modal