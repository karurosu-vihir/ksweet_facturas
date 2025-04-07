import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [productos,setproductos] = useState([
        { producto: '', Cantidad: 0, precio: 0.00, precio_total: 0.00 },
    ])

    const [estadoModal,setestadoModal] = useState(true);

    const [empresa,setempresa] = useState("");

    const [rtn,setrtn] = useState("");

    return (<Context.Provider value={{
        productos, setproductos, estadoModal, setestadoModal, empresa, setempresa, rtn, setrtn
    }}>
        {children}
    </Context.Provider>
    )
}