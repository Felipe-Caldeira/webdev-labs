import React from 'react';
import Posts from './Posts'
import NavBar from './NavBar'
import Profile from './Profile'
import Suggestions from './Suggestions'
import Stories from './Stories'

class App extends React.Component {  

    render () {
        return (
            <div>
                <NavBar title="Photo App" username="Webdev" />
                <aside>
                    <Profile />
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>
            </div>
        );
    }
}

export default App;