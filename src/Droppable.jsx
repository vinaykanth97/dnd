import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props) {
    const { setNodeRef, isOver } = useDroppable({
        id: 'droppable',
        data: {
            accepts: ['type1', 'type2'],
        },
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };


    return (
        <div ref={setNodeRef} style={style} className='box'>
            Drop Box
        </div>
    );
}

export default Droppable