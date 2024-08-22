import english from './en.json'
import spanish from './es.json'
import italian from './it.json'


const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es',
    ITALIAN: 'it'
}

export const getI18N = ({currentLocale = 'en'} : {currentLocale : string | undefined}) => {
    if (currentLocale === LANGUAGES.SPANISH) return {...english,...spanish}
    if (currentLocale === LANGUAGES.ITALIAN) return {...english,...italian}
    return english
}