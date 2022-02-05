import { useState } from "react";
import PropTypes from "prop-types";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";


const Search = ({ findCharacters }) => {
    const [character, setCharacter] = useState("");

    const getCharacters = (e) => {
        e.preventDefault();
        findCharacters(character);
    }
    return (
          <Form onSubmit={getCharacters} className="search-character__input">
            <InputGroup>
                <FormControl placeholder="Personaje..." onChange={(e) => setCharacter(e.target.value)} value={character} name="character" />
                <button className="button" type="submit">Buscar</button>
            </InputGroup>
            </Form> 
    );
};

Search.propTypes = {
    findCharacters: PropTypes.func.isRequired,
};
export default Search;
