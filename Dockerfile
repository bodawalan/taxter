FROM debian:jessie
MAINTAINER Destini
RUN apt-get -yq update
RUN apt-get -yq install aptitude
RUN dpkg-reconfigure debconf -f noninteractive -p critical
RUN aptitude -yq install build-essential curl wget autoconf automake pkg-config
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN aptitude -yq install nodejs npm
COPY Dockerdata/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
RUN mkdir /var/log/taxter
ADD src /srv/docker-app
WORKDIR /srv/docker-app
RUN npm install
EXPOSE 80 443
ENTRYPOINT ["entrypoint.sh"]
