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
}
