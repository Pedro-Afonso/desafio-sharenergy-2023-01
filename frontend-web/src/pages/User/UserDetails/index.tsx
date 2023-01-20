import { useEffect } from 'react'

import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { apiClient, queryClient } from '../../../shared/services/api'
import { BasicLayout } from '../../../shared/layout'

import { TUserData, TUserResponse } from '../types'

import './UserDetails.css'
import { DetailTool } from '../../../shared/components/DetailTool'

export const UserDetails = () => {
  const { id } = useParams()

  const isNew = id === 'new'

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<TUserData>()

  const { data: userData } = useQuery<TUserResponse>(
    ['user', id],
    () =>
      apiClient.get(`user/${id}`).then(res => {
        return res.data
      }),
    {
      enabled: !isNew,
      staleTime: Infinity,
      cacheTime: Infinity
    }
  )

  const { mutate } = useMutation({
    mutationFn: (data: TUserData) =>
      apiClient.put(`user/${id}`, data).then(res => res.data),
    onSuccess: newData => queryClient.setQueryData(['user', id], newData)
  })

  useEffect(() => {
    for (const k in userData) {
      if (['name', 'email', 'phone', 'cpf', 'address'].includes(k)) {
        setValue(k as keyof TUserData, userData[k as keyof TUserData])
      }
    }
  }, [userData, setValue])

  const onSubmit = async (data: {
    name: string
    email: string
    phone: string
    cpf: string
    address: string
  }) => {
    mutate(data)
  }

  const navigate = useNavigate()

  const onClickBackButton = () => {
    navigate('/user')
  }

  return (
    <BasicLayout
      title="Cadastro de clientes"
      toolbar={
        <DetailTool
          formId="user-form"
          hasNewButton={!isNew}
          saveButtonText={isNew ? 'Criar' : 'Salvar'}
          onClickBackButton={onClickBackButton}
        />
      }
    >
      <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="user-form-grid">
          <label className="label name">
            <span>Nome: </span>
            <input
              type="text"
              placeholder="Insira o nome completo"
              {...register('name', { required: true })}
            />

            {errors.name && (
              <span role="alert" className="form-error">
                Insira um nome.
              </span>
            )}
          </label>

          <label className="label email">
            <span>Email: </span>
            <input
              type="email"
              placeholder="Insira um email para contato"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span role="alert" className="form-error">
                Insira um email válido.
              </span>
            )}
          </label>

          <label className="label phone">
            <span>Celular: </span>
            <input
              type="text"
              placeholder="Insira um número para contato"
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <span role="alert" className="form-error">
                Insira um número válido
              </span>
            )}
          </label>

          <label className="label cpf">
            <span>CPF: </span>
            <input
              type="text"
              placeholder="Insira o número do cpf"
              {...register('cpf', { required: true })}
            />
            {errors.cpf && (
              <span role="alert" className="form-error">
                Insira um cpf válido
              </span>
            )}
          </label>

          <label className="label address">
            <span>Endereço: </span>
            <input
              type="text"
              placeholder="Insira o endereço completo ex.:(Rua A, número 00, bairro B)"
              {...register('address', { required: true })}
            />
            {errors.address && (
              <span role="alert" className="form-error">
                Endereço obrigatório
              </span>
            )}
          </label>
        </div>
      </form>
    </BasicLayout>
  )
}
