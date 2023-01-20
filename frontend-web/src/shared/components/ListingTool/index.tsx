import { Search } from '../Search'

import './ListingTool.css'

interface IListingToolProps {
  hasSearch?: boolean
  hasNewButton?: boolean
  select?: React.ReactNode
  onClickNewButton?: () => void
}

export const ListingTool: React.FC<IListingToolProps> = ({
  select,
  hasSearch = true,
  hasNewButton = true,
  onClickNewButton
}) => {
  return (
    <div className="listing">
      {hasSearch && <Search />}
      {select && <div>{select}</div>}
      {hasNewButton && <button onClick={onClickNewButton}>Novo</button>}
    </div>
  )
}
