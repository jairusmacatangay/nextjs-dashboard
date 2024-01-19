import { Button } from '../button';
import {
  PlusIcon,
  ArrowUpOnSquareIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

export function CreatePatient({ onOpen }: { onOpen: () => void }) {
  return (
    <Button onClick={onOpen}>
      <PlusIcon className="mr-1 h-4 w-4" /> ADD NEW PATIENT
    </Button>
  );
}

export function Export() {
  return (
    <Button>
      <ArrowUpOnSquareIcon className="mr-1 h-4 w-4" /> Export
    </Button>
  );
}

export function EditPatient() {
  return (
    <Button className="mr-2">
      <PencilSquareIcon className="h-4 w-4" />
    </Button>
  );
}

export function DeletePatient() {
  return (
    <Button>
      <TrashIcon className="h-4 w-4" />
    </Button>
  );
}
