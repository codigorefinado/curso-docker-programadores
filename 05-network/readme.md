

> docker run -it ubuntu

> docker inspect <container id>

Encontrei onde está escrito algo como:
 "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,


Dentro do container, execute o comando para ver o ip que ele recebeu
> hostname -i

> ping 172.17.0.3

> apt-get update && apt-get install iputils-ping

Criar a pŕopria rede, você pode utilizar o nome da rede direto na execução, isto tambem irá criar a rede
> docker network create --driver bridge sistema-solar

Mostrar as redes disponíveis
> docker network ls

> docker network rm <network id>

Inspecionar as redes
> docker network inspect bridge

> docker run -it --name netuno --network sistema-solar ubuntu
> docker run -it --name saturno --network sistema-solar ubuntu

> apt-get update && apt-get install iputils-ping
> ping netuno



https://docs.docker.com/v17.09/engine/userguide/networking/#the-docker_gwbridge-network
