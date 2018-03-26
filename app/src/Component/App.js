import React from 'react';
import data from '../data.js'
import PostList from './PostList.js'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 10
        };
        // this.add = this.add.bind(this);
        // this.rm = this.rm.bind(this);

    }
    add = () => {
        const { num } = this.state;
        this.setState({
            num: num < data.length ? num + 10 : data.length
        });
    }
    rm = () => {
        const { num } = this.state;
        this.setState({
            num: num > 10 ? num - 10 : 10
        });
    }

    render = () => {
        return (
            <React.Fragment> 
                <h1>Home Task #3</h1>
                <PostList count={this.state.num}/>
                 <div className="but">
                    <button onClick={this.add}>More</button>
                    <button onClick={this.rm}>Less</button>
                </div>
            </React.Fragment> 
        );
    }
}

export default App



                // <button onClick={this.add}>+</button>
                // <button onClick={this.rm}>-</button>
