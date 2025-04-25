import React, { useState } from 'react';

import {
  DndContext,

} from '@dnd-kit/core';


import { Sidebar } from './components/Sidebar';
import { FieldArea } from './components/FieldArea';
import { handleDragOver, handleDragEnd, handleDragStart } from './EssentialFunc';



function App() {
  // Tree State
  const [tree, setTree] = useState({
    id: "root",
    data: "Root Container",
    template: "Container",
    children: [],
  })
  const [activeData, setActiveData] = useState([])
  return (
    <DndContext onDragOver={handleDragOver} onDragEnd={(e) => handleDragEnd(e, setTree, activeData)} onDragStart={(e) => handleDragStart(e, setActiveData)} >
      <div className="d-flex">
        <Sidebar />
        <FieldArea tree={tree} />
      </div>
    </DndContext>
  );

}

export default App