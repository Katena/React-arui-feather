import React, {Component} from 'react';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';

class Contact extends Component {
constructor(props){
  super(props);
  this.state ={
    phoneNumber: ''
  };
  this.handlePhoneChange=this.handlePhoneChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
  event.preventDefault();
  alert("На номер " + this.state.phoneNumber + " будет приходить рекламная информация");
}

handlePhoneChange(event){
  console.log('номер',  event.target.value);
  this.setState({phoneNumber: event.target.value})
}
  render() {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
       <FormField>
        <Input
        type='text'
        placeholder='Введите номер'
        value={this.state.phoneNumber}
        onChange={this.handlePhoneChange}/>
        </FormField>
        <FormField>
        <Button view='extra' type='submit'>Отправить</Button>
        </FormField>
      </Form>
      </div>
    );
  }
}




export default Contact;
