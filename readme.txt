git clone https://github.com/zeduvas/grades-api.git
git checkout feature/CriaRotas

// Se você não clonou um repositório existente e quer conectar seu repositório a um servidor remoto, você deve adicioná-lo com
git remote add origin <servidor>

npm install cors

// criar o Procfile e .env

git add *
git commit -m "Implementacao"

// antes de criar o git
git checkout master
git branch 
git merge feature/NovaRota
// para subir as alterações
git push origin master
// sobe para o heroku
git push heroku master 

// faz o deploy no Heroku
heroku create
git remote -v
heroku apps:rename grades-api-igti-je

// verificar erro
heroku logs --tail

// reinicia a aplicação com o heroku
heroku restart
