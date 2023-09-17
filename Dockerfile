FROM nginx:1.25.2-alpine3.18

RUN rm /etc/nginx/conf.d/default.conf

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf /etc/nginx/conf.d
COPY njs /etc/nginx/njs
COPY template-variables /etc/nginx/templates/10-variables.conf.template

RUN mkdir -p /etc/nginx/storage