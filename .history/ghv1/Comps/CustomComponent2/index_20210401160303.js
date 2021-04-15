function ButtonUI({
    width=250, 
    height=75,
     borderradius=15, 
     color= "red", 
     backgroundcolor= "blue"
    }){
       return `<button style="
         width:${width},
         height:${height}px,
         border-radius: ${borderradius}px,
         color: ${color},
         background-color: ${backgroundcolor}
         ">
         </button>`
    }

    export default