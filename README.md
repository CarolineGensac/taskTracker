# 📝 Application TodoList

Ceci est une application simple de TodoList construite avec React pour le frontend et Node.js pour le backend. L'application permet aux utilisateurs d'ajouter, visualiser, modifier et supprimer des tâches.

## ✨ Fonctionnalités

- **Ajouter des tâches** : Les utilisateurs peuvent ajouter de nouvelles tâches à la liste.
- **Visualiser les tâches** : Les utilisateurs peuvent voir toutes les tâches.
- **Modifier les tâches** : Les utilisateurs peuvent modifier toutes les tâches.
- **Supprimer des tâches** : Les utilisateurs peuvent supprimer des tâches de la liste.


## 🛠️ Technologies Utilisées

### 🖥️ Frontend
- React
- CSS

### 🌐 Backend
- Node.js
- Express.js
- MongoDB (pour le stockage des données)
- Mongoose (pour la modélisation d'objets MongoDB)

## 🚀 Installation

### ⚙️ Prérequis

- Node.js et npm installés
- MongoDB installé et en cours d'exécution

### 📝 Étapes

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/CarolineGensac/todo_list.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd frontend
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

   **puis pour le back**

4. Accédez au répertoire du projet :
   ```bash
   cd backend
   ```

5. Installez les dépendances :
   ```bash
   npm install
   ```
6. Créez un fichier .env dans le répertoire backend et ajoutez-y les informations suivantes

 ```bash
MONGO_URL=mongodb://localhost:27017/ToDoApp
PORT=8080
 ```

   
## Lancement

1. Lancez le serveur backend :
   ```bash
   nodemon Server.js
    ```

2. Lancez l'application frontend :
   ```bash
   npm start
    ```

3. Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application dans votre navigateur.

## Utilisation

- Ajouter une tâche :
Entrez la description de la tâche dans le champ de saisie et appuyez sur "Add".

- Modifier une tâche : 
Cliquez sur l'icone de modification à côté de la tâche, puis valider avec "Update" pour la mettre à jour.

- Supprimer une tâche : 
Cliquez sur l'icone de suppression à côté de la tâche que vous souhaitez enlever.

## Améliorations Futures

- Marquer les tâches comme accomplies puis les sauvegarder dans des archives.
- Implémenter des catégories de tâches.
- Ajouter l'authentification des utilisateurs, puis l'attribution des tâches.
