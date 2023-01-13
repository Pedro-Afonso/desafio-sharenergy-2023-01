import { ReactNode } from 'react'

import './BasicLayout.css'

interface IBasicLayoutProps {
  aside?: ReactNode
  toolbar?: ReactNode
  children: ReactNode
}

export const BasicLayout: React.FC<IBasicLayoutProps> = ({
  aside,
  toolbar,
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
        </div>
      </div>
    </div>
  )
}
