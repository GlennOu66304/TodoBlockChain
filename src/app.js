App = {
  loading: false,
  // 0.function load area:async
  contracts: {},
  load: async () => {
    await App.loadWeb3();
    console.log("app loading");
    await App.loadAccount();
    await App.loadContract();
    // await App.createTask();
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
    web3.eth.defaultAccount = web3.eth.accounts[0];
    App.account = web3.eth.accounts[0];
    console.log(App.account);
  },

  // load the contract information from TodoList.json
  loadContract: async () => {
    // load the json
    const todoList = await $.getJSON("TodoList.json");
    // Conract format
    App.contracts.TodoList = TruffleContract(todoList);
    // setProvider
    App.contracts.TodoList.setProvider(App.web3Provider);
    // deployed the contract
    App.todoList = await App.contracts.TodoList.deployed();
  },

  // render the id to the html page
  render: async () => {
    // 1.before you load the contract, it does not show the loading text;
    if (App.loading) {
      return;
    }
    // 2.during getting the contract content, show the loading text;
    App.setLoading(true);
    // jQuey load the account to the html package
    $("#account").html(App.account);
    // 3.get the contract content, stop the loading text;
    await App.renderTask();
    App.setLoading(false);
  },
  // rendder the task to the front end
  renderTask: async () => {
    // load the total count
    const taskCount = await App.todoList.taskCount();
    const $taskTemplate = $(".taskTemplate");
    // render the taks with task template
    for (let i = 0; i <= taskCount; i++) {
      const task = await  App.todoList.tasks(i);
      const taskId = task[0].toNumber();
      const taskContent = task[1];
      const taskCompleted = task[2];
      // html build
      const $newTaskTemplate = $taskTemplate.clone();
      $newTaskTemplate.find(".content").html(taskContent);
      $newTaskTemplate
        .find("input")
        .prop("name", taskId)
        .prop("checked", taskCompleted)
        // .prop("click", App.toggleCompleted);

// html organized
      if (taskCompleted) {
        $("#completedTaskList").append($newTaskTemplate);
      } else {
        $("#taskList").append($newTaskTemplate);
      }

       // show the content
    $newTaskTemplate.show();
    }

   
  },

  createTask: async () => {
  //  loading issue fix
  App.setLoading(true)
   // html open
  const content = $('#newTask').val()
  await App.todoList.createTask(content)
  window.location.reload()
 
  },
  // set up the loading
  setLoading: (boolean) => {
    // set up the boolean value as well
    App.loading = boolean;
    // first assing the html value tag name, and value to the varible;
    const loading = $("#loader");
    const content = $("#content");
    // if else decide show or not show the value(hide or show)

    if (boolean) {
      loading.show();
      content.hide();
    } else {
      loading.hide();
      content.show();
    }
  },
};

// jQuery load the function Window load the function
$(() => {
  $(window).load(() => {
    App.load();
  });
});
