import React from 'react';

const Examples = () => {
  return (
    <div>
      <h5>Ejemplos</h5>
      <p>a. "hola" = <strong>balanceado</strong></p>
      <p>b. "(hola)" = <strong>balanceado</strong></p>
      <p>c. "(()" = <strong>desbalanceado</strong></p>
      <p>d. "(:)" = <strong>balanceado</strong> (ej, si consideramos el mensaje como un ":" [regla 2] entre paréntesis [regla 3])</p>
      <p>e. "no voy (:()" = <strong>balanceado</strong> (ej, si consideramos un emoticón triste [regla 5] entre paréntesis [regla 3])</p>
      <p>f. "hoy pm: fiesta :):)" = <strong>balanceado</strong></p>
      <p>g. ":((" = <strong>desbalanceado</strong></p>
      <p>h. "a (b (c (d) c) b) a :)" = <strong>balanceado</strong> (ej, si el último paréntesis es en realidad un emoticón)</p>
    </div>
  );
};

export default Examples;