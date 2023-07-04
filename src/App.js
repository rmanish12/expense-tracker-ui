import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Shell from "./pages/shell";

const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  const changeLocale = (e, newLocale) => {
    setLocale(newLocale);
  };

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <BrowserRouter>
        <Box id="App" sx={{ height: "100vh", backgroundColor: "aliceblue" }}>
          <CssBaseline />
          <Shell changeLocale={changeLocale} />
        </Box>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
