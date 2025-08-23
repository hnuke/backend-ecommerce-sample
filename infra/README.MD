# Database Container Setup

This guide will help you initialize and run the database container using Docker Compose.

## Initial Setup

1. Navigate to the `infra` folder:

    cd /infra

2. Build and start the containers:

    docker-compose up --build

Wait for the build process to complete. Once finished, all containers will be up and running.

## Subsequent Runs

If the containers are already built, you can start them without rebuilding:

    docker-compose up
