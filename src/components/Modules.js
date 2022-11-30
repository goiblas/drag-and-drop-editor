import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { modules } from '../data';

const getItemStyle = (isDragging, draggableStyle) => ({
  outline: isDragging ? "2px solid #3420B9": "none",
  boxShadow: isDragging 
    ? "0 10px 18px rgba(0, 0, 0, 0.35)"
    : "0 11px 13px 0 rgba(0, 0, 0, 0.12), 0 2px 14px 0 rgba(0, 0, 0, 0.06)",
  ...draggableStyle
});

const Modules = () => {
    return (
      <Droppable droppableId="MODULES" isDropDisabled={true}>
          {(provided, snapshot) => (
              <div className="modules" {...provided.droppableProps} ref={provided.innerRef}>
                  <div className="modules-container">
                  {modules.map((item, index) => (
                    <Draggable
                          key={item.type}
                          draggableId={item.type}
                          index={index}>
                          {(provided, snapshot) => (
                            <React.Fragment>
                              <div ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="module"
                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                                  <img src={item.image} alt={item.title} width={249} height={131} />
                                </div>
                                {snapshot.isDragging && (
                                  <div className="copy" style={{
                                    aspectRatio: "249 / 131",
                                  }}>
                                    {item.title}
                                  </div>
                                )}
                          </React.Fragment>
                        )}
                        </Draggable>
                  ))}
                  {provided.placeholder}
                  </div>
              </div>
          )}
      </Droppable>
    )
}

export default Modules;