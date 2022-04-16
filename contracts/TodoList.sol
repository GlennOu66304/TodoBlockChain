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

    // constructor

    constructor() public {
        createTask("Check out dappuniversity.com "); // use the function below
    }

    // function
    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}
