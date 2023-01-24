import React, { useState } from "react";
import list from "../list.json";
import "./List.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const List = () => {
  const [data, setData] = useState(list);

  const onDragEnd = (result) => {
    console.log(result);
    const items = data;
    const [reoderData] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reoderData);
    setData(items);
  };

  console.log(list);
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="container"
            >
              {data.map((data, index) => {
                return (
                  <Draggable
                    key={data.id}
                    draggableId={data.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="list"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {data.name}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default List;
