import { ReactNode } from "react"
import NavBar from "../navbar/NavBar"

interface ILayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
