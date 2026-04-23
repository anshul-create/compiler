//3 + 5 * 2

function interpreter(node) {
  if (node.type === "NUMBERLITERAL") {
    return node.value;
  }

  if (node.type === "BinaryExpression") {
    //go left
    const left = interpreter(node.left);  //left subtree
    const right = interpreter(node.right);  //right subtree

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
        return left / right;
    }
}
throw new Error("Unexpected node type : " + node.type);

}
