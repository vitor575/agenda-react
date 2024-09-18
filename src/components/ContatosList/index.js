import "./ContatosList.css";

const ContatoList = () => {
    return (
        <div className="tabela">
            <ul className="tabela-titulo">
                <li>Nome</li>
                <li>Número</li>
                <li>Email</li>
            </ul>
            <ul className="tabela-items">
                <li>vitor</li>
                <li>1234161</li>
                <li>123421412</li>
            </ul>
            <ul className="tabela-items">
                <li>vitor</li>
                <li>1234161</li>
                <li>123421412</li>
            </ul>
            <ul className="tabela-items">
                <li>vitor</li>
                <li>1234161</li>
                <li>123421412</li>
            </ul>
        </div>
    )
};

export default ContatoList;