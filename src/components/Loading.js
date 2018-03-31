import React from 'react';
import './styles/Loading.css'; 


class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentText: props.displayText,
      originalText: props.displayText,
      dots: 0
    };
    this.intervalHandle = null;
  }

  componentDidMount() {
    this.intervalHandle = setInterval(() => {
      if (this.state.dots > 2){ 
        this.setState({
          currentText: this.state.originalText,
          dots: 0
        })
      }
      else {
        this.setState(prevState => {
          return ({
            currentText: this.state.currentText + '.',
            dots: prevState.dots + 1
            })
          });
        }
      }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  render() {
    return(
      <p className="loading">{this.state.currentText}</p>
    );
  }
}

export default Loading;