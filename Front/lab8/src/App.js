import './App.css';
import Form from './components/Form.jsx'
import FormProvider from './components/FormContext.jsx';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
