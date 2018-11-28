Como você pode ficar atualizado sobre novidades e conversar sobre os diversos aspectos do desenvolvimento de software?
https://t.me/codigorefinado

http://medium.com/codigorefinado
http://youtube.com/codigorefinado

Twitter: @cknp

Só para quem quer se manter atualizado e receber cupons de desconto nos próximos curso:
http://bit.ly/queroMais

https://github.com/codigorefinado/curso-docker-programadores







Faz download da imagem do banco dedados postgres
> docker pull postgres

Faz download do pgadmin feito em JavaScript e Python
> docker pull dpage/pgadmin4

Lista as imagens do postgres
> docker images postgres

> docker images dpage/pgadmin4


Executa o postgres criando uma rede, necessária para que o pgadmin se comunique com o banco de dados 
> docker run --name teste-postgres --network=postgres-network -e "POSTGRES_PASSWORD=Postgres2018!" -p 5432:5432 -v /home/claytonpassos/Desenvolvimento/PostgreSQL:/var/lib/postgresql/data -d postgres

Cria a rede
> docker network create postgres-network

Lista as redes configuradas
> docker network ls

Executando o container do pgadmin, utilizando a mesma rede do banco de dados postgres
> docker run --name teste-pgadmin --network=postgres-network -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=codigorefinado@gmail.com" -e "PGADMIN_DEFAULT_PASSWORD=PgAdmin2018!" -d dpage/pgadmin4

 http://localhost:15432

 Server>Create>Server
 Informe o nome do host em host name/address: teste-postgress
 Informe o username: postgres e senha: Postgres2018!



 https://hub.docker.com/_/postgres/
 https://hub.docker.com/r/dpage/pgadmin4/


 