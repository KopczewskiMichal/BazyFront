import './App.css';
import Form from './components/Form.jsx'
import FormProvider from './components/FormContext.jsx';
import RegisterProvider from './components/RegisterContext.jsx';
import RegisterForm from './components/RegisterForm.jsx';

function App() {
  return (
    <div className="App">
      <RegisterProvider>
        <RegisterForm />
      </RegisterProvider>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
