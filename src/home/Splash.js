import React from 'react';
import ArtworkIndex from '../screens/ArtworkIndex';



class Splash extends React.Component{
    render(){
        return (
            <div>
                <ArtworkIndex token={this.props.sessionToken}/>
            </div>
        )
    }
}

export default Splash;