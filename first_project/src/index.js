import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//COMPONENTS
import Header from './Components/header';
import NewsList from './Components/news_list';

class App extends Component {

    state = {
        news: JSON
    }

    render(){
        return (
            <div>
                <Header/>
                <NewsList news={this.state.news}>
                    <h3>The news are:</h3>
                </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));