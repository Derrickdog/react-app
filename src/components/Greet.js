import React from 'react'

// function Greet() {
//     return <h1>Hello Derrick</h1>
// }

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Derrick',
//     lastName: 'Ryan'
// };

// const Greet = () => <h1>Hello {formatName(user)}</h1>

// function getGreeting(user) {
//     if(user) {
//         return <h1>Hello {formatName(user)}</h1>
//     }
//     return <h1>Hello Stranger</h1>
// }

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
    )
}

const GreetDestruct = ({name, heroName}) => {
    // const {name, heroName} = props;
    return (
        <div>
            <h1>Hello {name} aka {heroName}</h1>
        </div>
    )
}

export default Greet;