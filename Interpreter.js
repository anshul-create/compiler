//3 + 5 * 2

function interpreter(node) {
  if (node.type === "NUMBERLITERAL") {
    return node.value;
  }

  if (!node.left || !node.right) {
    throw new Error("Invalid AST structure");
  }


  if (node.type === "BinaryExpression") {
    //go left
    const left = interpreter(node.left); //left subtree
    const right = interpreter(node.right); //right subtree

    if(typeof left != "number" || typeof right != "number"){
        throw new Error("Both operand must be number");
    }

    //go right
    //return

    switch (node.operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        if (node.right === 0) {
          throw new Error("Division by zero");
        }
        return left / right;
      default:
        throw new Error("Unknown operator: " + node.operator);
    }
  }
  throw new Error("Unexpected node type : " + node.type);
}
