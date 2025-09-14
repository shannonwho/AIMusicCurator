
import React, { useState } from 'react';
import { Song } from '../types';
import SongCard from './SongCard';
import Loader from './Loader';
import { WandIcon } from '../constants';

interface RecommendationStepProps {
  onGetRecommendations: (prompt: string) => void;
  recommendations: Song[];
  isLoading: boolean;
  error: string | null;
  onReset: () => void;
}

const suggestionPrompts = [
  "Yacht rock for a sunny road trip",
  "Lofi beats for late night studying",
  "Energetic 80s synthpop for a workout",
  "Rainy day indie folk",
];

const RecommendationStep: React.FC<RecommendationStepProps> = ({
  onGetRecommendations,
  recommendations,
  isLoading,
  error,
  onReset,
}) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGetRecommendations(prompt);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    onGetRecommendations(suggestion);
  };

  return (
    <div className="animate-slide-in-up">
      <div className="bg-zinc-800 p-6 sm:p-8 rounded-2xl shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-2">Describe Your Vibe</h2>
        <p className="text-zinc-400 mb-4">
          What kind of playlist are you in the mood for? The more descriptive, the better!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., 'Music for a cyberpunk city at night'"
            className="flex-grow w-full bg-zinc-900 border-2 border-zinc-700 rounded-full py-3 px-5 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-colors duration-300"
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="w-full sm:w-auto bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-green-500 disabled:bg-zinc-600 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <WandIcon className="h-5 w-5"/>
            Curate
          </button>
        </form>
        <div className="mt-4 flex flex-wrap gap-2">
            {suggestionPrompts.map(p => (
                <button key={p} onClick={() => handleSuggestionClick(p)} className="text-xs bg-zinc-700 hover:bg-zinc-600 text-zinc-300 py-1 px-3 rounded-full transition-colors">
                    {p}
                </button>
            ))}
        </div>
      </div>

      {isLoading && <Loader />}
      {error && <div className="text-center p-6 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">{error}</div>}
      
      {recommendations.length > 0 && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Your AI-Curated Playlist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((song, index) => (
              <SongCard key={`${song.title}-${index}`} song={song} />
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <button onClick={onReset} className="text-zinc-400 hover:text-white transition-colors">
          Start Over
        </button>
      </div>
    </div>
  );
};

export default RecommendationStep;
