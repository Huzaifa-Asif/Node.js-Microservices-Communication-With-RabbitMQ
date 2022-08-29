# Node.js Microservices Communication With RabbitMQ

#### Microservices
A microservice architecture means that your app is made up of lots of smaller, independent applications capable of running in their own memory space and scaling independently from each other across potentially many separate machines.

#### RabbitMQ 
RabbitMQ enables asynchronous processing, meaning that it allows you to put a message in a queue without processing it immediately. RabbitMQ is therefore ideal for long-running tasks or blocking tasks, allowing web servers to respond quickly to requests instead of being forced to perform computationally intensive tasks on the spot. RabbitMQ simply stores messages and passes them to consumers when ready.
Microservices and RabbitMQ will take the role of a reliable communication channel between those microservices.

#### How to run locally
Install the packages:
Run the command to install packages in both the microservices.
```
npm install
```

##### To Run RabbitMQ Locally Using Docker 
Start docker the then run the command to start RabbitMQ locally.
```
docker run -d --name amqp.test -p 5672:5672 rabbitmq
```

##### To Run Microservices
Run the start command inside the User-Management-Service and Session-Management-Service
```
npm run start
```

Then submit the post request to User-Management-Service on http://localhost:3000/users/save and check Session-Management-Service fetching data in real-time from the queue and acknowledging it. 

#### When to use Microservices Architeture
As you can see in the sample project, these services are completely independent of each other. Microservices architecture can be a useful tool, however, in smaller projects, the application of this architecture can introduce certain complications such as code duplication and needless complexities. Hence, this architecture is often recommended for bigger projects on which we have a lot of user base. 
##### The most compelling “things” that microservices architectures can give you include:
1. Additional options for scaling up applications
2. Independent deployability
3. Help isolate the “blast radius” of service failures
4. Allows developers to “buy into” a new series of options and choices that app developers can make
