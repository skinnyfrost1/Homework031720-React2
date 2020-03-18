import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Postinfo from './Postinfo/Postinfo';

class App extends Component {

  state = {
    posts: [],
    showposts: false,
    beforeFetching: true
  }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ posts: data, showposts: false, beforeFetching: false });
    console.log(this.state.posts);
  }

  togglePost = () => {
    console.log("togglePost");
    console.log(this.state);

    const togglePost = this.state.showposts;
    this.setState({
      showposts: !togglePost
    })

  }


  render() {
    console.log("Iam in render");
    const style = {
      backgroungColor: 'white',
      font: 'inherit',
      border: '1px solid rgb(19, 150, 235)',
      padding: '8px'
    };

    const tableStyle = {
      maxWidth: "75%",
      margin: "auto"
    }
    let postinfo = null;
    if (this.state.showposts) {
      postinfo = ((
        <table className="postTable" style={tableStyle} border="1">
          <thead>
            <tr >
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.posts.map((post, index) => {
                return <Postinfo userId={post.userId}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  key={post.id} />
              })
            }
          </tbody>
        </table>
      ))

    }
    else {
      postinfo = null;
    }

    return (
      <div className="App">
        <h1>Welcome. This is my react pratice 2.</h1>

        <div>
          {this.state.beforeFetching || !this.state.posts ? (
            <h2>Fetching data... </h2>
          ) : (
              <div>
                <h2>Success!</h2>
                <div>You can use the Toggle Posts button now.</div>
              </div>
            )
          }
        </div>

        <button style={style} onClick={this.togglePost}> Toggle Posts</button>
        <div className="PostTableContainer">
          {postinfo}
        </div>
      </div>
    );
  }

}

export default App;
