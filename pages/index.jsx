import Head from 'next/head'
import Image from 'next/image'
import { use, useState } from 'react'
import { NFTCard } from '../components/nftCard'
import fetchCollection from '../utils/fetchCollections'
import fetchNFTs from '../utils/fetchNFTs'

const Home = () => {
  const [wallet, setWallet] = useState('');
  const [collection, setCollection] = useState('');
  const [NFT, setNFT] = useState([]);
  const [filterbyCollection, setFilterbyCollection] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div>
        <h1 className='text-6xl text-blue-500 font-extrabold'>Non-Fungible World</h1>
      </div>
    <div className="flex w-full justify-around items-center gap-y-2 mt-8">
      <input type={"text"} className="border-2 border-gray-600 rounded-md px-4" disabled={filterbyCollection} onChange={(e)=>{setWallet(e.target.value)}} value={wallet} placeholder="Add your wallet address"></input>
      <input type={"text"} className="border-2 border-gray-600 rounded-md px-4 w-60" onChange={(e)=>{setCollection(e.target.value)}} value={collection} placeholder="Add the collection address"></input>
      <label className="text-gray-600 "><input type={"checkbox"} className="mr-2" onChange={(e)=>setFilterbyCollection(e.target.checked)}></input>Fetch for collection</label>
        <button onClick={async()=>{
          if(filterbyCollection){
            setNFT(await fetchCollection(collection));
          }
          else{
            setNFT(await fetchNFTs(wallet, collection));
          }
          console.log(NFT);

        }} className={"disabled:bg-slate-500 text-white bg-blue-400 py-2 text-lg rounded-lg px-12"}>Get NFT's! </button>
    </div>
    <div className='flex flex-wrap gap-y-12 mt-4 w-8/9 gap-x-8 justify-center'>
        {
          NFT && NFT.map(nft => {
            return (
              <NFTCard nft={nft}></NFTCard>
            )
          })
        }
      </div>
  </div>
  )
}

export default Home
