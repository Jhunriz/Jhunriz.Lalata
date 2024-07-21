import { Moon, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';
import anime from 'animejs';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        anime({
            targets: '.icon',
            rotate: '1turn',
            easing: 'easeInOutSine',
            duration: 800,
        });
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex items-center cursor-pointer" onClick={toggleDarkMode}>
            {darkMode ? <Moon className="icon text-dark dark:text-white" /> : <SunMedium className="icon" />}
        </div>
    );
};

export default DarkModeToggle;
