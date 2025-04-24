import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,



  MeasuringStrategy,
  defaultDropAnimation,
} from '@dnd-kit/core';

import {
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Sidebar, SideBarItem } from './components/Sidebar';
import { FieldArea } from './components/FieldArea';
import { handleDragStart, handleDragOver, handleDragEnd } from './EssentialFunc';
import { fields } from './components/FieldList';
import { snapCenterToCursor } from '@dnd-kit/modifiers';

function App() {

  const [activeData, setActiveData] = useState({
    activeId: null,
    activeType: null
  });
  const [fieldAreaElements, SetFieldAreaElements] = useState([])

  const sensors = useSensors(
    useSensor(PointerSensor),
  );

  

  return (
    <DndContext onDragStart={(e) => handleDragStart(e, setActiveData)} onDragOver={handleDragOver} onDragEnd={(e) => handleDragEnd(e, setActiveData, fieldAreaElements, SetFieldAreaElements)} modifiers={[snapCenterToCursor]} >
      <div className="d-flex">
        <Sidebar />

        <FieldArea acceptedFields={fields.map(field => field.type).join(",")} activeData={activeData} fieldAreaElements={fieldAreaElements} />
      </div>
      <DragOverlay modifiers={[restrictToWindowEdges]}>
        {activeData.activeId ? (
          <ul className='sidebarlist box overlay'>
            <li>{activeData.activeType.title}</li>
          </ul>
        ) : null}
      </DragOverlay>
    </DndContext>
  );

}

export default App