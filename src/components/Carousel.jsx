import React  from 'react';
import '../assets/styles/components/Carousel.scss';



const Carousel = props => {
  return (
    <section className="carousel">
      <div className="carousel__container">
          {props.children}
      </div>
    </section>
  );
};

export default Carousel;
 



/*//el children lo Destructuramos de las props que se le pasan al componente
const Carousel = ({children} ) => (
    <section className="carousel">
      <div className="carousel__container">
         {children}
       </div>
    </section>
);

export default Carousel;*/