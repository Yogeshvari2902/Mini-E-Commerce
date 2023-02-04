import { createContext, useState } from "react";

export const AuthContext=createContext();
function AuthContextProvider({children}) {
const [userAuth,setUserAuth]=useState({
    isAuth:false,
    token:"",
    cart:[],
})

const loggedin=(va)=>{
    setUserAuth({isAuth:true,token:va})
}

const loggedout=()=>{
    setUserAuth({ isAuth:false,token:""});
}

function addToCart(data){
    console.log(userAuth.cart);
    let arr=userAuth.cart||[];
    data.quantity=1;
    arr.push(data);
    console.log(arr);
    setUserAuth ({...userAuth,cart:arr});
}

function total(){
userAuth.map()
}

function addmorequnatity(ith){
    let z=userAuth.cart[ith].quantity++;
    let arr=userAuth.cart.filter((el,i)=>{
        return i===ith?{...el,quantity:z}:el;
    })
console.log(arr[ith].quantity);
    setUserAuth({...userAuth,cart:arr})
}

function removequnatity(ith){
    let z=userAuth.cart[ith].quantity--;
    let arr=userAuth.cart.filter((el,i)=>{
        return i===ith?{...el,quantity:z}:el;
    })
console.log(arr[ith].quantity);
    setUserAuth({...userAuth,cart:arr})
}

return <AuthContext.Provider value={{userAuth,loggedin,loggedout,addToCart,addmorequnatity,removequnatity}}>
{children}
</AuthContext.Provider>
}

export default AuthContextProvider;
