git clone https://github.com/zeduvas/grades-api.git
git checkout feature/CriaRotas

npm install cors

// criar o Procfile e .env

git add *
git commit -m "Implementacao"
git checkout master
git branch 
git merge feature/NovaRota
git push heroku master // sobe o projeto para o heroku

// faz o deploy no Heroku
heroku create
git remote -v
heroku apps:rename grades-api-igti-je

// verificar erro
heroku logs --tail
