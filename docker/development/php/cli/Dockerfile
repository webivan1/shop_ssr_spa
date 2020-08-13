FROM php:7.4-cli

RUN pecl install redis-5.1.1 \
    && pecl install xdebug-2.8.1 \
    && docker-php-ext-enable redis xdebug

RUN apt-get update && apt-get install -y \
        libpq-dev \
        libzip-dev \
        zip \
        unzip \
    && docker-php-ext-install bcmath pcntl pdo pdo_mysql zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/bin --filename=composer --quiet

ENV COMPOSER_ALLOW_SUPERUSER 1

WORKDIR /app/backend