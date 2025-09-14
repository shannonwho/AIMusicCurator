
import React from 'react';
import { Song } from '../types';
import { MusicIcon } from '../constants';

interface SongCardProps {
  song: Song;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 hover:border-brand-green hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-zinc-700 h-12 w-12 rounded-md flex items-center justify-center">
            <MusicIcon className="h-6 w-6 text-zinc-400"/>
        </div>
        <div className="flex-grow">
          <h4 className="font-bold text-white truncate">{song.title}</h4>
          <p className="text-sm text-zinc-300 truncate">{song.artist}</p>
          <p className="text-xs text-zinc-400 truncate">{song.album}</p>
        </div>
      </div>
      <p className="text-sm text-zinc-400 mt-3 pt-3 border-t border-zinc-700">
        "{song.reason}"
      </p>
    </div>
  );
};

export default SongCard;
