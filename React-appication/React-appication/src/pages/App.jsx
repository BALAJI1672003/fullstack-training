export default function App() {
    return (
      <>
        <div className="flex w-screen h-[3rem] bg-purple-600 flex-row justify-space-between items-center">
        <h1>Hello</h1>
         <div className=""></div>
          
        </div>
       <div className="flex flex-col items-center justify-center w-screen h-screen bg-black">
       <div className="h-3/6  w-[30%] flex justify-center items-center bg-white rounded-md shadow-xl flex-col">
     <div className="h-[3rem] w-full bg-purple-400">
      <h1 className="flex items-center justify-center text-2xl font-bold">Login</h1>
     </div>
      <form className="flex h-[90%] w-[80%] justify-center items-ceter gap-4 flex-col">
        <input className="p-3 font-bold outline-none active:outline-none hover:border-b-2 hover:border-b-purple-400" placeholder="Enter your Email"></input>
        <input className="p-3 font-bold outline-none active:outline-none hover:border-b-2 hover:border-b-purple-400" placeholder="Enter your Password"></input>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
      </form>        
       </div>
       </div>
      </>
    )
  }