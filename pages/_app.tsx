import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "react-tabs/style/react-tabs.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
