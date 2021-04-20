import Form from 'react-bootstrap/Form'
import Button from   'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function handleSubmit(e){
return(
fetch('http://localhost:3000/api/users/', {
  method: 'POST',
  
  body: JSON.stringify({
    emai_id: 'a',
    password: 'sdfkjsdf'
  })
}),

alert('submitted'+e.target[0].value),
console.log(e),
e.preventDefault())

}
function BOwnerForm() {


 return(
 	<div>
		 <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="address" placeholder="jhumritalaiya" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group controlId="formBasicBType">
    <Form.Label>Type of business</Form.Label>
    <Form.Control type="BType" placeholder="Business name" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
	</div>
);
}

export default BOwnerForm;
