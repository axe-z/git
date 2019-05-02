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
      <h1>Commit sans add</h1>
      <hr />
      <h2> git commit -am "sans add"</h2>
      <p>permet de skiper le add au staging area</p>
      <hr />
      <h1>Enlever (avant commit) Un fichier updaté et added au staging</h1>
      <hr />
      <h2> git reset HEAD nomDuFichier.js</h2>
      <p>
        permet si on a fait git status et git add nomDuFichier.js ou . , de l enlever du prochain
        commit - (use "git reset HEAD "file">..." to unstage)
      </p>
      <hr />
      <h1>Pour revenir a l etat du dernier commit pour un fichier</h1>
      <hr />
      <h2> git checkout -- nomDuFichier.js</h2>
      <p>
        les dernieres modification de se fichier seront annulé , de retour a l etat du dernier
        commit.
      </p>
      <p>c'est de alt-z mais par git</p>
      <hr />
      <h1>Pour voir une historique de nos commit git (plus recent en haut)</h1>
      <hr />
      <h2> git log --oneline --graph --decorate --all</h2>
      <p>git help log (permet de voir tous les options)</p>
      <p>* c201745 (HEAD -> master) add readme</p>
      <p>* 9a8e06a sans add</p>
      <p>* 8f92023 test </p>
      <p>* 314a4ea init</p>
      <p>* 3537e80 Initial commit from Create React App</p>
      <hr />
      <h1>ALIAS - se faire des raccourcis</h1>
      <hr />
      <h2>git config --global alias.NomDuRacc "log --oneline --graph --decorate --all"</h2>
      <p>ceci permet de faire le raccourcis au niveau global, pour eviter les longue commandes</p>
      <p>pour utiliser la commande : </p>
      <h2>juste: git hist</h2>
      <p>
        {" "}
        donc maintenant hist vaut "log --oneline --graph --decorate --all" et on peut meme ajouter
        des options a git hist: git hist --autreOptionsDeLog qui vaut "git log --oneline --graph
        --decorate --all --autreOptionsDeLog"
      </p>
      <p>pour verifier la list de nos alias:</p>
      <h2>git config --global --list</h2>
      {/* // */}
      {/* // */}
      {/* // */}
      {/* // */}
      <hr />
      <h1> renomer des fichiers avec GIT</h1>
      <p>
        on vient d ajouter exemple.txt et fait un commit du fichier, on veut le renomer(pour x
        raison)... on peut le faire avec l os ou git
      </p>
      <h2>git mv exemple.txt nouveauNom.txt</h2>
      <p>
        dans l os le fichier est renommer, mais il reste a faire un commit pour terminer l action
        avec git
      </p>
      <hr />
      <h1> Deleter des fichiers avec GIT</h1>
      <p>
        on vient d ajouter exemple.txt et fait un commit du fichier, on veut le supprimer(pour x
        raison)...
      </p>
      <h2>git rm demo.txt</h2>
      <p>
        dans l os le fichier est deleter, mais il reste a faire un commit pour terminer l action
        avec git
      </p>
      <h1> Exclusion de fichier .gitignore</h1>
      <p>une ligne par exclusion</p>
      <p>si on veut tout enlever dune certaine extension (fichiers log) : *.log</p>
      <h2>git rm demo.txt</h2>
      <p>
        dans l os le fichier est deleter, mais il reste a faire un commit pour terminer l action
        avec git
      </p>
      <br />
      <br />
      <br />
      <hr />
      <h1>Comparaisons de fichiers avec les commandes diff</h1>
      <p>
        par exemple avec la commande alias qu on a fait: git hist on pourra voir tous les commit de
        fait dans le projet
      </p>
      <p>* c201745 (HEAD -> master) add readme</p>
      <p>* 9a8e06a sans add</p>
      <p>* 8f92023 test </p>
      <p>* 314a4ea init</p>
      <p>* 3537e80 Initial commit from Create React App</p>
      <h2>git diff idDuCommit(8f92023) etAutrePointer(3537e80)</h2>
      <p>on verra tous les changement entre les 2 point de reference (commit)</p>
    </div>
  );
}

export default App;
