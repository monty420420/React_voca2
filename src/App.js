import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EmptyPage from './component/EmptyPage';
function App() {
  // <Route path="/day/:day">  :를 이용해서 day라는 변수로 해당하는값을 얻을수있음
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
         <DayList /> 
        </Route>
    
        <Route path="/day/:day">   
         <Day />
        </Route>

         <Route>
           <EmptyPage />
         </Route>

        </Switch>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
