import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/api_react/").then(function (res) {
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="App">
      {posts.map(function (val) {
        return (
          <div className="containerNoticia">
            <img src={val.imagem} />
            <p>{val.conteudo}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
