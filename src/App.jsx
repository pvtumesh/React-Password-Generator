// import "tailwindcss";
// import { useState, useCallback, useEffect } from "react";
// import './App.css'



// function App() {
//   let [password, setPassword] = useState("")
//   let [length, setLength] = useState(8);
//   let [numberAllowed, setNumberAllowed] = useState(false);
//   let [charAllowed, setCharAllowed] = useState(false);
//   // console.log(char.length);
//   let generatePassword = useCallback(() => {
//     let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let numb = "0123456789";
//     let speChar = "~!@#$%^&*()_+{}|";
//     let strOfPass = "";

//     if (numberAllowed) char = char + numb;
//     if (charAllowed) char = char + speChar;
//     for (let i = 1; i <= length; i++) {
//       let randomPass = Math.floor(Math.random() * char.length);
//       strOfPass = strOfPass.concat(char.charAt(randomPass));
//     }
//     // console.log(strOfPass);
//     setPassword(strOfPass);


//   }, [length, numberAllowed, charAllowed, setPassword])

//   useEffect(() => (generatePassword()), [length,numberAllowed, charAllowed]);
//   return (
//     <>
//       <div className="flex justify-center w-screen h-screen ">
//         <div className="w-5/8 flex  flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md border-3">
//           <h2 className="text-3xl pt-xl border w-full text-center">Password Generator</h2>
//           <div className="border w-full flex justify-between ">
//             <input className="border" type="text" value={password} readOnly />
//             <button className="border" onClick={() => navigator.clipboard.writeText(password)}>copy</button>
//           </div>
//           <div className="">
//             <input className=" " type="range" name="" id="" onChange={(e) => setLength(e.target.value)} value={length} min={4} max={16} onChangeCapture={generatePassword} />
//             <label htmlFor="number">Length {length}</label>


//             <input className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium " type="checkbox" name="" id="number" onChange={() => setNumberAllowed(!numberAllowed)} onClick={generatePassword} />
//             <label htmlFor="number">Number</label>

//             <input className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium  " type="checkbox" name="" id="spechar" onChange={() => setCharAllowed(!charAllowed)} onClick={generatePassword} />
//             <label htmlFor="spechar">Character</label>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


// Styling changes in tailwind

import "tailwindcss";
import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [copied, setCopied] = useState(false);

  let generatePassword = useCallback(() => {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numb = "0123456789";
    let speChar = "~!@#$%^&*()_+{}|";
    let strOfPass = "";

    if (numberAllowed) char = char + numb;
    if (charAllowed) char = char + speChar;

    for (let i = 1; i <= length; i++) {
      let randomPass = Math.floor(Math.random() * char.length);
      strOfPass = strOfPass.concat(char.charAt(randomPass));
    }

    setPassword(strOfPass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => generatePassword(), [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-black overflow-hidden">

        {/* glowing background */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600 blur-[200px] opacity-40 rounded-full animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500 blur-[200px] opacity-30 rounded-full animate-pulse"></div>

        <div
          className="relative w-[500px] p-10 rounded-3xl 
          bg-white/5 backdrop-blur-xl 
          border border-white/10
          shadow-[0_0_60px_rgba(0,255,255,0.2)]
          flex flex-col items-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-10 tracking-widest">
            PASSWORD LAB
          </h2>

          {/* password box */}
          <div className="w-full flex gap-3 mb-8">

            <input
              className="flex-1 bg-black/60 text-cyan-300 border border-cyan-500/40 rounded-xl px-4 py-3 font-mono text-lg text-center outline-none focus:ring-2 focus:ring-cyan-400"
              type="text"
              value={password}
              readOnly
            />

            {/* Copy Button with Tooltip */}
            <div className="relative flex flex-col items-center">

              {copied && (
                <span className="absolute -top-8 text-xs bg-green-500 text-white px-2 py-1 rounded-md shadow-lg animate-bounce">
                  Copied
                </span>
              )}

              <button
                className="px-5 py-3 rounded-xl 
                bg-gradient-to-r from-cyan-500 to-purple-600 
                hover:scale-105 transition-all duration-300
                text-white font-semibold shadow-lg"
                onClick={() => {
                  navigator.clipboard.writeText(password);
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                }}
              >
                Copy
              </button>

            </div>

          </div>

          {/* length */}
          <div className="w-full mb-8">

            <label className="text-cyan-300 text-sm tracking-widest">
              LENGTH : {length}
            </label>

            <input
              className="w-full mt-2 accent-cyan-400 cursor-pointer"
              type="range"
              onChange={(e) => setLength(e.target.value)}
              value={length}
              min={4}
              max={16}
              onChangeCapture={generatePassword}
            />

          </div>

          {/* options */}
          <div className="w-full flex justify-between">

            <div className="flex items-center gap-2">

              <input
                className="w-5 h-5 accent-cyan-400 cursor-pointer"
                type="checkbox"
                id="number"
                onChange={() => setNumberAllowed(!numberAllowed)}
                onClick={generatePassword}
              />

              <label className="text-cyan-200 tracking-wide" htmlFor="number">
                Numbers
              </label>

            </div>

            <div className="flex items-center gap-2">

              <input
                className="w-5 h-5 accent-purple-400 cursor-pointer"
                type="checkbox"
                id="spechar"
                onChange={() => setCharAllowed(!charAllowed)}
                onClick={generatePassword}
              />

              <label className="text-purple-200 tracking-wide" htmlFor="spechar">
                Special
              </label>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;