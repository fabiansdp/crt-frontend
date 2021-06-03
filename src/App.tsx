import './styles/App.css';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Form from "./components/Form";

const App: React.FC = () => {

  return (
    <div className="App">
      <Layout background="#10002B">
        <Header/>
        <Form/>
      </Layout>
    </div>
  );
}

export default App;
