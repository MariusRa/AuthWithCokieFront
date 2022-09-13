import React from 'react';

const Home = (props) => {
    const {name} = props;
    return (
        <div>
            {name? 'Hi, ' + name + '!': 'You are not logged in'}
        </div>

    );
};

export default Home;