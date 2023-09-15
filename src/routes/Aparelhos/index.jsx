import { Link } from "react-router-dom"
import { listaAparelhos } from "../../data/listaAparelhos";
import '../Aparelhos/index.css';

export default function Aparelhos(){

    return(
        <main>
            <h1>Aparelhos</h1>
            <div className="card-container">
            {listaAparelhos.map(a => (
                <div className="card-produto" key={a.id}>
                    <img src={a.imagem} alt={a.descricao} />
                    <h1>{a.nome}</h1>
                    <p>Descrição: {a.descricao}</p>
                    <p className="preco-promocao">Preço: R$ {a.valorPromocao ? a.valorPromocao : a.valor}</p>
                    <div key={a.id}>
                        <Link to={`/aparelhos/visualizar/${a.id}`} className="ver-detalhe">Ver Detalhes</Link>
                    </div>
                </div>
            ))}
            </div>
        </main>



    )
}