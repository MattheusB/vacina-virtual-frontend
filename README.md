# vacina-virtual
Repositório destinado ao projeto pessoal de: João Lucas, José Manoel, Lucas Fernandes e Mattheus Brito.

# Vacina Virtual - "Seu registro de saúde na palma da mão!"
Plataforma web destinada aos PSF's que são pontos de vacinas.

# Motivação
Considerando a proposta feita por Lucas de criar uma aplicação web que tenha utilidade no mundo real, e levando em conta a grande dificuldade que a sociedade tem de manter seus cartões de vacinas intactos e até mesmo de lembrar de levá-los no momento de tomar a vacina. Surgiu a ideia de criar uma plataforma web permitindo que essas pessoas tomem suas vacinas com mais facilidade.

# Público Alvo
A princípio, o público desse site são necessariamente postos médicos e hospitais que são pontos de vacinas. No entanto, podendo mudar levemente o seu público depois de algum tempo no ar, então poderia se direcionar não só a hospitais e postos médicos, mas sim para o paciente também.

# Ferramentas utilizadas
- Mongoose
- Express
- React
- NodeJS

# Arquitetura

![Arquitetura](/architeture.jpeg)

# Pontos fortes
Possui um grande diferencial de ser uma plataforma acessível para qualquer um que tenha acesso a um navegador de internet. Sendo assim, simplifica a "burocracia" no processo de vacinação.

# Como funciona?
Pacientes cadastram seu cartão de vacina fornecendo informações sobre o mesmo. Após isso, o ponto de vacinação pode editar o cartão de vacina virtual para adicionar as vacinas que o paciente tomou.

# Quem pode usar?
Qualquer pessoa que possua um ponto de vacinação.

# Instalação

Para criar o banco de dados local usando MongoDB, rode este comando.

```sh
docker run -d --name vacina-virtual -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo 
```

Para instalar as dependências do NodeJS

```sh
npm install
```

Para rodar o frontend

```sh
npm start
```
