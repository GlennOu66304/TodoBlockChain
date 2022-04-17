// Source File requires different compiler version
// https://ethereum.stackexchange.com/questions/63530/source-file-requires-different-compiler-version

pragma solidity >=0.5.0;

contract TodoList {
    uint256 public taskCount = 0; //const or let

    // struct define the data type
    struct Task {
        uint256 id;
        string content;
        bool completed;
    }
    // mapping

    mapping(uint256 => Task) public tasks; //const or let
    // event
    event TaskCreated(uint256 id, string content, bool completed);

    // constructor
    // use the function below
    constructor() public {
        createTask("Check out dappuniversity.com");
    }

    // function
    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        // new ways of createTask
        emit TaskCreated(taskCount, _content, false);
    }

    event TaskCompleted(uint256 id, bool completed);

    // function
    function toggleCompleted(uint256 _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        // new ways of createTask
        emit TaskCompleted(_id, _task.completed);
    }
}
