import { useGetInstruments } from '../../hooks/useGetInstruments';
import './InstrumentosTabela.css'



function InstrumentosTabela() {

    const instrumentos = useGetInstruments();

    return(
        <div className='pagina-table'>
            <h1 className='titulo-table'>Lista de Instrumentos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Marca</th>
                        <th>Voltagem</th>
                        <th>Ano</th>
                        <th>Preço (R$)</th>
                        <th>Peso (kg)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {instrumentos.map((instrumento) => (
                        <tr key={instrumento.id}>
                            <td>{instrumento.nome}</td>
                            <td>{instrumento.tipo}</td>
                            <td>{instrumento.marca}</td>
                            <td>{instrumento.voltagem}</td>
                            <td>{instrumento.ano}</td>
                            <td>{instrumento.preco}</td>
                            <td>{instrumento.peso_kg}</td>
                            <td>{instrumento.ativo ? 'Disponível' : 'Indisponível'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InstrumentosTabela