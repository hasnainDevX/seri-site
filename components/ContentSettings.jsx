'use client'
import {createContext,useContext} from 'react'
const Context=createContext({settings:{},images:[]})
export const useContentSettings=()=>useContext(Context)
export default function ContentSettings({value,children}){return <Context.Provider value={value}>{children}</Context.Provider>}
