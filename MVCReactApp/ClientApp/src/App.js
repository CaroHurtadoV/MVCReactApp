import "bootstrap/dist/css/bootstrap.min.css"
import Tarjeta from "./components/Tarjeta"
import { useEffect, useState } from "react"


const App = () => {
    let modeloPersona = {
        nombre: "Jorge",
        correo: "jorge@gmail.com"
    }
    /*
    * useState
    */
    const [numero, setNumero] = useState(0)
    const [persona, setPersona] = useState(modeloPersona)
    const [nombre, setNombre] = useState("Jorge")

    /*
    * numero = Nombre de la variable para obtener el valor actual (estado)
    * setNumero = Función que actualiza el valor (estado)
    */

    const EscribirNombre = () => {
        setNombre(nombre == "Jorge" ? "Enrique" : "Jorge")
    }

     /*
     * useEffect
     */

    useEffect(() => {
        console.log(numero+nombre)

    }, [numero, nombre])

    

    return (
        <div className="container-fluid">
            <h1>Valor actual del número {numero}</h1>
            <button onClick={() => setNumero(numero + 1)}>Sumar +1</button>

            <br></br>
            <br></br>
            <br></br>

            <p>Nombre: {persona.nombre}</p>
            <p>Correo: {persona.correo}</p>

            <button onClick={() => setPersona({
                ...persona,
                correo: "otrocorreo@gmail.com"

            })}>Cambiar correo</button>

            <br></br>
            <br></br>
            <br></br>

            <h1>El nombre de la persona es: {nombre}</h1>
            <button onClick={EscribirNombre}>Cambiar el nombre</button>



        </div>
    )   


    /*---------------------
    --------Codigo inicial

     return (
        <div className="container-fluid">
            <div className="row justify-content-sm-center">
                <div className="col-sm-4">
                    <Tarjeta />
                    <Tarjeta
                        titulo="Soy Jorge"
                        descripcion="Mi descripción"
                        textbutton="Mas información"
                    />
                    <Tarjeta />
                    <Tarjeta />
                </div>
            </div>
        </div>
    )
    
    
    
    
    */
}

export default App