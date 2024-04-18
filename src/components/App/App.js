import React from "react";
import ToastProvider from "../ToastProvider";
import ToastingGround from "../ToastingGround";
import Footer from "../Footer";

function App() {
  return (
    <ToastProvider>
      <ToastingGround />
      <Footer
        text={
          <p>
            This is a challenge project as part of Joshua Comeau's{" "}
            <b>Joy of React</b> course
          </p>
        }
        address={
          <address>
            If you found this interesting, I'd love if you checked out my other
            projects at{" "}
            <a href="https://github.com/niklonberg">github.com/niklonberg</a>
          </address>
        }
      />
    </ToastProvider>
  );
}

export default App;
