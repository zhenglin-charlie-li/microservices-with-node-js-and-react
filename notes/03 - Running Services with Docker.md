03 - Running Services with Docker


# Issues

Running our app right now makes big assumptions about our environment
Running our app requires precise knowledge of how to start it (npm start)


# Why Docker?
Docker solves both these issues

Containers wrap up everything that is needed for a program + how to start and run it


# Why Kubernetes?
Kubernetes is a tool for running a bunch of different containers We give it some configuration to describe how we want our containers to run and interact with each other


# Dockerizing the Posts Service

Here is the format of the Dockerfile:

| INSTRUCTION | arguments        | Comment                                              |
| ----------- | ---------------- | ---------------------------------------------------- |
| FROM        | node:alpine      | Specify base image                                   |
| WORKDIR     | /app             | Set the working directory to '/app' in the container |
| COPY        | package.json ./  | Copy over only the package.json file                 |
| RUN         | npm install      | Install all dependencies                             |
| COPY        | ./ ./            | Copy over all of our remaining source code           |
| CMD         | ["npm", "start"] | Set the command to run when the container starts up  |




# Review Some Basic Commands

| Docker Commands                              | Explanation                                                                                     |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| docker build -t chesterheng/posts .          | Build an image based on the dockerfile in the current directory.  Tag it as 'chesterheng/posts' |
| docker run [image id or image tag]           | Create and start a container based on the provided image id or tag                              |
| docker run -it [image id or image tag] [cmd] | Create and start container, but also override the default command                               |
| docker ps                                    | Print out information about all of the running containers                                       |
| docker exec -it [container id] [cmd]         | Execute the given command in a running container                                                |
| docker logs [container id]                   | Print out logs from the given container                                                         |

```console
cd section-03/blog/posts
docker build -t chesterheng/posts .
docker run chesterheng/posts
docker run -it chesterheng/posts sh
docker ps
docker exec -it a643fdbf134e sh
docker logs a643fdbf134e


docker system prune
```

Docker create command creates a fresh new container from a docker image. However, it doesn’t run it immediately.

Docker start command will start any stopped container. If you used docker create command to create a container, you can start it with this command.

Docker run command is a combination of create and start as it creates a new container and starts it immediately. In fact, the docker run command can even pull an image from Docker Hub if it doesn’t find the mentioned image on your system.






















