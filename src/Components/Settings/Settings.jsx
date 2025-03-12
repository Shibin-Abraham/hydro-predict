
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Typography from '../AtomicDesign/Atom/Typography/Typography'
import MoonIcon from '../../Assets/icons/MoonIcon'
import SunIcon from '../../Assets/icons/SunIcon'
import { useContext } from 'react'
import SettingsContext from '../Contexts/SettingsContext/SettingsContext'

const Settings = ({ mode, setMode, theme, setTheme }) => {
  const {expand,setExpand} = useContext(SettingsContext)
  return (
    <Wrapper className={`w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg overflow-hidden ${expand?'p-8':'py-8 pl-16 pr-8'}`}>
        <Wrapper className='w-2/4 h-full pt-3 flex flex-col gap-8'>
        {/* Theme */}
            <Wrapper className='flex items-start justify-between'>
                <Wrapper>
                <Typography tag="h4" text={`Theme`} className='text-lg ml-1' />
                <Typography tag="h4" text={`Customize your application theme`} className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                </Wrapper>
                <Wrapper className='w-64 flex flex-col gap-1'>
                  <Typography tag="h4" text={`Accent color`} className='text-base ml-1' />
                  <Wrapper className='flex gap-2 pl-1'>
                    <Wrapper onClick={()=>setTheme('blue')} className={`p-2 rounded-md cursor-pointer ${theme==='blue'?'bg-[#a5c0e213]':''}`}>
                        <Wrapper className='size-4 rounded-full border-2 border-[#715ff8]'>

                        </Wrapper>
                    </Wrapper>
                    <Wrapper onClick={()=>setTheme('green')} className={`p-2 rounded-md cursor-pointer ${theme==='green'?'bg-[#a5c0e213]':''}`}>
                        <Wrapper className='size-4 rounded-full border-2 border-[#23d823]'>

                        </Wrapper>
                    </Wrapper>
                    <Wrapper onClick={()=>setTheme('red')} className={`p-2 rounded-md cursor-pointer ${theme==='red'?'bg-[#a5c0e213]':''}`}>
                        <Wrapper className='size-4 rounded-full border-2 border-[#e61919]'>

                        </Wrapper>
                    </Wrapper>
                    <Wrapper onClick={()=>setTheme('gray')} className={`p-2 rounded-md cursor-pointer ${theme==='gray'?'bg-[#a5c0e213]':''}`}>
                        <Wrapper className='size-4 rounded-full border-2 border-[#373636]'>

                        </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
            </Wrapper>
            {/* Mode */}
            <Wrapper className='flex items-start justify-between'>
                <Wrapper>
                <Typography tag="h4" text={`Mode`} className='text-lg ml-1' />
                <Typography tag="h4" text={`Customize your application mode`} className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                </Wrapper>
                <Wrapper className='w-64 flex flex-col gap-1'>
                  <Typography tag="h4" text={mode} className='text-sm ml-1 capitalize' />
                  <Wrapper className='flex gap-2 pl-1'>
                    <Wrapper onClick={()=>setMode('dark')} className={`p-2 rounded-md ${mode==='dark'?'bg-[#595a5b3a]':''}`}>
                        <MoonIcon className={`size-5 ${mode==='dark'?'text-black':''}`} />
                    </Wrapper>
                    <Wrapper onClick={()=>setMode('light')} className={`p-2 rounded-md ${mode==='light'?'bg-[#595a5b3a]':''}`}>
                        <SunIcon className={`size-5 ${mode==='light'?'text-black':'text-white'}`} />
                    </Wrapper>
                    
                  </Wrapper>
                </Wrapper>
            </Wrapper>
            {/* Nav */}
            <Wrapper className='flex items-start justify-between'>
                <Wrapper>
                <Typography tag="h4" text={`Navigation Panel`} className='text-lg ml-1' />
                <Typography tag="h4" text={`Change navigation panel style`} className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                </Wrapper>
                <Wrapper className='w-64 flex flex-col gap-2'>
                  <Typography tag="h4" text='Expand navigation' className='text-sm ml-1 capitalize' />
                  <Wrapper className='flex cursor-pointer'>
                    <Wrapper
                      onClick={() => setExpand(prev => !prev)}
                      className={`w-[49px] h-5 rounded-xl border relative cursor-pointer ${expand?'border-primary-variant':'border-[#595959] dark:border-[#7d8da196]'}`}
                    >
                      <Wrapper
                        className={`absolute top-1/2 -translate-y-1/2 size-3 rounded-full transform transition-transform duration-300 ease-in-out ${
                          expand ? 'translate-x-8 bg-primary' : 'translate-x-1 bg-[#595959] dark:bg-[#7d8da196]'
                        }`}
                      />
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
            </Wrapper>
            {/* copyright */}
            <Wrapper className='flex items-start justify-between mt-auto'>
                <Wrapper>
                  <Typography tag="h4" text={`Privacy & Cookies Policy`} className='text-lg ml-1' />
                  <Typography 
                    tag="h4" 
                    text={`We prioritize your privacy by responsibly using cookies to enhance our HydroPredict system.
                    Our approach ensures your data is securely processed and transparently managed, offering a 
                    seamless and trusted experience.`} 
                    className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1 mt-2'
                  >
                    <Typography tag="span" text={` more info...`} className='text-sm text-primary cursor-pointer' />
                  </Typography>
                </Wrapper>
                
            </Wrapper>

        </Wrapper>  
      </Wrapper>
  )
}

export default Settings