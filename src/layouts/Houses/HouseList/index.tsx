import { useEffect } from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { getAllHouses } from "../../../api/lib/house";
import { HouseData } from "../../../types";
import { Link } from "react-router-dom";

export const HousesList = () => {
  const [houses, setHouses] = useState<Array<HouseData>>();
  useEffect(() => {
    getAllHouses()
      .then((response) => {
        setHouses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(houses);
  return (
    <>
      <Grid container>
        {houses?.map((house) => (
          <Grid container item sm={6}>
            <Grid item sm={4}>
              <OtherHousesIcon color="primary" sx={{ fontSize: 220 }} />
            </Grid>
            <Grid item sm={8} mt={5}>
              <Typography variant="h6" component="h5">
                {house.name}
              </Typography>
              <Typography>
                Author : {house.overlord ? house.overlord : "Not Mentioned"}
              </Typography>
              <Typography>Region : {house.region}</Typography>
              <Typography>
                Words : {house.words ? house.words : "Not mentioned"}
              </Typography>
              <Typography>
                Coat Of Arms :{" "}
                {house.coatOfArms ? house.coatOfArms : "Not mentioned"}
              </Typography>
              <Typography>
                <Link to={house.url.substring(house.url.lastIndexOf("/") + 1)}>
                  <button className="block">
                    <b>Voir la fiche</b>
                  </button>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
