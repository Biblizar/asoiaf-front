import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHouseById } from "../../../api/lib/house";
import { HouseData } from "../../../types";

export const House = () => {
  const { id } = useParams();
  const [house, setHouse] = useState<HouseData>();

  useEffect(() => {
    if (id) {
      getHouseById(id)
        .then((response) => {
          console.log(response.data);
          setHouse(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div>
      {house && (
        <>
          <h1>{house.name}</h1>
          <div>
          </div>
        </>
      )}
    </div>
  );
};
