
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Instructions from "./pages/Instructions";
import Programs from "./pages/Programs";
import Testing from "./pages/Testing";
import TestCatalog from "./pages/TestCatalog";
import Protocols from "./pages/Protocols";
import Certificates from "./pages/Certificates";
import Documents from "./pages/Documents";
import Analytics from "./pages/Analytics";
import Students from "./pages/Students";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/test-catalog" element={<TestCatalog />} />
          <Route path="/protocols" element={<Protocols />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/students" element={<Students />} />
          <Route path="/videos" element={<Videos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;