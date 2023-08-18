import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
    
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error);
      console.log(errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <div className="mt-[170px]">
            <h1 className="text-center font-sans h1 leading-10 ">Ooopss! <br/>Something went wrong</h1>
            <p className="text-center font-serif mt-5">An error occured. Please check the error message</p>
          </div>
        )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary