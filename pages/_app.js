import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
    import("my_icons/style.css")
    import("animate.css/animate.min.css")
  },[])
  return <Component {...pageProps} />
}
