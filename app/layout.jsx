import "@styles/globals.css";

// import Nav from "@components/Nav";
// import Provider from "@components/Provider";

export const metadata = {
  title: "Promptcs",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en' >
    <body suppressHydrationWarning={true}>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {/* <Nav /> */}
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;
