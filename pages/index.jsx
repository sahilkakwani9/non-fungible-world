import Head from 'next/head'
import Image from 'next/image'
import { use, useState } from 'react'
import fetchNFTs from '../utils/fetchNFTs'

const Home = () => {
  const [wallet, setWallet] = useState('');
  const [collection, setCollection] = useState('');
  const [NFT, setNFT] = useState([]);
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
    <div className="flex flex-col w-full justify-center items-center gap-y-2">
      <input type={"text"} onChange={(e)=>{setWallet(e.target.value)}} value={wallet} placeholder="Add your wallet address"></input>
      <input type={"text"} onChange={(e)=>{setCollection(e.target.value)}} value={collection} placeholder="Add the collection address"></input>
      <label className="text-gray-600 "><input type={"checkbox"} className="mr-2"></input>Fetch for collection</label>
        <button onClick={async()=>{
          setNFT(await fetchNFTs(wallet, collection));
          console.log(NFT);

        }} className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"}>Let's go! </button>
    </div>
    <div>
      <h2>{wallet}</h2>
      <h2>{collection}</h2>
    </div>
    {
      NFT.map((n,i)=>{
        return <h1>Sahil</h1>
      })
    }
  </div>
  )
}

export default Home
