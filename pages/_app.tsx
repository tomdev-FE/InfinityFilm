import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { useNetwork } from "hooks/useNetwork";

const queryClient = new QueryClient();

function MovieApp({ Component, pageProps }: AppProps) {
  const isOnline = useNetwork();
  const netWorkId = "network-id";

  const notify = () => {
    toast.error("Network error! Please try again", {
      toastId: netWorkId,
    });
  };

  useEffect(() => {
    if (!isOnline) {
      notify();
    }
  }, [isOnline]);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </QueryClientProvider>
  );
}

export default MovieApp;
