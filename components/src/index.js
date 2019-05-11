import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  var myImage = faker.image.avatar();
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        text="Good stuff"
        image={myImage}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        text="Bad stuff"
        image={myImage}
      />
      <CommentDetail
        author="Bob"
        timeAgo="Yesterday at 5:00PM"
        text="Dumb stuff"
        image={myImage}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
