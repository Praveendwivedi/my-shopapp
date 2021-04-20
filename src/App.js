import './App.css';
import Alert from 'react-bootstrap/Alert';
import CustomerForm from './Components/CustomerForm.js';
import BOwnerForm from './Components/BOwnerForm.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import useContext from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/Accordion';
import useAccordionToggle from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
function handleSubmit(e){
return(
alert('submitted'),
e.preventDefault())

}
function App() {
  return (<div>
  <Accordion >
  <Card style={{ width: '16rem' }}>
  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Customer!
      </Accordion.Toggle>
    </Card.Header>
<Accordion.Collapse eventKey="0">
  <Card.Body>
    <CustomerForm />
  </Card.Body>
  </Accordion.Collapse>
</Card>
<Card style={{ width: '16rem' }}>
  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        BusinessOwner!
      </Accordion.Toggle>
    </Card.Header>
<Accordion.Collapse eventKey="1">
  <Card.Body>
    <BOwnerForm />
  </Card.Body>
  </Accordion.Collapse>
</Card>
    </Accordion>
    </div>
    )
}



export default App;
