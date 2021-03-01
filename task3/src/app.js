import React from 'react';
import ErrorBoundary from './Utils/ErrorBoundary';
import Header from './Layout/Header'

function App() {
  return (
    <>
      <div>Hello world!!</div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
    </>
  )
}

export default App;