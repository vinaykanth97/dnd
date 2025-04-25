import { TreeNode } from "./components/TreeNode";

export function handleDragStart(e, setActiveData) {
    const { active } = e;
    const draggedNode = active.data.current?.node;
    setActiveData(draggedNode)

}
export const handleDragOver = (e) => {
    // console.log(e);
}
export const handleDragEnd = (e, setTree, activeData) => {
    const { active, over } = e;
    if (!active || !over) return;

    const draggedNode = activeData;
    
    const targetId = over.id?.toString().replace("drop-", "");
    
    if (!draggedNode || !targetId) return;

    const insertNode = (node) => {
        if (node.id.toString() === targetId) {
            return {
                ...node,
                children: [
                    ...node.children,
                    {
                        ...draggedNode,
                        id: Math.random(), 
                        children: draggedNode.template === "Container" ? [] : [],
                    },
                ],
            };
        }

        

        if (node.children?.length) {
            return {
                ...node,
                children: node.children.map(insertNode),
            };
        }
     
        console.log(targetId);
        
        return node;
    };

    setTree((prevTree) => insertNode(prevTree));

}

export const renderTree = (node) => (
    <TreeNode key={node.id} node={node} renderTree={renderTree} />
);