import React from 'react';
import Header from './header/Header';


export default function App(props) {
    return(
        <div>
            <Header
                api_key = {props.api_key}
                region = "na1"
            />
        </div>
    )

}