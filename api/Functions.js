import client from "./client";
const endpoint = "/getCategories";
const item = "/getCategoriesItems";
const wallet = "/checkWalletPoints"; 



let id="1";





var postData = {
    category_id: "1",
   
  };
  

// const  getCategoriesItems2=()=>{




//code using axios 
  
//   axios.post('http://sufirewards.simplysufi.com/sufirewardsapi/public/index.php/getCategoriesItems', postData, axiosConfig)
//   .then((res) => {
//     console.log("RESPONSE RECEIVED: ", res);
//   })
//   .catch((err) => {
//     console.log("AXIOS ERROR: ", err);
//   })

// }







// const getCategories = () => client.get(endpoint);


// const getCategoriesItems=()=>client.any({ method: 'post' ,


// url: client.item, params: {category_id: 1 } })


export const getDeals =()=>client.get("getXprsDeals/2")
export const getCitydata=()=>client.get("getAllData/"+"2")
export const getUserInfo=(email)=>client.get("getUserInfo/"+email)
export const getUserOrders=(custid)=>client.get("getCustomersOrders/"+custid)


export const getBannerImages=()=>client.get("getBannerImgs");
export const Checkout=(custid,name,email,mobile,city,address,comment,cart,total_quantity,total_bill)=>client.post("/placeOrder",{custid,name,email,mobile,city,address,comment,cart,total_quantity,total_bill})

// export const getUserPoints = (user_id) => client.get(wallet + "/" + user_id);
 export const  registeruser=(email,name,mobile,address,city)=>client.post("/createuser",{email,name,mobile,address,city});

// export const getXPressItems = () => client.get(item +"/"+"1");

// export const getFrozenItems = () => client.get(item + "/" + "2");





// export const getcode = (item_id, user_id) => client.post("/onRedeemItem", { item_id, user_id});

// export const login = (email, password) => client.post("/userlogin", { email, password });
// export const  registeruser=(name,email,password,address,phone,location)=>client.post("/createuser",{name,email,password,address,phone,location});
// export const  XprsScan=(user_id,qr_code,branch_name,category_id,points)=>client.post("/onScanXPRSQr",{user_id,qr_code,branch_name,category_id,points});
// export const ipaddress = () => client.get("/getXprsServersIp");
// export const  FrozenScan=(user_id,qr_code,branch_name,category_id)=>client.post("/onScanXPRSQr",{user_id,qr_code,branch_name,category_id});