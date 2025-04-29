FROM node:23.11.0-alpine3.21

RUN npm install -g npm@11.3.0

RUN apk add make bash --no-cache

SHELL ["/bin/bash", "-c"]

RUN echo "alias start='make start'" >> /etc/bash/bashrc && \
    echo "alias build='make build'" >> /etc/bash/bashrc && \
    echo "alias lint='make lint'" >> /etc/bash/bashrc && \
    echo "alias lint-fix='make lint-fix'" >> /etc/bash/bashrc && \
    echo "alias clean='make clean'" >> /etc/bash/bashrc && \
    echo "alias reinstall='make reinstall'" >> /etc/bash/bashrc

WORKDIR /workspace
