import { BarLoader } from 'react-spinners'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

import { apiClient } from '../../../shared/services/api'
import { BasicLayout } from '../../../shared/layout'
import { FaTrash, FaRegEdit } from 'react-icons/fa'
import { TUserResponse } from '../types'

import './UserListing.css'
import { ListingTool } from '../../../shared/components'

export const UserListing = () => {
  const { data, isLoading } = useQuery<TUserResponse[]>(['users'], () =>
    apiClient.get('user').then(res => res.data)
  )
  const navigate = useNavigate()

  const navigateToNewUserPage = () => {
    navigate('./new')
  }

  return (
    <BasicLayout
      title="Listagem de usuários"
      toolbar={<ListingTool onClickNewButton={navigateToNewUserPage} />}
    >
      {isLoading && <BarLoader width="100%" />}
      <div className="table-wrapper">
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Cpf</th>
              <th>Ações</th>
            </tr>

            {data &&
              data.map(({ name, cpf, _id }) => (
                <tr key={_id}>
                  <td>{name}</td>
                  <td>{cpf}</td>
                  <td>
                    <Link className="icon" to={`/user/${_id}`}>
                      <FaRegEdit />
                    </Link>
                    <button
                      className="icon"
                      onClick={() => alert('tem certeza?')}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </BasicLayout>
  )
}
