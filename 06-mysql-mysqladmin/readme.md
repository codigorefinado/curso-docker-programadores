


Execute o docker compose duas vezes, uma na pasta phpMyAdmin,  isto irá levantar o banco de dados mysql e na sequencia o phpMyAdmin, criando uma rede entre eles pela funcionalidade de link
> docker-compose up -d app

Voce também poderia entrar na pasta mysql e executar o comando a baixo, mas isto irá levantar apenas o mysql, neste caso, fique atento com conflitos, pode haver uma situação em que você vai tentar subir dois bancos de dados na mesma porta.
> docker-compose up -d db

Pronto! Seu servidor já subiu com as configurações:

host: localhost
port: 3306
user: root
password: password


Abra o phpMyAdmin em: http://localhost:9090

preencha o formulário com:
Servicor: db
utilizador: root
Senha: password


Para entrar dentro do banco de dados mysql em execução
> docker exec -it <container id> bash