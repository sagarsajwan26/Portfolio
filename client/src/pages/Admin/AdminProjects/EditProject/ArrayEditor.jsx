import React, { useState } from 'react'
import Input from '../../../../Components/input/Input'
import { useDispatch } from 'react-redux'
import { handleProjectArrayData } from '../../../../store/projects/projectThunk'
import { toast } from 'react-toastify'

const ArrayEditor = ({ label, id, value, projectId }) => {
  const [dataValue, setDataValue] = useState(value?.join(','))
  const dispatch = useDispatch()

  const handleUpdateArrayData = async e => {
    e.preventDefault()

    dispatch(handleProjectArrayData({ projectId, [id]: dataValue })).then(
      res => {
        if(res.meta.requestStatus='fulfilled'){
          toast.success(`${id} has been updated`)
        }
      }
    )
  }
  return (
    <form onSubmit={handleUpdateArrayData}>
      <Input
        label={label}
        value={dataValue}
        onChange={e => setDataValue(e.target.value)}
      />
      <button type='submit'>Update</button>
    </form>
  )
}

export default ArrayEditor
