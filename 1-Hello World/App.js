






const heading = React.createElement(
    'div',
    {id:'parent'},React.createElement(
        'div',
        {id:'child'},
      React.createElement(
            'h1',
            {},
            [
                React.createElement('h1', {id: 'h1'}, 'This is H1'),
                React.createElement('h2', {id: 'h2'}, 'This is H2'),
            ]
        )
      )
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);