import { useState, useEffect } from "react";

const useInitalState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        return setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  return videos;
};

export default useInitalState;









/*import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [ videos, setVideos ] = useState([]);
  useEffect (() => {
      fetch(API)
      .then(response => response.json()) //llamado
      .then(data => setVideos(data)); //envioa mi estado funcion setVideo
   }, []); //arreglo vacio[] para evitar que se un loop infinito el cual lo escucha setVideo
 
    return videos;
};

export default useInitialState;*/