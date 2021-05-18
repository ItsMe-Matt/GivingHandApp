import {useRouter} from 'use/router';

function Button4UI({
}){
   const router = useRouter();
   return <button style={{
    width: 300,
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    color: "green",
    fontSize: 10,
    
    

   }} >
     <h1>Continue</h1>
   </button>
}

export default Button4UI;