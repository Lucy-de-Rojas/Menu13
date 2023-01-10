
import Menu from './components/Menu';

;

function App() {
  return (
    <div>
      <Menu
          pages={['home','about', 'contact']}
          width='80%'
          cornerRadius='50px'
          align='left'
          // backgroundBasic='red'
          colorBasic='red'

          />

    </div>
  );
}

export default App;
