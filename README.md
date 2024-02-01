Hello, here is a repository to send you my vision of clean architecture (firstly on the front, then later on back) in different versions.

I wrote an article to support the examples of this project: [https://www.hexa-web.fr/blog/hexagonal-architecture-front-end](https://www.hexa-web.fr/blog/hexagonal-architecture-front-end)
To understand the clean architecture, you can also read my article on dependency inversion in front-end: [https://www.hexa-web.fr/blog/dependency-inversion-front-end](https://www.hexa-web.fr/blog/dependency-inversion-front-end)

For these examples, I chose to use [Next.js](https://nextjs.org/) based on [React](https://reactjs.org/), but the whole point of this architecture is to be able to use it independently of the frameworks and libraries used (external dependencies).

In order to have a simple example, I chose a simple subject: a todo list!

To see the tasks that still need to be done on the project, go to the /docs/todo.md file

If you have any questions, suggestions or anything else, don't hesitate to contact me!
And if this repository has helped you, consider sharing it with your acquaintances.

## Summary

1. [Getting started](#getting-started)
2. [Clean architecture](#clean-architecture)
    1. [Use case](#use-case)
    2. [Primary port](#primary-port)
    3. [Primary adapter](#primary-adapter)
    4. [Secondary port](#secondary-port)
    5. [Secondary adapter](#secondary-adapter)
3. [Resources](#resources)

## Getting started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

--

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

--

To start unit tests:

```bash
jest
```

--

To test the app online:
[https://front-end-clean-architecture.netlify.app/](https://front-end-clean-architecture.netlify.app/)

## Clean architecture

The hexagonal architecture, or architecture based on ports and adapters, is an architectural pattern used in the field of software design. It aims to create systems based on application components which are loosely coupled and which can be easily connected to their software environment by means of ports and adapters. These components are modular and interchangeable, which reinforces the consistency of processing and facilitates the automation of tests.

There are three parts in the clean architecture: the application part (the primary ports and adapters), the domain (the use cases, the domain models, etc.) and the infrastructure part (the secondary ports and adapters).

This architecture is based on the port / adapter pattern and the dependency inversion principle.

_By documenting you on clean architecture (or hexagonal architecture). You will find different names for these parts. The names chosen here are personal, the goal being that they are understandable._

### Use case
The uses cases define the actions of your users. The goal is not to use any framework or libraries in these elements (in order to keep a logic not coupled to these tools).

On the front, they can be represented by function, by class written in JS or TS. With React, it is possible to use redux for this part.

In case redux is used, the actions are the use-cases, the state is one of the models, and the selectors are used to map.

### Primary port
The primary port is used to establish a contract between the primary adapter and the use cases. For this, an interface can be created. In practice, the use case is also considered a primary port.

### Primary adapter
Then, the implementation of these interfaces are used to dialogue with the domain: the first is what we call the primary adapters. Their goal is to trigger the execution of use cases. For example on the front, these adapters can be the React components that perform triggers an action (redux or not).

### Secondary port
The secondary port is used to establish a contract between the secondary adapter and the use cases. For this, we usually create an interface. This interface is used directly in the use case.

_Tips: you can use dependency injection for that, some state management libraries allow you to do that. For example with [redux-thunk](https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument) and [redux-observable](https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html) it is possible to pass "extraArguments" which will be directly available in the redux actions. In "vanilla", there is also [InversifyJS](https://github.com/inversify/InversifyJS)._

### Secondary adapter
The second implementation of interfaces (ports) is called secondary adapters. They are called by the use cases. For example in front, these adapters can be the HTTP requests, the access to the data present in the local-storage, etc.

## Resources
In english :
- [Hexagonal architecture in front-end](https://www.hexa-web.fr/blog/hexagonal-architecture-front-end)
- [Dependency inversion in front-end](https://www.hexa-web.fr/blog/dependency-inversion-front-end)
- [Hexagonal architecture by Alistair Cockburn](https://alistair.cockburn.us/hexagonal-architecture/)

In french :
- [Architecture hexagonale en front-end](https://www.hexa-web.fr/blog/hexagonal-architecture-front-end)
- [Inversion de dépendances en front-end](https://www.hexa-web.fr/blog/dependency-inversion-front-end)
- [Slack de Wealcome](https://wealcome.slack.com/)
- [La Clean Architecture : catalyseur de productivité](https://medium.com/@mickalwegerich/la-clean-architecture-catalyseur-de-productivit%C3%A9-68ff61aa38ff)
- [Architecture Hexagonale : trois principes et un exemple d’implémentation](https://blog.octo.com/architecture-hexagonale-trois-principes-et-un-exemple-dimplementation/)
- [Architecture Hexagonale : le guide pratique pour une clean architecture](https://beyondxscratch.com/fr/2018/09/11/architecture-hexagonale-le-guide-pratique-pour-une-clean-architecture/)
