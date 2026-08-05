"use client";

import { Trash2, X } from "lucide-react";


type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
};


export default function DeleteConfirmModal({
  open,
  onClose,
  onConfirm,
  title = "این یادداشت",
}: Props) {


  if (!open) return null;


  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        px-4
      "
      dir="rtl"
    >


      <div
        className="
          w-full
          max-w-sm
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
      >


        {/* Header */}

        <div className="flex justify-between items-center mb-4">


          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-red-100
            "
          >
            <Trash2
              className="text-red-500"
              size={24}
            />
          </div>



          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              hover:bg-gray-100
            "
          >
            <X size={20}/>
          </button>


        </div>



        {/* Content */}

        <h2 className="mb-2 text-lg font-bold">
          حذف یادداشت
        </h2>


        <p className="mb-6 text-sm text-gray-500">
          آیا مطمئنی می‌خواهی 
          <span className="font-medium text-gray-700">
            {" "}{title}
          </span>
          {" "}
          را حذف کنی؟
        </p>



        {/* Actions */}

        <div
          className="
            flex
            gap-3
          "
        >

          <button
            onClick={onClose}
            className="
              flex-1
              rounded-xl
              border
              py-2.5
              text-gray-600
              hover:bg-gray-100
            "
          >
            انصراف
          </button>



          <button
            onClick={onConfirm}
            className="
              flex-1
              rounded-xl
              bg-red-500
              py-2.5
              text-white
              hover:bg-red-600
            "
          >
            حذف
          </button>


        </div>


      </div>


    </div>
  );
}