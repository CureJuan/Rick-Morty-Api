import { useState } from "react";
import "./App.scss"
import { useFetch } from "./hooks/useFetch";
import Characters from "./components/Characters/Characters";
import { Container } from "react-bootstrap";
import Loading from "./components/common/Loading";
import Search from "./components/Search/Search"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import Modal from "./components/Modal/Modal"

function App() {
 
  const [endpoint, setEndpoint] = useState("character");
  const { data, loading, error } = useFetch(endpoint);
  const { results: characters, info} = data;
  const [estadoModal, cambiarEstadoModal] = useState(false);
   
  const findCharacters = (character) => {
    setEndpoint (`character?name=${character}`)
  }

  const findPage = (data) => {
    setEndpoint(`${data}`)
  }

  if (loading) return <Loading />; 
  if (error) return <h3>!!Ocurrió un ERROR !!!</h3>

  const onPrevious = () => {
    findPage(info.prev);
  }
  const onNext = () => {
   findPage(info.next);
  }

  return <Container className="App">
    <Header />
    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    <Search className="search" findCharacters={findCharacters}/>
    <Characters characters={characters} />
    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
   <Footer />
    <Modal
      estado={estadoModal}
      cambiarEstado={cambiarEstadoModal}
     >  
      
    </Modal>
    </Container>;   
}

export default App;
