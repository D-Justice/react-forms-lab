import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars
    };
  }
  handleChange = (e) => {
    
    this.setState({
      twitterMessage: e.target.value,
      maxChars: this.props.maxChars - e.target.value.length
    })
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(e) => {this.handleChange(e)}}type="text" name="message" id="message" />
        <p>{this.state.maxChars} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
