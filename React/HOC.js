// ! What are HOC ?
// A higher-order component (HOC) is a function that takes a component and returns a new component with some additional behavior or props.
// Example below


// -----------------------------------------------------------------------------------------

import React from 'react';

// Higher-Order Component (HOC)
const withCardWrapper = (WrappedComponent) => {
    return (props) => (
        <div className="card-wrapper">
            <WrappedComponent {...props} />
        </div>
    );
};

// Example component
const MyComponent = () => {
    return <div>Content inside the card</div>;
};

// Apply the HOC to the example component
const MyComponentWithCardWrapper = withCardWrapper(MyComponent);

// Usage in another component or App
const App = () => {
    return (
        <div>
            <MyComponentWithCardWrapper />
        </div>
    );
};

export default App;
