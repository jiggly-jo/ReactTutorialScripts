const render = () =>{
    //cannot type anything in the input because the dom is being rerendered at ever tick. THe whole div is being rerendered
    document.getElementById('mountNode').innerHTML = `
      <div>
      Hello HTML
      <input />
      <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
  `;
  //can type in the input because it only rerendering the time.
  ReactDOM.render(
    React.createElement(
      'div', 
      null, 
      'Hello React',
      React.createElement('input', null),
      React.createElement('pre',null, (new Date).toLocaleTimeString()),
    ),
    document.getElementById('mountNode2'),
  );
  }
  
  
  // 	currentTime: (new Date).toLocaleTimeString()
  setInterval(render, 1000);
  