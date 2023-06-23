import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Test from "./Test";

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
        <Box>
          <CssBaseline />
          <Test changeLocale={changeLocale} />
        </Box>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
