
## Informations

Ce repo git contient le code du site React du projet photogrammetrie: https://photogrammetrie-front.herokuapp.com

## Installation

Prérequis : VM Fedora 34

Voici les étapes à suivre :

Ouvrir le terminal et taper dans l'ordre :
`sudo dnf module install nodejs:14`

`git clone https://github.com/HenriBoulnois/photogrammetrie_front.git`

`cd photogrammetrie_front`

`npm install`

`npm i three`

`npm i @three-fiber/drei`

`npm run build`

`node server/server.js`


([15/02] Un bug est présent avec le Canvas, le site apparait quelques secondes avant d'afficher une page blanche due au bug, ce bug n'a été reproduit que sur la VM Fedora, le site est donc accessible dans la même version à https://photogrammetrie-front.herokuapp.com )

## Utilisation

Dans la page contact, le formulaire communique directement avec  `https://photogrammetrie-back.herokuapp.com/api/contact`
Après avoir envoyé un Submit, le résultat du post sera affiché (le premier submit peut être long), voici les résultats possibles :

"Votre message a été envoyé avec succès !" signifie que votre message a bien été reçu et ajouté à la base de données (POST réussi)
Votre message sera présent à : https://photogrammetrie-back.herokuapp.com/api/contact (GET ALL)

"Un message de votre part est déjà en attente, l'administrateur du site vous répondra sous les plus brefs délais." signifie que l'attribut "esttraite" du message est "false", un second message avec cette adresse ne peut être ajouté

Une collection Postman est présente dans le repo du back, elle permet de tester en plus le DELETE

