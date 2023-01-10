
import Menu from './components/Menu';

;

function App() {
  return (
    <div>
      <Menu
          pages={['home','about', 'contact']}
          width='50%'
          cornerRadius='50px'
          align='center'
          // backgroundBasic='red'
          // colorBasic='red'

          />

    </div>
  );
}

export default App;
