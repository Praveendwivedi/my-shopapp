import Form from 'react-bootstrap/Form'
import Button from   'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function handleSubmit(e){
return(
alert('submitted'),
e.preventDefault())

}
function CustomerForm() {


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
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
	</div>
);
}

export default CustomerForm;
