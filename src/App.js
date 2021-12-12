import React, { useState } from 'react';
import Examples from './examples';
import { getBalancedText } from './utils';

const SearchBalance = () => {
    
  const [status, setStatus] = useState('');
  const [inputstring, setInputString] = useState('');

  const handleInputChange = ({target}) => {
    setStatus("");  
    setInputString(target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const balancedResult = await getBalancedText(inputstring);
    console.log(balancedResult);
    setStatus(balancedResult);
  };

  return (
    <div>
      <h1>Algoritmo de balanceo de parentesis</h1>
      <p>El algoritmo busca primero de izquierda a derecha el primer paréntesis de apertura. Si no es un emoticon, lo marca y lo suma en el stack.
        Luego busca el correspondiente al de cierre para igual el stack. Si al terminar la busqueda el stack no esta neutro, entonces el resultado es desbalanceado.
      </p>
      <p><i>(Pueden verse los ciclos de búsqueda en la consola)</i></p>
      <br/>
      <Examples/>
      <br />
      <h2>Consulta</h2>
      <div className="row">
        <div className="col-5">
          <form onSubmit={ (e) => handleSubmit(e)} >
            <input  
              type='text'
              name='mensaje'
              className='form-control'
              placeholder='...'
              autoComplete='off'
              value={inputstring}
              onChange={handleInputChange}
            />
            <div className = "d-grid gap-2">
              <button 
                type="submit"
                className = "btn btn-outline-primary mt-1 " > Comprobar 
              </button>
            </div>       
          </form>   
        </div>
      </div>
      <br/>
      {status != "" && (status === "balanced" ? <h4 className="text-primary">Balanceado!</h4> : <h4 className="text-danger">Desbalanceado!</h4>)}
    </div>
  );
};

export default SearchBalance;