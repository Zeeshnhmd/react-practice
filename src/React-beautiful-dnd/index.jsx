import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./reactBeautifulDnd.module.scss";

const ReactBeautifulDnd = () => {
  // const data = [
  //   {
  //     id: "1",
  //     name: "zeeshan",
  //     location: "JSR",
  //     avatar: "https://robohash.org/YOUR-TEXT.png",
  //   },
  //   {
  //     id: "2",
  //     name: "Arpit",
  //     location: "DHAN",
  //     avatar: "https://robohash.org/YOUR-TEXT.png",
  //   },
  //   {
  //     id: "3",
  //     name: "Ujjwal",
  //     location: "ASSAM",
  //     avatar: "https://robohash.org/YOUR-TEXT.png",
  //   },
  //   {
  //     id: "4",
  //     name: "Reetool",
  //     location: "J&K",
  //     avatar: "https://robohash.org/YOUR-TEXT.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Rayyan",
  //     location: "RAN",
  //     avatar: "https://robohash.org/YOUR-TEXT.png",
  //   },
  // ];

  //TODO: React beautiful DND

  const data = [
    {
      id: "1",
      title: "Shortlisted",
      cadidate: [],
    },
    { id: "2", title: "Cultural evaluation" },
    { id: "3", title: "Technical interview" },
    { id: "4", title: "Final discussion" },
  ];
  const [card, setCard] = useState(data);

  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(card);
    const [recordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItems);

    setCard(items);
  };

  return (
    <div className={styles["wrapper"]}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <div
              className={styles["cards-wrapper"]}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {card.map((el, index) => (
                <Draggable key={el.id} draggableId={el.id} index={index}>
                  {(provided) => (
                    <div
                      className={styles["card"]}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <img
                        className={styles["avatar"]}
                        src={el.avatar}
                        alt="avatar"
                      />
                      <div>
                        <h1 className={styles["name"]}>Name: {el.name}</h1>
                        <p className={styles["address"]}>
                          Location: {el.location}
                        </p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ReactBeautifulDnd;
