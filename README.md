### Status
[![Build Status](https://travis-ci.org/sharikovvladislav/task-manager-ng.svg?branch=master)](https://travis-ci.org/sharikovvladislav/task-manager-ng)

### Description

It is Task Manager. Project use GruntJS as task manager.

### Preconditions

[Node.js](https://nodejs.org/) must be installed on your computer.

### 1 Clone

```git clone https://github.com/sharikovvladislav/task-manager-ng.git```

### 2 Install dependencies

```yarn install && bower install```

### 3 Start the application

```grunt run```

### Tests

```grunt karma```

### Grunt tasks
- build - build the application (built application will be stored under `/build`
- run - build the application and start http server with built application (server root is `/build`)
- http-dev - start http server for development (server root is `/public`)
- pre-commit - grunt task for precommit script
