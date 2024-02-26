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
import { A_registration_form } from './ARTIST/A_registration_form';
// USER
import { User_navigation } from './USER/User_navigation';
import { UserHome } from './USER/User_home';
import { Products } from './USER/Products';
import { Payment } from './USER/Payment';
import { Product_details } from './USER/Product_details';
import { Offline_exihibition_notification } from './USER/Offline_exihibition_notification';
import { Offline_exihibitions_notifications } from './USER/Offline_exihibitions_notifications';
import { Online_exihibition_notification } from './USER/Online_exihibition_notification';
import { Online_exihibitions_notifications } from './USER/Online_exihibitions_notifications';
import { Exihibition } from './USER/Exihibition';
import { Exihibition_product_details } from './USER/Exihibition_product_details';
// ORGANISER
import { Organiser_nav } from './ORGANISER/Organiser_nav';
import { Organiser_home } from './ORGANISER/Organiser_home';
import { Create_exihibition } from './ORGANISER/Create_exihibition';
import { Accept_or_reject } from './ORGANISER/Accept_or_reject';
import { Send_exhi_offline_notification } from './ORGANISER/Send_exhi_offline_notification';
import { Send_exhi_online_notification } from './ORGANISER/Send_exhi_online_notification';
import { O_Change_password } from './ORGANISER/Change_password';
// DELIVERY
import { Delivery_navigation } from './DELIVERY/Delivery_navigation';
import { Delivery_home } from './DELIVERY/Delivery_home';
import { Delivery_products } from './DELIVERY/Delivery_products';
import { D_change_password } from './DELIVERY/D_change_password';
import { A_profile_edit } from './ARTIST/A_profile_edit';
import { O_registration_form } from './ORGANISER/O_registration_form';
import { User_registration_form } from './USER/User_registration_form';
import { Delivery_registration_form } from './DELIVERY/Delivery_registration_form';
import { Organiser_profile } from './ORGANISER/Organiser_profile';
import { User_profile } from './USER/User_profile';
import { Delivery_profile } from './DELIVERY/Delivery_profile';
import { Edit_user_profile } from './USER/Edit_user_profile';
import { Edit_organiser_profile } from './ORGANISER/Edit_organiser_profile';
import { Delivery_profile_edit } from './DELIVERY/Delivery_profile_edit';
import { Product_feedback } from './USER/Product_feedback';
import { U_View_orders } from './USER/View_orders';
import { Add_to_cart } from './USER/Add_to_cart';






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
         <Route path="profile_edit" element={<A_profile_edit/>}/>
         <Route path="A_registration_form" element={<A_registration_form/>}/>
         


      </Route>

      {/* USER Module */}
      <Route path="/user" element={<User_navigation/>}>
      <Route index element={<UserHome/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="payment" element={<Payment/>}/>
      <Route path="product_details" element={<Product_details/>}/>
      <Route path="offline_notification" element={<Offline_exihibition_notification/>}/>
      <Route path="offline_notifications" element={<Offline_exihibitions_notifications/>}/>
      <Route path="online_notification" element={<Online_exihibition_notification/>}/>
      <Route path="online_notifications" element={<Online_exihibitions_notifications/>}/>
      <Route path="exihibition"  element={<Exihibition/>}/>
      <Route path="exi_prod_details" element={<Exihibition_product_details/>}/>
      <Route path="u_registration_form" element={<User_registration_form/>}/>
      <Route path="u_profile" element={<User_profile/>}/>
      <Route path="u_profile_edit" element={<Edit_user_profile/>}/>
      <Route path="product_feedback" element={<Product_feedback/>}/>
      <Route path="view_orders" element={<U_View_orders/>}/>
      <Route path="/user/Add_to_cart/" element={<Add_to_cart/>}/>


      </Route>

      {/* ORGANISER Module */}
      <Route path="/organiser" element={<Organiser_nav/>}>
      <Route index element={<Organiser_home/>} />
      <Route path="/organiser/create_exihibition/" element={<Create_exihibition/>}/>
      <Route path="/organiser/accept_reject/" element={<Accept_or_reject/>}/>
      <Route path="/organiser/send_online/" element={<Send_exhi_online_notification/>}/>
      <Route path="/organiser/send_offline/" element={<Send_exhi_offline_notification/>}/>
      <Route path="/organiser/change_password/" element={<O_Change_password/>}/>
      <Route path="/organiser/o_registration_form/" element={<O_registration_form/>}/>
      <Route path="/organiser/o_profile/" element={<Organiser_profile/>}/>
      <Route path="/organiser/o_profile_edit/" element={<Edit_organiser_profile/>}/> 

      </Route>

      {/* DELIVERY Module */}
      <Route path="/delivery" element={<Delivery_navigation/>}>
      <Route index element={<Delivery_home/>} />
      <Route path="/delivery/delivery_products" element={<Delivery_products/>} />
      <Route path="/delivery/d_change_password" element={<D_change_password/>} />
      <Route path="/delivery/d_registration_form/" element={<Delivery_registration_form/>}/>
      <Route path="/delivery/d_profile/" element={<Delivery_profile/>}/>
      <Route path="/delivery/D_profile_edit/" element={<Delivery_profile_edit/>}/>
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
