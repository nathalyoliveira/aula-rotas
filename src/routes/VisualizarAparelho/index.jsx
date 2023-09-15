import React from "react";
import { useParams } from "react-router-dom";
import { listaAparelhos } from "../../data/listaAparelhos";
import "./index.css"; // Importe o arquivo de estilo

export default function VisualizarAparelho() {
  const { id } = useParams();

  let aparelho = {};

  aparelho = listaAparelhos.find((aparelho) => aparelho.id.toString() === id);

  if (!aparelho) {
    return <p>Aparelho não encontrado.</p>;
  }

  return (
    <div className="main-container">
      <div className="card-aparelho">
        <div className="img-container">
          <img src={aparelho.imagem} alt={aparelho.descricao} />
        </div>
        <div className="details-container">
          <h1>Detalhes do Aparelho</h1>
          <h2>{aparelho.nome}</h2>
          <p>Descrição: {aparelho.descricao}</p>
          <p>Preço: R$ {aparelho.valorPromocao ? aparelho.valorPromocao : aparelho.valor}</p>
          <p>Sistema Operacional: {aparelho.sistemaOperacional}</p>
          <p>Capacidade de Armazenamento: {aparelho.capacidadeArmazenamento}</p>
          <p>Cor: {aparelho.cor}</p>
          <p>Tamanho da Tela: {aparelho.tamanhoTela}</p>
          <p>Câmera Principal: {aparelho.cameraPrincipal}</p>
        </div>
      </div>
    </div>
  );
}
