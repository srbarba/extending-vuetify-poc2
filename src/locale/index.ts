import defu from 'defu'
import * as locales from 'vuetify/locale'
import enLocale from './en.json'
import esLocale from './es.json'

export const {
  af,
  ar,
  bg,
  ca,
  ckb,
  cs,
  da,
  de,
  el,
  en,
  es,
  et,
  fa,
  fi,
  fr,
  hr,
  hu,
  he,
  id,
  it,
  ja,
  km,
  ko,
  lv,
  lt,
  nl,
  no,
  pl,
  pt,
  ro,
  ru,
  sk,
  sl,
  srCyrl,
  srLatn,
  sv,
  th,
  tr,
  az,
  uk,
  vi,
  zhHans,
  zhHant,
} = defu(
  {
    es: defu(esLocale, locales.es),
    en: defu(enLocale, locales.en),
  },
  locales,
)
