import { TreeNode } from "./components/TreeNode";

export function handleDragStart(e, setActiveData) {
    const { active } = e;
    const draggedNode = active.data.current?.node;
    setActiveData(draggedNode)

}
export const handleDragOver = (e) => {
    // console.log(e.over.id);
    console.log(e.active.id);
    
}



export const handleDragEnd = (e, setTree, activeData) => {
    const { active, over } = e;
    if (!active || !over) {
        return
    }

    const draggedNode = activeData;
    const targetId = over.id

    if (!draggedNode || !targetId) {
        return;
    }

    // Remove the dragged node from tree
    const removeDraggedNode = (node) => {
        if (node.id === draggedNode.id) {
            return null;
        }
        if (!node.children) return node;

        const filteredChildren = node.children
            .map(removeDraggedNode)
            .filter(child => child !== null);

        return {
            ...node,
            children: filteredChildren,
        };
    };

    // Insert node function as before
    const insertNode = (node) => {
        if (node.id.toString() === targetId) {
            return {
                ...node,
                children: [
                    ...node.children,
                    {
                        ...draggedNode,
                        id: Math.random(),
                        children: draggedNode.children ? draggedNode.children : [],
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
        return node;
    };

    setTree((prevTree) => {
        // Remove dragged node
        const treeWithoutDragged = removeDraggedNode(prevTree);
        if (!treeWithoutDragged) {
            return prevTree;
        }
        return insertNode(treeWithoutDragged);
    });

}

export const renderTree = (node) => (
    <TreeNode key={node.id} node={node} renderTree={renderTree} />
);
