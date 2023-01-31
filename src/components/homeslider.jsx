import SliderTile from './slider/slidertile.jsx'

export default function HomeSlider() {
    return (
        <>
        <div className='flex gap-5 w-10/12 mx-auto px-4 pt-16 pb-16'>
            <div className='w-6/12 h-96'>
                <SliderTile />
            </div>
            <div className='w-3/12 h-96'>
                <SliderTile />
            </div>
            <div className='w-3/12 h-96'>
                <SliderTile />
            </div>
            
            
            
        </div>
        </>
    )
  }