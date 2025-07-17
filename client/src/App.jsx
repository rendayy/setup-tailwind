import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="bg-primary">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">
          ✅ Tailwind Aktif!
        </h1>
        <p className="text-center text-lg">
          Jika kamu melihat kotak ini dengan desain cantik, berarti Tailwind CSS sudah terpasang dengan benar.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow">
            Tes Button Tailwind
          </button>
        </div>
      </div>
    </div>
  )
}


export default App
