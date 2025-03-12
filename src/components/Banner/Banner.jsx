import BannerImage from '../../assets/Banner_Image.jpg'

function Banner(){
    return (
        <div className='w-full h-[25rem] relative'>
            <img
                src={BannerImage}
                alt="Banner_Image"
                className='w-full h-full' 
            />

            <div className='absolute left-0 right-0 mx-auto top-10 w-[20rem] backdrop-blur-sm'>
                <div className='flex flex-col gap-4'>
                    <div className='text-5xl font-semibold text-white'>
                        Crypto Tracker
                    </div>
                    <div className='text-sm font-semibold text-center text-white'>
                        Get all info regarding crypto currencies.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;