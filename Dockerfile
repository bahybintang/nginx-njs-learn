FROM nginx:1.25.2-alpine3.18-slim

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf /etc/nginx/conf.d
COPY njs /etc/nginx/njs
COPY template-variables /etc/nginx/templates/10-variables.conf.template