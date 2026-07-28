import { CloseIcon } from '@/components/icons';

export function ModalHeader({
  name,
  onClose,
}: {
  name: string;
  onClose: () => void;
}) {
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-2">
      <h2 className="font-roboto-condensed text-3xl font-bold uppercase tracking-tight text-primary">
        {name}
      </h2>
      <button
        onClick={onClose}
        aria-label="Close"
        className="text-primary cursor-pointer hover:opacity-70 transition-opacity"
      >
        <CloseIcon />
      </button>
    </div>
  );
}
