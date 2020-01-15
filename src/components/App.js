import React from 'react';
import Header from './Header';
import ProjectGrid from './ProjectGrid';

class App extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <ProjectGrid />
            </div>
            
        );
    }
}

export default App;