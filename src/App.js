import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem';
import AllUsers from './Pages/Dashboard/AllUsers';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Review from './Pages/Dashboard/Review';
import Home from './Pages/Home/Home';
import ItemDetail from './Pages/ItemDetail';
import Login from './Pages/Login';
import ManageItem from './Pages/ManageItem';
import OrderItem from './Pages/OrderItem';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Shared/RequireAuth';
import Signup from './Pages/Signup';
import TestOrder from './Pages/TestOrder';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/orderitem/:itemId' element={
          <RequireAuth>
            <OrderItem></OrderItem>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/order' element={
          <RequireAuth>
            <TestOrder></TestOrder>
          </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="all-users" element={<AllUsers></AllUsers>}></Route>
          <Route path="review" element={<Review></Review>}></Route>

        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
