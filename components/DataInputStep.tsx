
import React, { useState } from 'react';
import { SAMPLE_SONGS } from '../constants';

interface DataInputStepProps {
  onSubmit: (songs: string) => void;
}

const DataInputStep: React.FC<DataInputStepProps> = ({ onSubmit }) => {
  const [songs, setSongs] = useState('');

  const handleUseSampleData = () => {
    setSongs(SAMPLE_SONGS);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (songs.trim()) {
      onSubmit(songs);
    }
  };

  return (
    <div className="animate-slide-in-up bg-zinc-800 p-8 rounded-2xl shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-2">Import Your Music Taste</h2>
      <p className="text-zinc-400 mb-6">
        Paste a list of your liked songs below, one song per line (e.g., "Artist - Title"). This context helps the AI understand your vibe.
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={songs}
          onChange={(e) => setSongs(e.target.value)}
          placeholder="e.g.&#10;Daft Punk - Get Lucky&#10;Fleetwood Mac - Dreams&#10;Tame Impala - The Less I Know The Better"
          className="w-full h-64 p-4 bg-zinc-900 border-2 border-zinc-700 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-colors duration-300 resize-none text-zinc-200"
        />
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={!songs.trim()}
            className="flex-1 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-green-500 disabled:bg-zinc-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            Analyze My Music
          </button>
          <button
            type="button"
            onClick={handleUseSampleData}
            className="flex-1 bg-zinc-700 text-zinc-200 font-bold py-3 px-6 rounded-full hover:bg-zinc-600 transition-colors duration-300 transform hover:scale-105"
          >
            Use Sample Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataInputStep;
