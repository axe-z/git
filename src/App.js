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
        <li>start a working area (see also: git help tutorial)</li>
        <li>clone Clone a repository into a new directory</li>
        <li>init Create an empty Git repository or reinitialize an existing one </li>
        <h2>git --help</h2>
        <li>
          <h3>work on the current change (see also: git help everyday)</h3>
        </li>
        <li>
          <strong>add:</strong> Add file contents to the index
        </li>
        <li>
          <strong>mv:</strong> Move or rename a file, a directory, or a symlink
        </li>
        <li>
          <strong>reset:</strong> Reset current HEAD to the specified state
        </li>
        <li>
          <strong>rm:</strong> Remove files from the working tree and from the index
        </li>

        <li>
          <h3>examine the history and state (see also: git help revisions) </h3>
        </li>
        <li>
          <strong>bisect:</strong> Use binary search to find the commit that introduced a bug
        </li>
        <li>
          <strong>grep:</strong> Print lines matching a pattern
        </li>
        <li>
          <strong>log:</strong> Show commit logs
        </li>
        <li>
          <strong>show:</strong> Show various types of objects
        </li>
        <li>
          <strong>status:</strong> Show the working tree status
        </li>

        <li>
          <h3>grow, mark and tweak your common history </h3>
        </li>
        <li>
          <strong>branch:</strong> List, create, or delete branches
        </li>
        <li>
          <strong>checkout:</strong> Switch branches or restore working tree files
        </li>
        <li>
          <strong>commit:</strong> Record changes to the repository
        </li>
        <li>
          <strong>diff:</strong> Show changes between commits, commit and working tree, etc
        </li>
        <li>
          <strong>merge:</strong> Join two or more development histories together
        </li>
        <li>
          <strong>rebase:</strong> Reapply commits on top of another base tip
        </li>
        <li>
          <strong>tag:</strong> Create, list, delete or verify a tag object signed with GPG
        </li>

        <li>
          <h3>collaborate (see also: git help workflows) </h3>
        </li>
        <li>
          <strong>fetch:</strong> Download objects and refs from another repository
        </li>
        <li>
          <strong>pull:</strong> Fetch from and integrate with another repository or a local branch
        </li>
        <li>
          <strong>push:</strong> Update remote refs along with associated objects
        </li>
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
      <br />
      <br />
      <h1>SSH auth VS https</h1>
      <p>
        par https, donc sans ssh key de montee, chaque push demandera d entrer son name / password
        ... ark
      </p>
      <h2>generer une key ssh</h2>
      <p>
        du terminal en ouvrant: ls .ssh (si le folder est vide, mkdir .ssh, pour creer le folder)
      </p>
      <p>si on y voit id_rsa et id_rsa.pub, on est ok</p>
      <p>cd .ssh/ , pour aller dans le folder</p>
      <p>le code pour en generer une:</p>
      <h2>ssh-keygen -t rsa -C "notreEmailAdresse"</h2>
      <p>il sera genere uun public/private rsa key pair( id_rsa et id_rsa.pub)</p>
      <p>on peut ajouter optionnelement un motdepasse</p>
      <p>la cle nous rejoidra gerigire-og-0rekpogejojkgporekpore... </p>
      <p>ls -al devrait montrer les 2 fichiers rsa</p>
      <p>ouvrir la version id_rsa.pub (public)avec un editeur et copier la key</p>
      <p>selectionner le contenu entier, ssh-rsa key et adresse email et copier command-c</p>
      <p>aller sur github, dans settings, sur le coté , SSH and GPG keys </p>
      <p>mettre en titre une description de la station et dans le key textbox, paste le key</p>
      <p>faudra entrer ensuite notre mot de passe github</p>
      <p>pour verifier que l ordi peut communiquer avec github avec ssh:</p>
      <h2>ssh -T git@github.com</h2>
      <p>repondre yes</p>
      <p>
        osX va prompter une demande de passowrd ( de l os ) mettre un crochet pour enregistrer au
        keychain
      </p>
      <p>on devrait avoir un message de felicitation</p>
      <hr />
      <h1>tout sur github</h1>
      <p>on devrait rester local le plus souvent possible et une fois sur, on push sur github</p>
      <p>
        si on fait un nouveau repo, y met un readme avec le crochet, ajoute un .gitignore ( pour
        Node ) et une license ( apache 2 par exemple) et fait CREATE REPOSITORY, on arrive dans un
        repo deja initialisé ( pas les codes usuels )
      </p>
      <h2>clone or download</h2>
      <p>
        par default on a un lien https, mais on peut choisir ssh, mettre le lien sur le clipboard
      </p>
      <p>pour utiliser le projet:</p>
      <h2>
        git clone + paste du lien (https://github.com/.../testGit.git) + (option, nom du folder que
        ca ira)
      </h2>
      <p>si on veut pusher la premiere fois</p>
      <h2>git push origin master (premiere fois)</h2>
      <hr />
      <h1>fetch et pull</h1>
      <p>
        on peut editer les fichiers directement sur github et meme un commit ( comme creer une
        nouvelle branch), mais se faisant, localement ces changement seront pas apparant.
      </p>
      <p>git status nous diras que tout est a jour, bine que sur github les choses ont changees</p>
      <p>
        si localement on edit ce fichier, et qu on fait un commit, git hub dira que notre branch
        sera en avance sur le origin/master pas 1 commit.
      </p>
      <p>si on fait git push, github fera un reject... et dira de faire un fetch avant</p>
      <h2>git fetch</h2>
      <p>
        ira chercher ce qu il y a de plus sur github, c est non destructif, non detruit pas ce qu on
        a fait nous meme
      </p>
      <p>git nous dira qu on est pas timé, chaqu un a un commit de different, et de faire: </p>
      <h2>git pull (pour merger)</h2>
      <p>
        on va recevoir ce qu on avait fait sur github, il reste juste a faire un git push, on voilà
        , on est synchro
      </p>
      <hr />
      <h1>si on veut changer le nom de notre repo sur github</h1>
      <p>j ai jamais eu de trouble de sync mais si jamais..:</p>
      <h2>git remote -v (localement devrait toujours dire le nom d avant)</h2>
      <h2>
        git remote set-url origin + copier le code du clone or download (
        https://github.com/axe-z/Nouveaunom.git )
      </h2>
      <h2>git remote -v devrait avoir le bon nom</h2>
      <hr />
      <h1> Git Flow Feature Branch and Pushing to Github </h1>
      <h2>git flow feature start une-nouvelle-feature</h2>
      <h4>
        le principe est d avoir plusieurs branche de feature, qu on amene sur la branch de DEVELOP (
        a tout de ce qui est fait, c est tous les options ) si ca passe, ensuite, ca ira sur release
        candidat ( ou staging ), ensuite la master une fois en place.
      </h4>
      <p>
        donc a mettons qu on doit faire le FAQ d une app, un code est donné, on va sur github et si
        on est dans le team, on peut cloner le develop... ensuite on fait git checkout -b (code-pour
        FAQ)
      </p>
      <p>apres avoir coder la feature</p>
      <h2>git push origin (code pour FAQ)</h2>.
      <p>
        si on est satisfait de son code, on peut demander / creer un pull request, pour la branch
        develop
      </p>
      <p>ca se fait sur github, on va sur la branch (code pour FAQ), on click new pull request </p>
    </div>
  );
}

export default App;
