import React from "react";
import {createRoot} from "react-dom/client";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import Peliculas from "./components/peliculas";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import Ejemplo from "./components/ejemplo";

let lang;
const getLocale = ()=>{
    const userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);
    lang = userLang;
    return userLang ==="es" ? localeEsMessages : localeEnMessages;
}
getLocale();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <IntlProvider locale={lang} messages={getLocale()}>
  <Peliculas />
  </IntlProvider>
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
