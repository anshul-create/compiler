export function analyze(ast){
    const declared = new Set();

    function visit(node){
        if(!node) return;

        if(node.type === 'NumberLiteral'){
            return node.value;
        }

        if(node.type === 'Identifier'){
            if(!declared.has(node.name)){
                throw new Error("Variable not declared :", node.name);
            }
            return;
        }

        if(node.type === 'Assignement'){
            //RHS First
            visit(node.value);

            if(!declared.has(node.name)){
                throw new Error('Variable not declared : ', node.name);

            }
            return;
        }


    }

}