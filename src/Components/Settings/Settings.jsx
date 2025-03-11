
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Typography from '../AtomicDesign/Atom/Typography/Typography'
import MoonIcon from '../../Assets/icons/MoonIcon'
import SunIcon from '../../Assets/icons/SunIcon'

const Settings = ({ mode, setMode, theme, setTheme }) => {
  return (
    <Wrapper className='w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg overflow-hidden p-8'>
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
                <Typography tag="h4" text={`Change navigation panel`} className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                </Wrapper>
                <Wrapper className='w-64 flex flex-col gap-1'>
                  <Typography tag="h4" text={mode} className='text-sm ml-1 capitalize' />
                  <Wrapper className='flex gap-2 pl-1'>
                    
                  </Wrapper>
                </Wrapper>
            </Wrapper>

        </Wrapper>  
      </Wrapper>
  )
}

export default Settings