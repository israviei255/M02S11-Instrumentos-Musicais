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
            <h1 className='titulo-cards'>Listagem de Instrumentos</h1>
            <ul className='container-cards'>
                {instrumentos.map((instrumento) => (
                    <li className='instrumento-card' key={instrumento.id}>
                        <h2>{instrumento.nome}</h2>
                        <ul className='detalhes-card'>
                            <li><strong>Tipo: </strong>{instrumento.tipo}</li>
                            <li><strong>Marca: </strong>{instrumento.marca}</li>
                            <li><strong>Voltagem: </strong>{instrumento.voltagem}</li>
                            <li><strong>Ano: </strong>{instrumento.ano}</li>
                            <li><strong>Preço: </strong>{instrumento.preco}</li>
                            <li><strong>Status: </strong>
                                <span style={{ color: instrumento.ativo ? 'green' : 'red' }}>
                                {instrumento.ativo ? 'Disponível' : 'Indisponível'}
                                </span>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InstrumentosCards