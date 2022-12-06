import React from "react";
import styles from "./reactBeautifulDnd.module.scss";

const ReactBeautifulDnd = () => {
  const data = [
    {
      id: "1",
      name: "zeeshan",
      location: "JSR",
      avatar: "https://robohash.org/YOUR-TEXT.png",
    },
    {
      id: "2",
      name: "Arpit",
      location: "DHAN",
      avatar: "https://robohash.org/YOUR-TEXT.png",
    },
    {
      id: "3",
      name: "Ujjwal",
      location: "ASSAM",
      avatar: "https://robohash.org/YOUR-TEXT.png",
    },
    {
      id: "4",
      name: "Reetool",
      location: "J&K",
      avatar: "https://robohash.org/YOUR-TEXT.png",
    },
    {
      id: "5",
      name: "Rayyan",
      location: "RAN",
      avatar: "https://robohash.org/YOUR-TEXT.png",
    },
  ];

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["cards-wrapper"]}>
        {data.map((el) => (
          <div key={el.id} className={styles["card"]}>
            <img className={styles["avatar"]} src={el.avatar} alt="avatar" />
            <div>
              <h1 className={styles["name"]}>Name: {el.name}</h1>
              <p className={styles["address"]}>Location: {el.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactBeautifulDnd;
