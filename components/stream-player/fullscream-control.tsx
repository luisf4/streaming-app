import { Maximize, Minimize } from "lucide-react";

import { Hint } from "../hint";

interface FullscreenControlProps {
  isFullscreen: boolean;
  onClick: () => void;
}

export const FullscreenControl = ({
  isFullscreen,
  onClick,
}: FullscreenControlProps) => {
  const Icon = isFullscreen ? Minimize : Maximize;
  const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";
  
  return (
   <div className="flex items-center justify-center gap-4">
      <Hint label={label} asChild>
        <button onClick={onClick} className="text-white p-1.5 hover:bg-white/10 rounded-lg">
          <Icon className="w-6 h-6" />
        </button>
      </Hint>
   </div>
  );
};