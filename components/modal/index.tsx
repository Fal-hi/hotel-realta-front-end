import { FC } from "react"
import Typography from "../Typography"
import variants from "../Typography/textcss"

type Props = {
  header: string
  onClose: any
  children: any
  terserah?: string
}
type ModalProps = {
  header: string
  onClose: any
  children: any
  terserah?: string
}
export const Modal: FC<ModalProps> = ({
  header,
  onClose,
  children,
  terserah,
}: Props) => {
  return (
    <div
      className="relative z-10 transition ease-in-out delay-150"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className={`overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full ${terserah}`}
          >
            <div className="flex justify-between border-b">
              <div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4 font-bold ">
                <Typography variant={variants.lgbold}>{header}</Typography>
              </div>
              <div
                className="px-4 pt-5 pb-4 font-bold cursor-pointer"
                onClick={onClose}
              >
                X
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  terserah: "sm:max-w-lg",
}
