import React, { useState, createContext, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

export const LayoutContext = createContext(null)


function AppLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(true)
    const [openXsSidebar, setOpenXsSidebar] = useState(false)
    const context = {
        openSidebar, setOpenSidebar,
        openXsSidebar, setOpenXsSidebar
    }

    const handleResize = () => {
        window.innerWidth > 991 ? setOpenSidebar(true) : setOpenSidebar(false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

   

    return (
        <LayoutContext.Provider value={context}>
            <div id="page-container" className={`sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow ${openXsSidebar ? 'sidebar-o-xs' : ''} ${openSidebar ? 'sidebar-o' : ''}`}>
                {/* sidebar::begin */}
                <Sidebar />
                {/* sidebar::end */}

                {/* header::begin */}
                <Header />
                {/* header::end */}

                {/* main content::begin */}
                <Main>
                    {children}
                </Main>
                {/* main content::begin */}

                {/* footer::begin */}
                <Footer />
                {/* footer::end */}
            </div>
        </LayoutContext.Provider>

    )
}

export default AppLayout