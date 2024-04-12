const VideoTitle = ({title, overview}) => {
    return <div className="v-[100vw] aspect-video pt-[20%] px-10 absolute text-white bg-gradient-to-b from-black ">
        <h1 className="text-6xl font-bold">{title}</h1>
        <h2 className="w-6/12 mt-6 text-lg">{overview}</h2>
        <div className="pt-4">
            <button className="px-12 py-2 bg-white rounded-lg text-black mr-2 text-xl hover:bg-opacity-80">▷ Play</button>
            <button className="px-12 py-2 bg-gray-400 rounded-lg text-white bg-opacity-50 text-xl">ⓘ More Info</button>
        </div>
    </div>
}

export default VideoTitle;