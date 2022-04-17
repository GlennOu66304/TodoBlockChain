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



##2.Create the initial function:

Goal:

When you run the truffle console, you could see the task content, id, function



Process:

1.mapping

2.constructor

3. 3.truffle migrate ang trfuffle reset (no need truffle compile)

```javascript
truffle migrage --reset
```



4.truffle console



## 3 Front End file build

Goal: set up the front end site to load the user name, also other



Process:

1.buid the src folder, index.html file, app.js file

2.comment the form file

3.build the bs.config .js, paste the content from the github repo

```javascript
npm run dev//start the front end project, server is from lite server
```





4.install the meta mask extension(login the test account)

5.input the private key from the ganache 

6.App.js write the function:

0.function load area

a.function area

b.web3 project

**[Uncaught TypeError: Web3 is not a constructor](https://ethereum.stackexchange.com/questions/122660/uncaught-typeerror-web3-is-not-a-constructor)**

```javascript
npm i web3@0.20.7
```

[TypeError: Web3 is not a constructor when trying to use node.js with truffle-contract](https://ethereum.stackexchange.com/questions/50294/typeerror-web3-is-not-a-constructor-when-trying-to-use-node-js-with-truffle-con)

```javascript
<script src="./js/truffle-contract.js"></script>
<script src="./js/web3.min.js"></script>
```

d add the test Network to the Metamask:

```javascript
npm install ganache
npm run ganache
```

**[ganache](https://github.com/trufflesuite/ganache)**



[How to add Custom Network to Metamask](https://dev.to/afozbek/how-to-add-custom-network-to-metamask-l1n)



[The endpoint returned a different chain ID: 0x539 (Ganache)](https://ethereum.stackexchange.com/questions/90385/the-endpoint-returned-a-different-chain-id-0x539-ganache)



E:load the id:

## contract content and loading:



4.show the task information in the contract



## Always can not show the account id and the console has the network does not deployed?



You need to regenerate the Network by running the code below:

```bash
truffle migrage --reset
```



## create Task

**Goal**

enable the input area in the front end

you could input the content, then enter, the page will reload, then render the result

Also you can check the trasnsication and wallet in the Gannache,metamask will ask you to confirm the action



Write the logic in the the sol file:

1.event

2.use it

write the test in the test file

write the front end code in the js file

1.in the app.js



**[html] A 'return' statement can only be used within a function body**

[[html] A 'return' statement can only be used within a function body](https://github.com/microsoft/vscode/issues/143220)

**Reference**

[Build Your First Blockchain App Using Ethereum Smart Contracts and Solidity](https://www.youtube.com/watch?v=coQ5dg8wM2o)

[SourceCode](https://github.dev/dappuniversity/eth-todo-list)