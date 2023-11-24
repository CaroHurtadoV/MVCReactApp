import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"



const App = () => {
    const [empleados, setEmpleados] = useState([])

    const ConsumirAPI = async () => {
        const response = await fetch("api/empleado/obtenerEmpleados");

        if (response.ok) {
            const data = await response.json();

            console.log(data)
            setEmpleados (data)
        }
    }

    useEffect(() => {
        ConsumirAPI()
    }, []
    )
 
    return (
        <div className="container-fluid">
            <h5>Lista de empleados</h5>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map((empleado) => (
                            <tr key={empleado.idEmpleado}>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.correo}</td>
                                <td>{empleado.direccion}</td>
                                <td>{empleado.telefono}</td>
                            </tr>
                        
                        ))
                    }
                </tbody>

            </table>

          

        </div>
    )
}

export default App