// import { NavLink } from "react-router-dom";
'use client'
import { Fragment, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.sass'
import cn from 'classnames'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import i18nConfig from '@/i18nConfig'

export const LangSwitcher = () => {

  const { i18n } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  const router = useRouter()
  const currentPathname = usePathname();

  const langs = [
    {
      code: 'en',
      title: 'EN',
      name: 'English',
      flag: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#00247d"/><path d="M 0,0 L 300,300 M 300,0 L 0,300" stroke="#fff" strokeWidth="60"/><path d="M 0,0 L 300,300 M 300,0 L 0,300" stroke="#cf142b" strokeWidth="40"/><path d="M 150,150 v -30 L 30,0 H 0 z h 30 L 300,30 V 0 z v 30 L 270,300 H 300 z h -30 L 0,270 V 300 z" fill="#fff"/><path d="M 150,0 V 300 M 0,150 H 300" stroke="#fff" stroke-width="100"/><path d="M 150,0 V 300 M 0,150 H 300" stroke="#cf142b" stroke-width="60"/></svg>'
    },
    {
      code: 'uk',
      title: 'UA',
      name: 'Українська',
      flag: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 4.00466e-07 12.6522 0 10L20 10Z" fill="#FDE512"/><path d="M1.90735e-06 10C2.13921e-06 7.34783 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 4.78198e-08 10 7.94466e-08C12.6522 1.11073e-07 15.1957 1.05357 17.0711 2.92893C18.9464 4.80429 20 7.34783 20 10L1.90735e-06 10Z" fill="#1283EC"/></svg>'
    },
  ]

  return (
    <>
      <Menu>
        <MenuButton as={Fragment} >
          <div className={cn("w-full flex items-center gap-1", styles.switcher)}>
            <div className={styles.switcher__title}>{langs.find(lang => lang.code === i18n.language)?.title}</div>
            <div className={styles.switcher__flag}>
              <div className={styles.switcher__flag_svg} dangerouslySetInnerHTML={{ __html: langs.find(lang => lang.code === currentLanguage)?.flag || '' }}></div>
            </div>
          </div>
        </MenuButton>
        <MenuItems anchor={{ to: 'bottom end', gap: '8px' }} className={cn(styles.switcher__menu)}>
          {langs.map((lang) => (
            <MenuItem key={lang.code} as={'div'} className={cn("flex items-center gap-1 cursor-pointer", styles.switcher__menu__item)}>
              {() => (
                <>
                  <div className="w-6 h-6 flex items-center justify-center">
                    {currentLanguage === lang.code
                      ?
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      :
                      <></>
                    }
                  </div>
                  <button className={cn('block')}
                    disabled={currentLanguage === lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code).then(() => {
                        setCurrentLanguage(lang.code);
                        if (currentLanguage === i18nConfig.defaultLocale) {
                          router.push('/' + lang.code + currentPathname);
                        } else {
                          router.push(currentPathname.replace(`/${currentLanguage}`, `/${lang.code}`));
                        }

                        // router.reload();
                      });
                    }}
                  >
                    {lang.name}
                  </button>
                </>
              )}
            </MenuItem>
          ))}
          {/* <ul>
            {langs.map((lang) => (
              <MenuItem key={lang.code} as={Fragment}>
              <li key={lang.code}
                className="flex items-center gap-1 cursor-pointer hover:text-primary"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {currentLanguage === lang.code
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    :
                    <></>
                  }
                </div>
                <Button
                  className="w-full flex items-center"
                  // variant="link"
                  onClick={() => {
                    i18n.changeLanguage(lang.code).then(() => {
                      setCurrentLanguage(lang.code);
                      close();
                    });
                  }}
                >
                  {lang.name}</Button>
              </li>
              </MenuItem>
            ))}
          </ul> */}
        </MenuItems>
      </Menu>
    </>
  )
}