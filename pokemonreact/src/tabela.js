import React, { Component } from 'react'


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>preco</th>
                <th>Preços</th>
                <th>Comprar</th>
            </tr>
        </thead>
    );
};


const TableBody = props => {
    const linhas = props.pokemon.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.preco}</td>
                <td>{linha.tipo}</td>
                <td><button>Comprar</button></td>
            </tr>
        )
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    )


}

class Tabela extends Component {

    render() {
        const { pokemon } = this.props;
        return (
            <table>
                <TableHead />
                <TableBody pokemon={pokemon} />
            </table>
        );
    }

}

export default Tabela;