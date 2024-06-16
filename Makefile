up:
	docker compose -f docker-compose.yml up --no-deps --build -d

# dev:
# 	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --no-deps --build

CERTBOT_CMD = sudo certbot certonly --standalone -d
CERT_PATH = /etc/letsencrypt/live
NGINX_CERTS_PATH = ./nginx/certs

all: certs

certs: vovjai_cert admin_cert

vovjai_cert:
	$(CERTBOT_CMD) vovjai.com
	sudo cp $(CERT_PATH)/vovjai.com/fullchain.pem $(NGINX_CERTS_PATH)/research.fullchain.pem
	sudo cp $(CERT_PATH)/vovjai.com/privkey.pem $(NGINX_CERTS_PATH)/research.privkey.pem

admin_cert:
	$(CERTBOT_CMD) admin.vovjai.com
	sudo cp $(CERT_PATH)/admin.vovjai.com/fullchain.pem $(NGINX_CERTS_PATH)/admin.fullchain.pem
	sudo cp $(CERT_PATH)/admin.vovjai.com/privkey.pem $(NGINX_CERTS_PATH)/admin.privkey.pem