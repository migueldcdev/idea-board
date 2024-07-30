const unixToDate = (unix) => {

   const date = new Date(unix) 
   console.log(date) 
   const day = date.getDate()
   const month = date.getMonth()
   const year = date.getFullYear()

   return day + "/" + (month + 1) + "/" + year

}

export default unixToDate