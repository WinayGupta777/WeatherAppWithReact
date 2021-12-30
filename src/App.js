import Card from "./components/Card";
import styles from './components/card.css';

const App=()=>{
  return(
    <div className="container">
      <Card place="Delhi"></Card>
      <Card place="Goa"></Card>
      <Card place="Jaipur"></Card>
      <Card place="Anand"></Card>
    </div>
  )
}

export default App;