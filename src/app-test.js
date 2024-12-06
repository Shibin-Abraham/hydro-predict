import { useEffect, useState } from "react"
import Wrapper from "./Components/AtomicDesign/Wrapper/Wrapper";
import Typography from "./Components/AtomicDesign/Typography/Typography";
import Button from "./Components/AtomicDesign/Button/Button";

const themes = ['blue', 'green']

function App() {
    const [mode, setMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'default'; // Default to system preference
    });
    const [theme, setTheme] = useState(themes[0])

    useEffect(() => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else if (mode === 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            // Default: System Preference
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if (mediaQuery.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', 'default');
        }
    }, [mode]);

    const handleModeChange = (newTheme) => {
        setMode(newTheme);
    };


    return (
        <Wrapper className={`bg-slate-100 dark:bg-[#000000f9] w-screen h-screen theme-${theme}`}>
            <Wrapper>
                <Typography tag="h5" text="blue" onClick={() => setTheme(themes[0])} />
                <Typography tag="h5" text="green" onClick={() => setTheme(themes[1])} />
            </Wrapper>
            <Typography tag="h3" text="Hello world!" className="text-3xl font-bold text-secondary dark:text-primary">
                <Button
                    variant="secondary"
                    variantType="outline"
                    type="button"
                    onClick={() => handleModeChange('light')}
                    className={`px-4 py-2 rounded hover:text-white ${mode === 'light' ? 'text-primary' : 'text-primary'
                        }`}
                >
                    Light
                </Button>
                <Button
                    onClick={() => handleModeChange('dark')}
                    className={`px-4 py-2 rounded ${mode === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                >
                    Dark
                </Button>
                <Button
                    onClick={() => handleModeChange('default')}
                    className={`px-4 py-2 rounded ${mode === 'default' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                >
                    Default
                </Button>
            </Typography>
        </Wrapper>
    )
}

export default App
