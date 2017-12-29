/* Each function will equates to a specific custom HTML tag */
/* The HTML tag attributes are then called using dot notation */

function UserProfile(props) {
  return <p>Your name: <em>{props.name}</em><br />
    Email Address: <em>{props.email}</em><br />
    Phone Number: <em>{props.phone}</em><br />
    Location: <em>{props.location}</em></p>;
}

/* The "App" Function goes here */
function App() {
  return (
    <div class="userprofiledisplay">
      <UserProfile name="Sarah" email="sarah@reactjs.org" phone="212-555-5883" location="New York, NY" />
      <UserProfile name="Melanie" email="melanie@reactjs.org" phone="585-555-7765" location="Pittsford, NY" />
      <UserProfile name="Sophie" email="sophie@reactjs.org" phone="718-555-0990" location="Whitestone, NY" />
      <UserProfile name="Kieran" email="kieran@reactjs.org" phone="718-555-3234" location="Bayside, NY" />
      <UserProfile name="Robert" email="robert@reactjs.org" phone="716-555-1122" location="Buffalo, NY" />
      <UserProfile name="Mike" email="mike@reactjs.org" phone="315-555-4466" location="Syracuse, NY" />
    </div>
  );
}


/* Default Renderer, notice the "App" function is being called */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

