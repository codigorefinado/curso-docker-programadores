ARG cria uma variável docker - https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact



Com o Dockerfile, podemos construir sua imagem (inclui o ponto no final):
> docker build -f ./Dockerfile -t tomee-war --build-arg WAR-FILE=app-test.war .


Então, podemos executar o container, com:
> docker run --name host1 -p 8081:8080 tomee-war  

> docker run --name host2 -p 8082:8080 tomee-war  

> docker run --name host3 -p 8083:8080 tomee-war  


Executar o nginx, como um loadbalancer, veja a documentação em: https://hub.docker.com/r/jasonwyatt/nginx-loadbalancer/

> docker run --name loadbalancer -p 80:80 --link host1:host1 --link host2:host2 --link host3:host3 --env-file ./env.list jasonwyatt/nginx-loadbalancer  



http://localhost:8080/app_test/

http://localhost:8081/app_test/

http://localhost:8082/app_test/

http://localhost/app_test/

