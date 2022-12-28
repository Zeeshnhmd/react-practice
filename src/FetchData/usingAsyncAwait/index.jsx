import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

import errorSVG from "../images/404.svg";

import styles from "./asyncAwait.module.scss";

const AsyncAwait = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
      console.log(users, "data");
    } catch (err) {
      setError(err.message);
      setUsers(null);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles["async-await-wrapper"]}>
      <div className={styles["async-await"]}>
        {loading && (
          <div className={styles["loader-wrapper"]}>
            <PacmanLoader
              loading={loading}
              size={25}
              className={styles["loader"]}
              color="#000000"
            />
          </div>
        )}

        {error && (
          <div className={styles["error-wrapper"]}>
            <img className={styles["error"]} src={errorSVG} alt="error" />
          </div>
        )}
        {!loading && !error && (
          <div className={styles["cards-wrapper"]}>
            {users.map((user) => (
              <Link to={user.website} key={user.id} className={styles["card"]}>
                <img
                  className={styles["avatar"]}
                  src="https://robohash.org/YOUR-TEXT.png"
                  alt=""
                />
                <p className={styles["name"]}>{user.name}</p>
                <p className={styles["email"]}>{user.email}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AsyncAwait;
