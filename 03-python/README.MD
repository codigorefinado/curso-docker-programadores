### Imagem do python
https://hub.docker.com/_/python/

> docker run -d --name db training/postgres
> docker run -d -P --name webNo --link db:db training/webapp python app.py


> docker run -d --name redis redis
> docker build -t cr/dockerwebpython .
> docker run -d -p 5000:5000 --name webpython --link redis:redis cr/dockerwebpython python app.py

> docker-compose up -d


Apaga o container web
> docker container rm web

Apagao container redis
> docker contanier rm redis

O Link permite que você trafegue informações entre os containers de forma segura, pois quem conhece um container conhece apenas o seu par definido no link. Quando você configurar um link, você cria um elo de ligação entre um container de origem e um container de destino. Para criar um link, você deve utilizar o parâmetro --link.

Um link permite que um container de origem forneça informações sobre si próprio e de seus serviços a outro container de destino. No nosso exemplo, o destinatário web pode acessar informações sobre o banco de dados de origem. Para fazer isso, o Docker cria um túnel seguro entre os containers, que não precisam expor as portas externamente. Você deve ter notado que quando iniciamos o container db nós não usamos o parâmetro -P ou -p –  isso é uma grande vantagem ao utilizar o link, pois não precisamos expor o container ou serviço; no nosso exemplo, o banco de dados para toda a rede.