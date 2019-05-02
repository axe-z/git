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
      <code>git init .</code>
      <br />
      <code>git init nomDeFolder</code>
      <br />
      <h2>Git a 4 states: </h2>
      <p>1-le working directory (nos fichiers)</p>
      <p>2-le staging area (l entre deux)</p>
      <p>3-le folder .git (local)</p>
      <p>4-le repo .git (sur github.com)</p>
      <hr />
      <h2>Les commandes pour syncquer le workflow et le .git LOCALEMENT</h2>
      <p>git status</p> <em>presente les fichiers dans le rep initial ou modifies</em>
      <p>git add . ( . = tout) sinon ca peut etre le nom du fichier</p>{" "}
      <em>ajoute a la liste des choses a .gité </em>
      <p>
        si on fait "git status" a nouveau , les fichiers ajouter par git add , seront montres dans
        la portion 2-le staging area
      </p>
      <p>git commit -m "message" </p>
      <em>va lui envoyer du stage 2-stging area au stage 3- le .git local</em>
      <p>[master 314a4ea] (id du git) init (nom du commit)</p>
      <h2>L'interieur du .git</h2>
      <p>
        COMMIT_EDITMSG - config - hooks - info - objects - HEAD - description - index - logs - refs
      </p>
      <h2>detruire le git</h2>
      <p>rm -rf .git</p>
      <hr />
      <h1>historique</h1>
      <hr />
      <h2>git log</h2>
      <p>permet de voir nos actions de commit passees</p>
      <p>
        on y voit le ID du commit, le Author, la date du commit, et le message du -m (initial
        commit)
      </p>
      <p>le terminal reviens pas au prompt, mais a ":" Q (minuscule) va sortir de la </p>
      <code>
        {`commit 314a4ea0aab2969bc116d103d5b62b8a8cf00c (HEAD -> master)
Author: axe-z <info@axe-z.com>
Date:   Wed May 1 19:03:19 2019 -0400
 
 `}
      </code>
      <h2>git show</h2>
      <p>permet de voir le detail du DERNIER commit, et les fichiers diff.</p>
      <p>le terminal reviens pas au prompt, mais a ":" Q (minuscule) va sortir de la </p>
      {`diff --git a/.gitignore b/.gitignore
index 4d29575..e36b9bc 100644
--- a/.gitignore
+++ b/.gitignore`}
      <hr />
      <h1>voir le tracking de quels files</h1>
      <hr />
      <h2>git ls-files</h2>
      <code>
        .gitignore README.md package.json public/favicon.ico public/index.html public/manifest.json
        src/App.css src/App.js src/App.test.js src/index.css src/index.js src/logo.svg
        src/serviceWorker.js yarn.lock
      </code>
      <hr />
      <h1> </h1>
      <hr />
      <h2> </h2>
      <code />
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
