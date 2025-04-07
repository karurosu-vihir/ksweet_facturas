import { useState,useContext } from "react"
import { Context } from "../../Context/globalcontext";
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    background-color: lightcyan;
    padding: 0 20px;
    padding-bottom: 30px;
    border-radius: 10px;
    label{
        padding-top: 20px;
        font-size: 24px;
        font-weight: bold;
    }
    input{
        padding: 5px;
        font-size: 18px;
    }
    .button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin-top: 20px;
        height: 50px;
        width: 80%;
        font-size: 24px;
        font-weight: bold;
        color: white;
        background-color: green;
        border-radius: 5px;
        cursor: pointer;
        @media (max-width: 410px) {
            width: 95%;
        }
        img{
            width: 32px;
            height: 32px;
        }
    }
    .cotizacion{
         background-color: blue;
    }

    .factura{
        background-color: red;
    }
`

const Formulario = () =>{

    const navigate = useNavigate();

    const {productos, setproductos} = useContext(Context)

    const cambio = (e) => {
        const { name, value } = e.target;
        const nuevo = [...productos];
        nuevo[0][name] = value;
        setproductos(nuevo);
    };

    const agregar = (e) => {
        e.preventDefault();
        const nuevoproducto = { producto: '', Cantidad: 0, precio: 0.00, precio_total: 0.00 };
        setproductos([nuevoproducto,...productos])
        console.log(productos)
    }

    return  <Form action="">
        <label htmlFor="producto">Nombre de Producto:</label>
        <input className="producto" name="producto" type="text"  minLength="3" value={productos[0].producto} onChange={(e)=>cambio(e)}/>
        <label htmlFor="Cantidad">Cantidad:</label>
        <input className="Cantidad"  name="Cantidad" type="number" value={productos[0].Cantidad} onChange={(e)=>cambio(e)}/>
        <label htmlFor="precio">Precio por Unidad:</label>
        <input className="precio"  name="precio" type="number" pattern="^\d+(\.\d{1,2})?$" value={productos[0].precio} onChange={(e)=>cambio(e)}/>
        <label htmlFor="precio_total">Precio Total:</label>
        <input className="precio_total"  name="precio_total" type="number" pattern="^\d+(\.\d{1,2})?$" value={productos[0].precio_total} onChange={(e)=>cambio(e)}/>
        <button className="button agregar" onClick={(e)=>agregar(e)}><img src="img/mas.png" alt="mas"/><p>Agregar Otro</p></button>
        <button className="button cotizacion" onClick={()=>navigate("/cotizacion")}><img src="img/cotizacion.png" alt="cotizacion"/><p>Cotización</p></button>
        <button className="button factura"><img src="img/factura.png" alt="factura"/><p>Factura</p></button>
    </Form>  
}

export default Formulario