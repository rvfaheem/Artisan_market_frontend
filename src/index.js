import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Login } from './Login';
import { Nav } from './Nav';
import { Landingpage } from './Landingpage';
import { Adminhome } from './ADMIN/Adminhome';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AdminNavigation } from './ADMIN/Navigation';
import { Organiser } from './ADMIN/Organiser';
import { Artist } from './ADMIN/Artist';
import { Delivery } from './ADMIN/Delivery'; 
import { Addcategory } from './ADMIN/Addcategory';
import './App.css'
import { Add_subcategory } from './ADMIN/Add_subcategory';
import { Change_password } from './ADMIN/Change_password';
// Artist
import { ArtistNavigation } from './ARTIST/Navigation';
import { A_Change_password } from './ARTIST/A_Change_password';
import { Artist_profile } from './ARTIST/Artist_profile';
import { Artist_home } from './ARTIST/Artist_home';
import { A_Exihibition } from './ARTIST/Exihibition';
import { Offline_exihibitions } from './ARTIST/Offline_exihibitions';
import { A_Exihibitions } from './ARTIST/Exihibitions';
import { Offline_exihibition } from './ARTIST/Offline_exihibition';
import { Exihibition_register } from './ARTIST/Exihibition_register';
import { Exihibition_product_add } from './ARTIST/Exihibition_product_add';
import { Product_add } from './ARTIST/Product_add';
import { Product_update } from './ARTIST/Product_update';
import { Product_view } from './ARTIST/Product_view';
import { View_orders } from './ARTIST/View_orders';
import { Assign_delivery } from './ARTIST/Assign_delivery';
import { View_product } from './ARTIST/View_product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Nav />}>
          <Route index element={<Landingpage />} />
          <Route path='/Login' element={<Login />} />
          {/* <Route path='/Adminhome' element={<Adminhome />} /> */}
        </Route>
        <Route path="/admin" element={<AdminNavigation/>}>
         <Route index element={<Adminhome/>}/>
         <Route path='organiser' element={<Organiser />}/>
         <Route path='artist' element={<Artist />}/>
         <Route path='delivery' element={<Delivery />}/>
         <Route path="addcategory" element={<Addcategory />}/>
         <Route path="addsubcategory" element={<Add_subcategory/>}/>
         <Route path="changepassword" element={<Change_password/>}/>

         


        </Route>

        {/* Artist module */}
         
        <Route path="/artist" element={<ArtistNavigation/>}>
        <Route index element={<Artist_home/>}/>
        <Route path="change_password" element={<A_Change_password/>}/>
        {/* Online_Exihibition */}
        <Route path='exihibition' element={<A_Exihibition/>}/>
        <Route path='exihibitions' element={<A_Exihibitions/>}/>
        {/* Offline_exihibition */}
        <Route path='off_exihibition' element={<Offline_exihibition/>}/>
        <Route path='o_exihibitions' element={<Offline_exihibitions/>}/>
        <Route path="artist_profile" element={<Artist_profile/>}/>
         <Route path="exihibition_register" element={<Exihibition_register/>}/>
         <Route path="exihibition_product_add" element={<Exihibition_product_add/>}/>
         <Route path="product_add" element={<Product_add/>}/>
         <Route path="product_update" element={<Product_update/>}/>
         <Route path="view_orders" element={<View_orders/>}/>
         <Route path="assign_delivery" element={<Assign_delivery/>}/>
         <Route path="view_product" element={<View_product/>}/>
        

      
      </Route>
         <Route path="/ds" elemment={<Product_view/>}/>
        <Route path='*' element={<div>No Routes</div>}/>
        
   
    

    

   

    // <Route path="/artist" element={<AdminNavigation/>}>

    </Route>
    </Routes>

    </BrowserRouter>




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
