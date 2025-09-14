
import React from 'react';
import { SpotifyIcon } from '../constants';

interface ConnectStepProps {
  onConnect: () => void;
}

const ConnectStep: React.FC<ConnectStepProps> = ({ onConnect }) => {
  return (
    <div className="text-center animate-fade-in flex flex-col items-center justify-center h-full p-4">
      <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-brand-green mb-4">Unlock Your Perfect Playlist</h2>
        <p className="text-zinc-300 mb-6">
          Connect your music library to get personalized recommendations from our AI DJ. We'll analyze your taste to curate playlists for any mood or moment.
        </p>
        <button
          onClick={onConnect}
          className="w-full bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-green-500 transition-colors duration-300 flex items-center justify-center text-lg shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <SpotifyIcon className="mr-3 h-6 w-6" />
          Connect with Spotify
        </button>
        <p className="text-xs text-zinc-500 mt-4">
          This is a demo. You will be asked to paste your liked songs in the next step.
        </p>
      </div>
    </div>
  );
};

export default ConnectStep;
