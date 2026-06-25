# on-premise-orchestration-os-llms

> Beyond the Cloud: On-premise Orchestration for Open-source LLMs; examples.

Serving Ollama models, on-premise from any machine in your company’s datacenter or even from the PC you use for playing video games, and orchestrating inference, as easy as using Redis, official ollama-python/ollama-js packages, and [oshepherd](https://github.com/mnemonica-ai/oshepherd), in your web application or your jupyter notebook.

Presented at PyCon Austria 2025: https://2025.pycon.at/talks/beyond-the-cloud-on-premise-orchestration-for-open-source-llms/
Deck: https://speakerdeck.com/p1nox/beyond-the-cloud-on-premise-orchestration-for-open-source-llms

### Setup

```
conda create -n on-prem-orch python=3.12
conda activate on-prem-orch
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
