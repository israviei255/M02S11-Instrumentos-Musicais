import { useState, useEffect } from 'react'

export function useGetInstruments() {

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

    return instrumentos;
}