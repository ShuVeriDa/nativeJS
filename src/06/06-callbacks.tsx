// const callback = () => {
//    alert('hey')
// }
// window.setTimeout(callback, 100)

export const User = () => {

   const deleteUser = () => {
      alert('user should be deleted')
   }
   const saveUser = () => {
      alert('user should be saved')
   }


   return <div>
      dimych
      <button onClick={deleteUser}>delete</button>
      <button onClick={saveUser}>save</button>
   </div>
}