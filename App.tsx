
import React, { useState, useCallback } from 'react';
import { AppState, Song } from './types';
import { getRecommendations } from './services/geminiService';
import ConnectStep from './components/ConnectStep';
import DataInputStep from './components/DataInputStep';
import RecommendationStep from './components/RecommendationStep';
import { LogoIcon } from './constants';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.CONNECT);
  const [likedSongs, setLikedSongs] = useState<string>('');
  const [recommendations, setRecommendations] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = () => {
    setAppState(AppState.INPUT_DATA);
  };

  const handleDataSubmit = (songs: string) => {
    setLikedSongs(songs);
    setAppState(AppState.RECOMMEND);
  };

  const handleGetRecommendations = useCallback(async (prompt: string) => {
    if (!likedSongs.trim()) {
      setError('Your liked songs list is empty. Please go back and provide your music data.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setRecommendations([]);
    try {
      const results = await getRecommendations(likedSongs, prompt);
      setRecommendations(results);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [likedSongs]);
  
  const handleReset = () => {
    setAppState(AppState.CONNECT);
    setLikedSongs('');
    setRecommendations([]);
    setIsLoading(false);
    setError(null);
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.CONNECT:
        return <ConnectStep onConnect={handleConnect} />;
      case AppState.INPUT_DATA:
        return <DataInputStep onSubmit={handleDataSubmit} />;
      case AppState.RECOMMEND:
        return (
          <RecommendationStep
            onGetRecommendations={handleGetRecommendations}
            recommendations={recommendations}
            isLoading={isLoading}
            error={error}
            onReset={handleReset}
          />
        );
      default:
        return <ConnectStep onConnect={handleConnect} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center p-4 sm:p-6 md:p-8">
      <header className="w-full max-w-4xl flex items-center justify-center mb-8 animate-fade-in">
         <LogoIcon className="h-10 w-10 text-brand-green" />
        <h1 className="text-3xl sm:text-4xl font-bold ml-4 tracking-tighter">
          AI Music Curator
        </h1>
      </header>
      <main className="w-full max-w-4xl flex-grow">
        {renderContent()}
      </main>
      <footer className="text-center text-zinc-500 text-sm mt-8 pb-4">
        <p>Powered by Google Gemini. Curate your perfect soundtrack.</p>
      </footer>
    </div>
  );
};

export default App;
