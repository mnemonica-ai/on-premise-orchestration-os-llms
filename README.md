# red-teaming-latent-spaces

> Beyond the Cloud: On-premise Orchestration for Open-source LLMs; examples.

### Setup

```
conda create -n red-teaming python=3.12
conda activate red-teaming
pip install -r requirements.txt

jupyter notebook
```

### Other options

* Running your local redis to test:

```
docker run -d --rm --name oshepherd-redis -p 6379:6379 redis/redis-stack:6.2.6-v14 \
sh -c "redis-server --requirepass 000000 --bind 0.0.0.0 --port 6379"
```

* Running OpenSwebUI pointing to Ollama directly:

```
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

* Running OpenWebUI pointin to oshepherd api:

```
docker run -d -p 3000:8080 --network=host \
-v open-webui:/app/backend/data \
-e OLLAMA_BASE_URL=http://127.0.0.1:5001 \
--name open-webui \
--restart always \
ghcr.io/open-webui/open-webui:main
```
