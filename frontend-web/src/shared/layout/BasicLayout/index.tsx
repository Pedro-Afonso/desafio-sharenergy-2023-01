import { ReactNode } from 'react'

import './BasicLayout.css'

interface IBasicLayoutProps {
  title: string
  aside?: ReactNode
  toolbar?: ReactNode
  pagination?: ReactNode
  children: ReactNode
}

export const BasicLayout: React.FC<IBasicLayoutProps> = ({
  title,
  aside,
  toolbar,
  pagination,
  children
}) => {
  return (
    <div className="wrapper centralize">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="container">
        {aside && <div className="subcontainer-left">{aside}</div>}
        <div className="subcontainer-right">
          {toolbar && <div>{toolbar}</div>}
          <div>{children}</div>
          {pagination && <div>{pagination}</div>}
        </div>
      </div>
    </div>
  )
}
