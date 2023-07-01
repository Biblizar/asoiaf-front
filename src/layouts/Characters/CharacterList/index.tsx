import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../../api/lib/character";
import { CharacterData } from "../../../types";
import { Grid, Typography, Input, ButtonGroup, Button, Box } from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";

export const CharacterList = () => {
  const [ characters, setCharacters ] = useState<Array<CharacterData>>();
  const [ search, setSearch ] = useState<string>("");
  const [ page, setPage ] = useState<number>(1)

  useEffect(() => {
    getAllCharacters(`page=${page}`)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);
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
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        sx={{flexWrap: "wrap"}}
      >
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
                    Name : {character.name ? character.name : "Not Mentioned"}
                  </Typography>
                  <Typography component="h6">
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
                      <button>
                        <b>Voir la fiche</b>
                      </button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
      </Box>
      <Box textAlign="center">
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
