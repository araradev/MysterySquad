import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import React from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  React.useEffect(() => {
    const handleUserInteraction = () => {
      const BackgroundAudio = new Audio("/video/Amanda.mp3");
      BackgroundAudio.play().catch((error) => {
        console.warn("Playback failed:", error);
      });
      // Remove o listener depois da primeira interação
      window.removeEventListener("click", handleUserInteraction);
    };

    // Adiciona o listener de clique
    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;
