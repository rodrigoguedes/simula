docker run \
  --name db-simula \
  --ulimit memlock=-1:-1 -it --rm=true --memory-swappiness=0 \
  -e POSTGRES_USER="simula" \
  -e POSTGRES_PASSWORD="simul@" \
  -e POSTGRES_DB="simula" \
  -p 543:5432 \
  postgres:11.5