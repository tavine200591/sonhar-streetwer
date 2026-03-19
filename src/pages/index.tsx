import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);

  const [idFornecedor, setIdFornecedor] = useState("");
  const [resultado, setResultado] = useState("");

function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nome && senha) {
      setLogado(true);
    } else {
      alert("Preencha nome e senha!");
    }
  }

  function buscarFornecedor() {
    if (idFornecedor === "ID100") {
      setResultado("Cataguases Tecidos");
    } else if (idFornecedor === "ID150") {
      setResultado("Fabril Mascarenhas");
    } else if (idFornecedor === "ID200") {
      setResultado("Color Têxtil");
    } else {
      setResultado("ID inválido");
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Sonhar StreetWer</h1>

      {!logado ? (
        <form onSubmit={handleLogin} style={styles.card}>
          <h2>Login Funcionário</h2>

          <input
            type="text"
            placeholder="Nome do funcionário"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.botao}>
            Entrar
          </button>
        </form>
      ) : (
        <div style={styles.card}>
          <h2>Consulta de Fornecedor</h2>

          <input
            type="text"
            placeholder="Digite o ID (ex: ID100)"
            value={idFornecedor}
            onChange={(e) => setIdFornecedor(e.target.value)}
            style={styles.input}
          />

          <button onClick={buscarFornecedor} style={styles.botao}>
            Buscar
          </button>

          {resultado && (
            <p style={styles.resultado}>
              Fornecedor: <strong>{resultado}</strong>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff",
  },
  titulo: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  card: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    width: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
  },
  botao: {
    padding: "10px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold" as const,
  },
  resultado: {
    marginTop: "15px",
    fontSize: "18px",
  },
};