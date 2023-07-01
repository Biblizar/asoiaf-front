import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../../api/lib/character";
import { CharacterData } from "../../../types";
import { Grid, Typography, Input } from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";

export const CharacterList = () => {
  const [characters, setCharacters] = useState<Array<CharacterData>>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getAllCharacters()
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Input
        type="search"
        placeholder="Search your character"
        fullWidth={true}
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        }}
      />
      <Grid container>
        {characters
          ?.filter((item) => {
            return item.aliases[0].toLowerCase().includes(search.toLowerCase());
          })
          .map((character) => {
            return (
              <Grid container item sm={5} key={character.url}>
                <Grid item sm={2}>
                  <Person4Icon color="primary" sx={{ fontSize: 150 }} />
                </Grid>
                <Grid item sm={9} mt={5}>
                  <Typography variant="h6" component="h5">
                    Aliases :{" "}
                    {character.aliases[0]
                      ? character.aliases[0]
                      : "Not Mentioned"}
                  </Typography>
                  <Typography>
                    Culture :{" "}
                    {character.culture ? character.culture : "Not Mentioned"}
                  </Typography>
                  <Typography>Gender : {character.gender}</Typography>
                  <Typography>
                    <Link
                      to={character.url.substring(
                        character.url.lastIndexOf("/") + 1
                      )}
                    >
                      <button className="block">
                        <b>Voir la fiche</b>
                      </button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
