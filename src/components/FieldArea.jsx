import { useDroppable } from '@dnd-kit/core';
import { fieldRenderers } from './FieldList';


function Droppable({ type }) {
    const Components = fieldRenderers?.[type]
    console.log(Components);


    return Components
}


export const FieldArea = ({ acceptedFields, activeData, fieldAreaElements }) => {
    const { setNodeRef } = useDroppable({
        id: 'droppable-1',
        data: {
            accepts: acceptedFields,
        },
    });

    return (
        <div className='box' ref={setNodeRef}>
            {fieldAreaElements.map(area => {
                return (
                    <Droppable type={area?.elements} />
                )
            })}
        </div>
    )
}
