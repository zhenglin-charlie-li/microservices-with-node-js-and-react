# Expalin

Docker images: think of them as blueprints, for example a blueprint for creating a cow.

Docker daemon: think of it as corral for letting the cows run wild.

Docker swarm (and Kubernetes): think of it as a rancher that manages the cows.



| Keyword            | Meaning                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| Kubernetes Cluster | A collections of nodes + a master to manage them                                                     |
| Node               | A virtual machine that will run our containers                                                       |
| Pod                | More or less a running container.  Technically, a pod can run multiple containers (we won't do this) |
| Deployment         | Monitors a set of pods, make sure they are running and restarts them if they crash                   |
| Service            | Provides an easy-to-remember URL to access a running container                                       |



| Docker World                         | K8s World                         |
| ------------------------------------ | --------------------------------- |
| docker ps                            | kubectl get pods                  |
| docker exec -it [container id] [cmd] | kubectl exec -it [pod_name] [cmd] |
| docker logs [container id]           | kubectl logs [pod_name]           |

| K8s Commands                        | Explanation                                         |
| ----------------------------------- | --------------------------------------------------- |
| kubectl get pods                    | Print out information about all of the running pods |
| kubectl exec -it [pod_name] [cmd]   | Execute the given command in a running pod          |
| kubectl logs [pod_name]             | Print out logs from the given pod                   |
| kubectl delete pod [pod_name]       | Deletes the given pod                               |
| kubectl apply -f [config file name] | Tells kubernetes to process the config              |
| kubectl describe pod [pod_name]     | Print out some information about the running pod    |



# Creating a Pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: posts
spec:
  containers:
    - name: posts
      image: zhenglinli9875/posts:0.0.1
```
# Understanding a Pod Spec
| Configuration Parameters       | Notes                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| apiVersion: v1                 | K8s is extensible - we can add in our own custom objects.  This specifies the set of objects we want K8s to look at |
| kind: Pod                      | The type of object we want to create                                                                                |
| metadata:                      | Config options for the object we are about to create                                                                |
| name: posts                    | When the pod is created, give it a name of 'posts'                                                                  |
| spec:                          | The exact attributes we want to apply to the object we are about to create                                          |
| containers:                    | We can create many containers in a single pod                                                                       |
| - name: posts                  | Make a container with a name of 'posts'                                                                             |
| image: chesterheng/posts:0.0.1 | The exact image we want to use                                                                                      |




# Common Kubectl Commands

| Deployment Commands                            | Explanation                                                                                                      |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| kubectl get deployments                        | List all the running deployments                                                                                 |
| kubectl describe deployment [depl name]        | Print out details about a specific deployment                                                                    |
| kubectl apply -f [config file name]            | Create a deployment out of a config file                                                                         |
| kubectl delete deployment [depl_name]          | Delete a deployment                                                                                              |
| kubectl rollout restart deployment [depl_name] | Get a deployment to restart all pods.  Will use latest version of an image if the pod spec has a tag of 'latest' |





# Introducing Deployments
Whenever I create a kubernetes deployment,  it will auto download image from docker hub?

- It depends on the ImagePullPolicy of the Pod
- The default pull policy is IfNotPresent
- It will try to download the image if it’s not already present on the node


```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: posts-depl
spec:
  replicas: 1
  selector:
    matchLabels:
      app: posts
  template:
    metadata:
      labels:
        app: posts
    spec:
      containers:
        - name: posts
          image: zhenglinli9875/posts:0.0.1
```



# Common Commands Around Deployments
| Deployment Commands                            | Explanation                                                                                                      |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| kubectl get deployments                        | List all the running deployments                                                                                 |
| kubectl describe deployment [depl name]        | Print out details about a specific deployment                                                                    |
| kubectl apply -f [config file name]            | Create a deployment out of a config file                                                                         |
| kubectl delete deployment [depl_name]          | Delete a deployment                                                                                              |
| kubectl rollout restart deployment [depl_name] | Get a deployment to restart all pods.  Will use latest version of an image if the pod spec has a tag of 'latest' |




# Updating Deployments - Method #1
- Step 1 - Make a change to your project code
- Step 2 - Rebuild the image, specifying a new image version
- Step 3 - In the deployment config file, update the version of the image
- Step 4 - Run the command: kubectl apply -f [depl file name]


# Preferred Method for Updating Deployments - Method #2
- Step 1 - The deployment must be using the 'latest' tag in the pod spec section
  - image: chesterheng/posts:latest or 
  - image: chesterheng/posts
- Step 2 - Make an update to your code
- Step 3 - Build the image
- Step 4 - Push the image to docker hub


# Networking With Services



| Types of Services | Explanation                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| Cluster IP        | Sets up an easy-to-remember URL to access a pod. Only exposes pods in the cluster                            |
| Node Port         | Makes a pod accessible from outside the cluster.  Usually only used for dev purposes                         |
| Load Balancer     | Makes a pod accessible from outside the cluster.  This is the right way to expose a pod to the outside world |
| External Name     | Redirects an in-cluster request to a CNAME url.....don't worry about this one....                            |





