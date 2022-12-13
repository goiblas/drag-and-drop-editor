import React, { Fragment, useEffect } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import headerImage from '../assets/template-header.png';
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import Loading from "./Loading";

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    overflow: isDragging ? "hidden": undefined,
    outline: isDragging ? "2px solid #3420B9": "none",
    boxShadow: isDragging 
      ? "0 10px 18px rgba(0, 0, 0, 0.35)"
      : "none",
      ...draggableStyle
  });
  
const Canvas = ({ blocks, onDelete, onEdit, selectedId }) => {    
    useEffect(() => {
        console.log("blocks", blocks);
    }, [blocks]);
    return (
        <Droppable droppableId="CANVAS">
        {(provided, snapshot) => (
            <div className="canvas" ref={provided.innerRef}>
                <div className="canvas-bg">
                    <img src={headerImage} className="canvas-header" alt="" />
                    {blocks.map((block, index) => (
                        <Fragment key={block.id}>
                                <Draggable draggableId={block.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                        className={`template ${block.id === selectedId ? "template-selected" : ""}`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                            )}
                                            >
                                            {block.loading && (
                                                <div className="template-loading">
                                                    <Loading />
                                                </div>
                                            )}
                                            {!block.loading && (
                                                <img src={block.image} alt={block.title} />
                                            )}
                                            <div className="template-actions">
                                                <div className="actions-group">
                                                    <button type="button" className="icon-button" onClick={() => onEdit(block.id)}>
                                                        <EditIcon />    
                                                    </button>
                                                    <button type="button" className="icon-button" onClick={() => onDelete(block.id)}>
                                                        <DeleteIcon />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                        </Fragment>
                    ))}
                    {provided.placeholder}
                </div>
            </div>
        )}
        </Droppable>
    )
}

export default Canvas;