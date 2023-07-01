import { getCharacterById } from "../../api/lib/character";
import { CharacterData } from "../../types";

//TODO don't work!
export const CharactersInBook = ({ characters }: any) => {
  const charactersListed = characters.map((character: any) => {
    getCharacterById(character.substring(character.lastIndexOf("/") + 1))
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  });
  console.log(charactersListed);
  return (
    <>
      {charactersListed &&
        charactersListed.map((char: CharacterData) => {
          <p>{char.name}</p>;
        })}
    </>
  );
};
