FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
        libpq-dev \
        libzip-dev \
        zip \
        unzip \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        imagemagick-c++ \
        libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install bcmath pcntl pdo pdo_mysql zip

WORKDIR /app/backend