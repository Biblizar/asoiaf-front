import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../../api/lib/character";
import { CharacterData } from "../../../types";

export const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterData>();

  useEffect(() => {
    if (id) {
      getCharacterById(id)
        .then((response) => {
          console.log(response.data);
          setCharacter(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return <div>{character && <div>{character.aliases}</div>}</div>;
};
