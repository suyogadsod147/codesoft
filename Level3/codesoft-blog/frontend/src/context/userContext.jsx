import { createContext , useState , useEffect} from "react"
import { URL } from "../url";
import axios from "axios";

export const UserContext = createContext({})


export function UserContextProvider ({children}){
    const [user , setUser] = useState(null);

    useEffect(()=>{
        getUser()
    } , [])


    const getUser = async()=>{
        try {
           const res = await axios.get(URL + "/api/auth/refetch" , {withCredentials:true});
           setUser(res.data);
        //    console.log(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    return <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
}