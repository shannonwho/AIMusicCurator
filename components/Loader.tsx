
import React from 'react';

const Loader: React.FC = () => {
    const messages = [
        "Analyzing your music taste...",
        "Contacting the AI DJ...",
        "Curating the perfect vibe...",
        "Mixing up some fresh tracks...",
        "Almost ready to press play...",
    ];

    const [message, setMessage] = React.useState(messages[0]);

    React.useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % messages.length;
            setMessage(messages[index]);
        }, 2500);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="text-center p-6 flex flex-col items-center justify-center gap-4 animate-fade-in">
            <div className="w-12 h-12 border-4 border-zinc-700 border-t-brand-green rounded-full animate-spin"></div>
            <p className="text-zinc-300 transition-opacity duration-500">{message}</p>
        </div>
    );
};

export default Loader;
