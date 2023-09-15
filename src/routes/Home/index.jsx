import { Link } from "react-router-dom";
import { listaAparelhos } from "../../data/listaAparelhos";
import "../Home/index.css";

export default function Home() {
  return (
    <main className="main-home">
      <h1>Promoções</h1>

      <div className="card-container">
        {listaAparelhos.filter((a) => !!a.valorPromocao).map((a) => {
          return (
            <div className="card-produto" key={a.id}>
              <img src={a.imagem} alt={a.descricao} />
              <h1>{a.nome}</h1>
              <p>Descrição: {a.descricao}</p>
              <p className="preco-promocao">Preço: R$ {a.valorPromocao}</p>
              <div key={a.id}>
                <Link to={`/aparelhos/visualizar/${a.id}`} className="ver-detalhe">Ver Detalhes</Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
