import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EmptyPage from './component/EmptyPage';
function App() {
  // 컴포넌트 위치선정을 잘해야한다 EmptyPage를 위에놓을경우 EmptyPage가 기본이 된다.
  // <Route path="/day/:day">  :를 이용해서 day라는 변수로 해당하는값을 얻을수있다
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
