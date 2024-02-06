import React,{useContext} from 'react'
import HeaderDropdown from './HeaderDropdown'
import { LayoutContext } from '../AppLayout'

function Header() {
    const {openSidebar, setOpenSidebar,openXsSidebar, setOpenXsSidebar} = useContext(LayoutContext)
    const handleSidebarToggle = () => {
      window.innerWidth > 991 && setOpenSidebar(!openSidebar)
      window.innerWidth <= 991 && setOpenXsSidebar(!openXsSidebar)
    }
  return (
   
    <header id="page-header">
    <div className="content-header">
      <div>

        <button type="button" className="btn btn-alt-secondary me-1" data-toggle="layout" data-action="sidebar_toggle" onClick={handleSidebarToggle}>
          <i className="fa fa-fw fa-bars"></i>
        </button>

        
      </div>

      <div className="space-x-1">
        <HeaderDropdown name="Admin" title="Admin profile" icon="fa fa-fw fa-user"/>
      </div>
    </div>

  </header>
  )
}

export default Header