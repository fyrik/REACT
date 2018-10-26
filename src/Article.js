import React, {Component} from 'react'

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpne: false};
        this.toggle.bind(this);
    }

    render() {
        const {article} = this.props;
        return (<div>
            {this.getBody({article})}
            <button onClick={this.toggle}>
                {this.state.isOpne ? 'close' : 'open' }
            </button>
        </div>)
    }

    toggle = () => {
        this.setState({isOpne: !this.state.isOpne});
    }

    getBody(){
        const {article} = this.props;
        return this.state.isOpne ? <p>{article.title}</p> : null;
    }
}