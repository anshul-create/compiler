// int x = 10;

export function evaluate(node, env = new Map()) {
  if (!node || node == null) {
    throw new Error("Invalid node");
  }


  if (node.type === "NumberLiteral") {
    return node.value;
  }

  //

  if (node.type === "BinaryExpression") {
    if (!node.left || !node.right) {
      throw new Error("Invalid AST structure");
    }
    //recursive deeply
    const left = evaluate(node.left); //left subtree
    const right = evaluate(node.right); //right subtree

    if (typeof left != "number" || typeof right != "number") {
      throw new Error("Both operand must be number");
    }

    switch (node.operator) {
      case "PLUS":
        return left + right;
      case "MINUS":
        return left - right;
      case "STAR":
        return left * right;
      case "SLASH":
        if (right === 0) {
          throw new Error("Division by zero");
        }
        return left / right;
      default:
        throw new Error("Unknown operator: " + node.operator);
    }
  }
  throw new Error("Unexpected node type : " + node.type);
}
