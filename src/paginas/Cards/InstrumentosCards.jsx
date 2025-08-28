import './InstrumentosCards.css'
import { useEffect, useState } from "react"

function InstrumentosCards() {

    const [instrumentos, setInstrumentos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/equipamentos')
        .then(async (response) => {
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.status}`);
            }

            const instrumentos = await response.json();
            setInstrumentos(instrumentos);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }, [])

    return(
        <div className='pagina-cards'>
            
        </div>
    )
}

export default InstrumentosCards