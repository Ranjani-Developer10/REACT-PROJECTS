import CounterApp from "./pages/CounterApp";
import LoginForm from "./pages/LoginForm";
import ProductCal from "./pages/ProductCal";
import StudentMark from "./pages/StudentMark";
import Employe from "./pages/Employe";
import TodoTask from "./pages/TodoTask";
import UserApi from "./pages/UserApi";
const App=()=>{
  return(
    <>
    <CounterApp/>
    <LoginForm/>
    <ProductCal/>
    <StudentMark/>
    <Employe/>
    <TodoTask/>
    <UserApi/>
    </>
  )
}
export default App;