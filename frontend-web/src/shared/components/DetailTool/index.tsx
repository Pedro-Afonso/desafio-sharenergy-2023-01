import './DetailTool.css'

interface IDetailToolProps {
  formId: string
  saveButtonText?: string
  hasSearch?: boolean
  hasNewButton?: boolean
  hasSaveButton?: boolean
  onClickSaveButton?: () => void
  onClickBackButton?: () => void
}

export const DetailTool: React.FC<IDetailToolProps> = ({
  formId,
  hasSaveButton = true,
  saveButtonText = 'Salvar',
  hasNewButton = true,
  onClickSaveButton,
  onClickBackButton
}) => {
  return (
    <div className="detail">
      {hasSaveButton && (
        <button form={formId} onClick={onClickSaveButton}>
          {saveButtonText}
        </button>
      )}

      <button form={formId} onClick={onClickBackButton}>
        Voltar
      </button>

      {hasNewButton && (
        <button form={formId} onClick={onClickBackButton}>
          Novo
        </button>
      )}
    </div>
  )
}
