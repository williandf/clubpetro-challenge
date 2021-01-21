import HeaderComponent from '../components/Header';
import FormComponent from '../components/Form';
import MainComponent from '../components/Main';

function Landing() {
  return(
    <div id="page-landing">
      <HeaderComponent />
      <FormComponent />
      <MainComponent />                        
    </div>
  );
}

export default Landing;