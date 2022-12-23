export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
            <div className="rounded-md h-60 w-full">
                <img className="object-fit h-full w-full rounded-t-md" src={nft.media[0].gateway}></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                <div className="">
                    <h2 className="text-xl text-gray-800 font-bold">{nft.title}</h2>
                    <p className="text-gray-600 font-semibold">{`ID: ${nft.id.tokenId.substring(0,2)}${nft.id.tokenId.substring(nft.id.tokenId.length - 2, nft.id.tokenId.length)}`}</p>
                    <p className="text-gray-600" >{nft.contract.address.substring(0,28)+ '...'}</p>
                </div>

                {
                    (nft.description) && <div className="flex-grow mt-2 h-36 text-ellipsis overflow-hidden">
                    <p className="text-gray-600">{nft.description}</p>
                </div>
                }
            </div>

        </div>
    )
}