import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Button Clicked (Functional Component)');
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick