import { useState } from 'react'
import useGetDescription from './useGetDescription'

export default function useModal() {
  const [open, setOpen] = useState<boolean>(false)
  const { getDescription } = useGetDescription()
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = (key: string, id: number | string) => {
    getDescription(id)
    setOpen(true)
  }

  return {
    open,
    handleClose,
    handleOpen,
  }
}
