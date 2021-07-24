import React from 'react';
import '../assets/styles/components/Categories.scss';


//Se agrega div para que se pueda heredar a los hijos por medio de los promt
const Categories = ({children, title}) => (
  <div className="categories">
      <h3 className="categories__title">{title}</h3>
       {children}
  </div>
  
);

export default Categories;








/*const Categories = (props) => {
    const { title } = props;
    return (
      <div>
        <h3 className="categories__title">{title}</h3>
        {props.children}
      </div>
    );
  };
  
