import './App.css';
import Modules from './components/Modules';
import Canvas from './components/Canvas';
import { DragDropContext } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import { templates } from "./data";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const copy = (item, destination, position) => {
  const destClone = Array.from(destination);
  destClone.splice(position, 0, item);
  return destClone;
};

const initialBlocks = [{
    id: uuid(),
    ...templates.text
}];

function App() {
  const [items, setItems] = useState(initialBlocks);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = result => {
    setIsDragging(false);
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if(source.droppableId === "MODULES") {
      const item = {
        id: uuid(),
        ...templates[draggableId]
      }
      setItems( copy(item, items, destination.index));
    }

    if (source.droppableId === "CANVAS") {
      if (source.index === destination.index) {
        return;
      }

      setItems(reorder(items, source.index, destination.index));
    }
  }

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  const handleSave = () => {
    alert("Saved");
    setItems(initialBlocks);
  }

  return (
  <>
    <div className='container'>
      <DragDropContext 
        onDragEnd={handleDragEnd} 
        onDragStart={() => setIsDragging(true)}
      >
        <div className="app">
          <Header />
          <Canvas
            isDragging={isDragging}
            blocks={items}
            onDelete={handleDelete}
            />
          <Modules />
        </div>
      </DragDropContext>
    </div>
    <div className="footer">
        <button type='button' className='main-button' onClick={handleSave}>Guardar</button>
    </div>
  </>
  );
}

export default App;
