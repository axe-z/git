import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>GitTuts version control</h1>
      <hr />
      <h2>pour install: </h2>
      <code>dans le terminal: git version</code>
      <p>
        si git y est, on verra la version, sinon un prompt apple du command line apparait, faire
        install{" "}
      </p>
      <h4>minimal config (name email)</h4>
      <code>git config --global user.name "ton nom"</code>
      <br />
      <code>git config --global user.email "ton email"</code>
      <hr />
      <h1>Basic workflow</h1>
      <p>new repo :</p>
      <code>git init </code>
      <br />
      <code>git init -y</code>
      <br />
      <code>git init nomDeFolder</code>
      <br />
      <h2>Git a 4 states: </h2>
      <p>1-le working directory (nos fichiers)</p>
      <p>2-le staging area (l entre deux)</p>
      <p>3-le folder .git (local)</p>
      <p>4-le repo .git (sur github.com)</p>
      <hr />
      <h2>Les commandes pour syncquer le workflow et le .git</h2>
      <p>git status</p> <em>presente les fichiers dans le rep initial ou modifies</em>
      <p>git add . ( . = tout) sinon ca peut etre le nom du fichier</p>{" "}
      <em>ajoute a la liste des choses a.gitter</em>
      <p>
        si on fait "git status" a nouveau , les fichiers ajouter par git add , seront montres dans
        la portion 2-le staging area
      </p>
      <p>git commit -m "message" </p>
      <em>va lui envoyer du stage 2-stging area au stage 3- le .git local</em>
      {/* // */}
      {/* // */}
      {/* // */}
      {/* // */}
      <h2>pour garder des folders vides: </h2>
      <code>.gitkeep</code> dans le folder
      <hr />
    </div>
  );
}

export default App;
