import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Button Clicked (Functional Component)');
    }

  return (
    <div>
        <button onClick={clickHandler}>Functional Component</button>
    </div>
  )
}

export default FunctionClick