FROM node:lts AS build

ENV APP_ENV=${APP_ENV:-prod}

WORKDIR /usr/src/app
COPY . .

RUN npm install
RUN npm build

FROM httpd:latest

# We can take any server name (e.g. example.com), which allows us to redirect
# to that name if reached via any other URL
ARG SERVER_NAME
ENV SERVER_NAME=${SERVER_NAME:-localhost}

ENV PORT=80
# Commented out because the COPY below overwrites (to enable modrewrite)
#RUN sed -i 's/80/${PORT}/g' /usr/local/apache2/conf/httpd.conf

# Put ServerName at the top of the Apache Config
RUN echo ServerName ${SERVER_NAME} > newconfig
COPY docker/httpd.conf /usr/local/apache2/conf/httpd.conf
RUN cat /usr/local/apache2/conf/httpd.conf >> newconfig
RUN mv newconfig /usr/local/apache2/conf/httpd.conf

COPY docker/.htaccess /usr/local/apache2/htdocs/.htaccess

COPY --from=build /usr/src/app/dist/ /usr/local/apache2/htdocs/
