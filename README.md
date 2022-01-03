## To Run ##
Download Docker and docker-compose

Clone https://github.com/itshady/docker-compose-elm

go to terminal and cd into the root folder

#### In Command Prompt: ####
* run make reactor
* Ctrl P + Ctrl Q (to exit back to terminal)
* run docker ps
* run docker exec -it ***container ID*** /mnt/optimize.sh

Go to localhost:8000 and navigate to build/index.html

## To Shut down ##
#### In Command Prompt: ####
* run docker ps
* run docker stop ***container ID***
* run docker rm ***container ID*** (not necessary but good practice)

You need to stop the container to start it up again
