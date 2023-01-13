import { Search } from '../Search'
import './ListingTool.css'

interface IListingToolProps {
  hasSearch?: boolean
}

export const ListingTool: React.FC<IListingToolProps> = ({
  hasSearch = true
}) => {
  return <div className="listing">{hasSearch && <Search />}</div>
}
