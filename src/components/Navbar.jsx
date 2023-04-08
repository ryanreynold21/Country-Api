import React, { useEffect, useState } from 'react'
import {MdDarkMode,MdLightMode} from 'react-icons/md'

const Navbar = () => {
  const [theme,setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  )
  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const onWindowMatch = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }  
  }

  onWindowMatch();
  
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme","dark")
        break;
      case "light":
        element.classList.remove("dark")
        localStorage.setItem("theme","light")
        break;
      default :
        localStorage.removeItem("theme")
        break;
    }
  },[theme])
  return (
    <div className=" p-4 shadow-md dark:bg-slate-700">
    <div className=' flex justify-between'>
      <h1 className=' ml-10 text-2xl dark:text-white'>Where in the world</h1>

      {theme === "light" ? (
        <div onClick={() => setTheme("dark")} className=" mr-10 dark:text-white border border-black px-4 py-2 rounded-md shadow-md dark:border-white cursor-pointer select-none flex items-center justify-center gap-3 text-lg">
        <h1>Dark Mode</h1>
        <MdDarkMode />
      </div>
        ) : (
          <div onClick={() => setTheme("light")} className=" mr-10 dark:text-white border border-black px-4 py-2 rounded-md shadow-md dark:border-white cursor-pointer select-none flex items-center justify-center gap-3 text-lg">
        <h1>Lignt Mode</h1>
        <MdLightMode />
      </div>
          )}

    </div>
    </div>
  )
}

export default Navbar
