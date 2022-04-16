App = {
  // 0.function load area:async
  contracts:{},
  load: async () => {
    await App.loadWeb3();
    console.log("app loading");
    await App.loadAccount();
    await App.loadContract();
    await App.render();
  },

  // a.function area
  // load the Web3
  loadWeb3: async () => {
    if (typeof web3 !== "undefined") {
      //   App.web3Provider = web3.currentProvider;
      App.web3Provider = web3.currentProvider;
      //   web3 = new Web3(web3.currentProvider);
      web3 = new Web3(web3.currentProvider);
    } else {
      window.alert("Please connect to Metamask.");
    }
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        // Request account access if needed
        await ethereum.enable();
        // Acccounts now exposed
        web3.eth.sendTransaction({
          /* ... */
        });
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider;
      window.web3 = new Web3(web3.currentProvider);
      // Acccounts always exposed
      web3.eth.sendTransaction({
        /* ... */
      });
    }
    // Non-dapp browsers...
    else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  },
  loadAccount: async () => {
    web3.eth.defaultAccount = web3.eth.accounts[0]
    App.account = web3.eth.accounts[0];
    console.log(App.account);
  
  },

  // load the contract information from TodoList.json
  loadContract: async () => {
    // load the json
    const todoList = await $.getJSON('TodoList.json')
    // Conract format
    App.contracts.TodoList= TruffleContract(todoList)
    // setProvider
    App.contracts.TodoList.setProvider(App.web3Provider)
// deployed the contract
    App.todoList = await App.contracts.TodoList.deployed()

  },
  // render the id to the html page
  render:async () => {
// jQuey load the account to the html package
$('#account').html(App.account)
  }
};

// jQuery load the function Window load the function
$(() => {
  $(window).load(() => {
    App.load();
  });
});
