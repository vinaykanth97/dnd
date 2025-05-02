import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

export function TreeNode({ node, renderTree }) {

    const isContainer = node?.template === "Container";



    const { setNodeRef: dropRef } = useDroppable({
        id: `${node?.id}`,
        disabled: !isContainer,
    });

    const {
        setNodeRef: dragRef,
        attributes,
        listeners,
        transform,
    } = useDraggable({
        id: `drag-${node?.id}`,
        data: { node },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    const renderContent = () => {


        switch (node?.template) {
            case "Input":
                return <input type="text" placeholder="Text Input" disabled />;
            case "Textarea":
                return <textarea placeholder="Textarea" disabled />;
            case "Checkbox":
                return (
                    <label>
                        <input type="checkbox" disabled /> Checkbox
                    </label>
                );
            case "Button":
                return <button disabled>Button</button>;

            case "Container":
            default:
                return <div>{node?.template}</div>;
        }
    };



    return (
        <div className={`outline-boxes ${node?.template}`} style={{ marginLeft: "10px", minHeight: "50px", outline: "1px solid blue" }}>
            <div
                ref={dragRef}
                {...attributes}
                {...listeners}
                style={{
                    ...style,
                }}
            >
                {renderContent()}
            </div>
            {isContainer ? (
                <>{node.children.map((child) => {
                    return renderTree(child)
                })}
                    <div className="placeholder" ref={dropRef}>Drag any fields here</div>
                </>
            ) : <>
            </>}

        </div>
    );
}