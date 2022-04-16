##1.SetUp The Project(Branch Name,Git Commit Name):

Goals:

1.1set up the project

1.2truffile compile the project



Processs:

0.build the directoy

1.git init

2.git branch

3.git ignore:node module

3.truffile usage:set up the truffile version

```javascript
npm i truffle@5.0.20 -g
```

if you can not install, then just turn vpn mode to the stealth

build the layout of the project

```javascript
truffle init
```



4.package json use:From the github link



5.SetUp Finish:

truffle compile

a.build new sol file in the contract folder, 

a.1export it to the migrations folder;

a.2 truffle compile build a json file in the build /contracts folder:

```javascript
truffle compile
```



b.change the config status

c.deploied it to the blockChiain

```javascript
truffle migrage
```

check the deployed status:

```javascript
//first go to the console:
truffle console
//await assign the value to the todolist
todolist = await TodoList.deployed()
// get the this value
todolit
//get the address
truffle(development)> todolist.address
//get the taskCount
truffle(development)> todolist.taskCount()
//BN { negative: 0, words: [ 0, <1 empty item> ], length: 1, red: null }
truffle(development)> taskCount = await todolist.taskCount()
//undefined
truffle(development)> taskCount.toNumber()
//0
```



d.ganache

[Ganache install](https://trufflesuite.com/ganache/)

e.Metamask build

**Reference**

[Build Your First Blockchain App Using Ethereum Smart Contracts and Solidity](https://www.youtube.com/watch?v=coQ5dg8wM2o)

[SourceCode](https://github.dev/dappuniversity/eth-todo-list)