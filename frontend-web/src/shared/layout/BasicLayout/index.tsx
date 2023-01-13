import { ReactNode } from 'react'

import './BasicLayout.css'

interface IBasicLayoutProps {
  aside?: ReactNode
  toolbar?: ReactNode
  pagination?: ReactNode
  children: ReactNode
}

export const BasicLayout: React.FC<IBasicLayoutProps> = ({
  aside,
  toolbar,
  pagination,
  children
}) => {
  return (
    <div className="wrapper centralize">
      <div>top</div>
      <div className="container">
        {aside && <div className="subcontainer-left">{aside}</div>}
        <div className="subcontainer-right">
          {toolbar && <div>{toolbar}</div>}
          <div className="right">{children}</div>
          {pagination && <div>{pagination}</div>}
        </div>
      </div>
    </div>
  )
}
