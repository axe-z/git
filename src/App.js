import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>GitTuts version control</h1>
      <ul>
        <h3>legende</h3>
        <li>init = initialise</li>
        <li>git commit -am (add et commit d'un coup) </li>
        <li>git breakout (changer de branch)</li>
        <li>git mv (change de nom)</li>
        <li>git rm (delete)</li>
        <li>git diff (voit le difference)</li>
        <li>git checkout -b nomDeLaBranchAjoutee</li>
        <li> git merge ( on fait ca de master )</li>
        <li>git config --global alias.NomDuRacc(hist) "log --oneline --graph --decorate --all"</li>
        <li>git hist (sort l historique et la place de HEAD)</li>
      </ul>
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
      <p>4-le repo .git (sur github)</p>
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
        {`commit 314a4ea0aab2969bc116d...cf00c (HEAD -> master)
Author: axe-z  info 
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
      <p>Head est un pointer du dernier commit</p>
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
      <h2>voir les diff depuis derniers commit : git diff</h2>
      <p>on verra les lignes et modifications</p>
      <br />
      <br />
      <br />
      <hr />
      <h1>Branching et Merging</h1>
      <p>les branches sont un timeline de commit, leur nom sont des labels</p>
      <p>le merge est ramener une branche sur le master</p>
      <p>
        le "fast forward merge" arrive quand depuis trop longtemps on est que sur une branche sans
        changement sur le master. ( ca se desactive )
      </p>
      <p>le "automatique merge" ne creer pas de conflit</p>
      <p>le "merge manuel", c'est quand git est pas capable de le faire sans conflits. </p>
      <h2>git branch (retourne la branche sur laquelle on est)</h2>
      <p>* master ( en vert )</p>
      <hr />
      <h2>git checkout -b updates </h2>
      <p>Switched to a new branch 'updates'</p>
      <p>Ceci amnene TOUT CE QUI EST PENDING (PAS COMMIS) sur cette branch</p>
      <p>on va faire notre commit ( git add . et git commit -m "ajout a la branche update") </p>
      <p>
        si on fait maintenant git status : On branch updates nothing to commit, working tree clean
      </p>
      <hr />
      <h2>git hist (retourne toujours l historique) maintenat on voit le switch</h2>
      <p>si on veut voir les DIFF entre le master et la branch updates: </p>
      <h2>git diff updates master </h2>
      <hr />
      <h2>pour switcher de branch : git checkout nomDeLaBranche</h2>
      <p>donc master ou updates dans notre cas</p>
      <hr />
      <p>si on a fini avec notre branche updates et on veut la ramener</p>
      <h2>De master: git merge updates</h2>
      <p>tout ce qui a ete fait sur update s'en va sur master </p>
      <p>
        Fast-forward src/App.js | 35 +++++++++++++++++++++++++++++++++++ 1 file changed, 35
        insertions(+
      </p>
      <p>
        le systeme a choisi de faire un fast-forward merge, parce que les changement etaient simples
      </p>
      <p>
        si on fait git hist: on verra Head master et updates au meme endroit sur la derniere ligne
      </p>
      <h2>si c est la fin de la branche et on veut la deleter: git branch -d nomDeLaBranche</h2>
      <p>
        donc si on fait apres le merge git branch -d updates , git hist montre que le master (et
        HEAD)
      </p>
      <br />
      <br />
      <br />
      <hr />
      <h1>Gerer des conflits</h1>
      <p>
        si par exemple sur master je commit une ligne de read me et vais ensuite sur une nouvelle
        branche
      </p>
      <p>
        change la meme ligne et fait mon commit, les 2 fichiers sont differents, une fois qu on
        tente le merge, il y aura conflit, vscode donne acces a arranger , directrement dans le
        code. un fois la decision prise sur quoi garder, on commit.{" "}
      </p>
      <hr />
      <h1>Git tags</h1>
      <p>ils sont la quand on arrive a un point qu on veut souligner. sinon c est le head. </p>
      <p>Un tag c est un label, voici comment: </p>
      <h2>git tag monTag</h2>
      <p>maintenant si on fait git hist on verra:</p>
      <code>* bd76c22 (HEAD -> master, tag: monTag) message du dernier commit</code>
      <h2>deleter un tag : git tag -d monTag</h2>
      <br />
      <h2>Associer des choses a son tag: ANNOTED TAGS</h2>
      <br />
      <h2>git tag -a (a pour annoted) v1.0(exemple) -m (pour message) "description 1.0"</h2>
      <h2>git tag -a v1.0 -m "Sortie 1.0"</h2>
      <p>bd76c22 (HEAD -> master, tag: v1.0) conflict resolved</p>
      <h2>pour voir la list de nos tags: git tag --list</h2>
      <p>v1.0 , mais bon la difference du annoted vient quand on fait:</p>
      <h2>git show v1.0</h2>
      <p>
        on y verra le chemin entre le dernier commit et le dernier tag et sert a marquer des points
        d importance
      </p>
      <p>tag v1.0</p>
      <p>Tagger: axe-z info axe-z </p>
      <p>Date: Fri May 3 09:31:28 2019 -0400</p>
      <p>Sortie 1.0</p>
      <p>commit bd76c2276858ae28e0998279acd...f44 (HEAD -> master, tag: v1.0)</p>
      <p>Author: axe-z </p>
      <p>Date: Thu May 2 22:20:13 2019 -0400</p>
      <hr />
      <h1>Stashing, mettre en pause dans un sens</h1>
      <h2>git stash</h2>
      <p>Saved working directory and index state WIP on master: 6331968 frais</p>
      <h2>git stash list</h2>
      <p>stash{0}: WIP on master: 6331968 frais</p>
      <hr />
      <h1>reset et reflog (time travel) --soft --mixed(par defaut) --hard</h1>
      <h2>git reset idDeCommit --soft (permet d aller dans le temps) et partir de là</h2>
      <hr />
      <h1>git reflog (permet de voir tous les actions)</h1>
      <h2>get reset (id) de replacer son HEAD la ou on veut</h2>
      <p>maintenant on laisse le local et on va sur github...</p>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h1>GITHUB</h1>
      <hr />
      <p>
        si dans un projet local et que notre tree est commité, pret a envoyer, simplement creer sur
        github le repo{" "}
      </p>
      <h2>git remote -v fera rien si aucun id nm y est associer </h2>
      <p>
        git remote add origin ( origin est convention pour le premier pourrait etre renommé)
        https://github/axe-z/git.git (url du repo github)
      </p>
      <p>
        apres faire enter sur git remote add origin https://github/axe-z/git.git et maintenant on
        regarde git remote-v :
      </p>
      <p>
        origin https://github/axe-z/git.git (fetch) <br />
        origin https://github/axe-z/git.git (push)
      </p>
      <p>2 fois le meme url , un pour fetch et l autre push, 99.999 du temps c est pour push</p>
      <h2>git push -u origin(le nom qu o na mis) master(la branche)</h2>
      <h1 />
    </div>
  );
}

export default App;
