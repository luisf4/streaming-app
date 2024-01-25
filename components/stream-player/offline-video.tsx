import { WifiOff } from "lucide-react";

interface OfflineVideoProps {
  hostName: string;
} 
export const OfflineVideo = ({ hostName }: OfflineVideoProps) => {
  return ( 
    <div className="h-full flex flex-col space-y-4 justify-center items-center">
      <WifiOff className="w-10 h-10 text-muted-foreground"/>
      <p className="text-muted-foreground">
        {hostName} is offline...
      </p>
    </div>
  )
}