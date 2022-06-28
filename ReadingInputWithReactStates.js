//this is to use reacts way of seeing data inputed instead of 
//reading from the DOM.

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card {...profile}/>)}
	</div>
);

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component {
  //using the reference to the lement
  //userNameInput = React.createRef();
  
  //a different way of reading input is 
  state = {userName: ''};
  handleSubmit = (event) => {
    //important when working with forms. without preventing default, when submitting form, page refreshes.
    event.preventDefault();
    console.log(
      //this.userNameInput.current.value
      this.state.userName
    )
  };
	render() {
  	return (
      //using onsubmit for forms allows the required flag for input
      //react has the ref = {} that we can use to get a reference to that element
    	<form onSubmit={this.handleSubmit}>
    	  <input
          type="text" 
          placeholder="GitHub username" 
          //doing this a different way
          //ref={this.userNameInput} 
          //we are doing it this way
          value = {this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add card</button>
    	</form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: testData,
  };
  
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);