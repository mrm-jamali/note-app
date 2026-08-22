import { Trash2, MoreVertical } from "lucide-react";

import SearchBar from "../notes/SearchBar";
import NoteFilter from "../notes/NoteFilter";
import DeleteConfirmModal from "../DeleteConfirmModal";
import { useState } from "react";

type TrashToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
  filter: string;
  onFilterChange: (value: string) => void;
  onEmptyTrash: () => void;
};

function TrashToolbar({
  search,
  onSearchChange,
  onSearch,
  filter,
  onFilterChange,
  onEmptyTrash,
}: TrashToolbarProps) {
  const [showEmptyTrashModal, setShowEmptyTrashModal] =
    useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Search */}
        <div className="w-full md:w-auto">
          <SearchBar
            value={search}
            onChange={onSearchChange}
            onSearch={onSearch}
          />
        </div>

        {/* Filter + Actions */}
        <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end">

          <NoteFilter
            value={filter}
            onChange={onFilterChange}
          />

          <button
            type="button"
            onClick={() => setShowEmptyTrashModal(true)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:bg-red-50 hover:text-red-600"
            title="خالی کردن سطل زباله"
          >
            <Trash2 size={20} />
          </button>

          {/* <button
            type="button"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white transition hover:bg-gray-100"
            title="بیشتر"
          >
            <MoreVertical size={20} />
          </button> */}

        </div>
      </div>

      <DeleteConfirmModal
        open={showEmptyTrashModal}
        title="خالی کردن سطل زباله"
        message="آیا مطمئنی می‌خواهی تمام یادداشت‌های سطل زباله را برای همیشه حذف کنی؟ این عملیات قابل بازگشت نیست."
        confirmText="خالی کردن سطل"
        cancelText="انصراف"
        onClose={() => setShowEmptyTrashModal(false)}
        onConfirm={() => {
          onEmptyTrash();
          setShowEmptyTrashModal(false);
        }}
      />
    </>
  );
}

export default TrashToolbar;