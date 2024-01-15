import { UserPlusIcon } from '@heroicons/react/24/outline';
import { CreatePatient, Export } from '@/app/ui/patients/buttons';
import { Filters } from '@/app/ui/patients/filters';
import { Search } from '@/app/ui/patients/search';
import { Table } from '@/app/ui/patients/table';
import { Pagination } from '@/app/ui/patients/pagination';

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <UserPlusIcon className="me-1 h-5 w-5" />
          <p>Patients</p>
        </div>

        <CreatePatient />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Filters />

        <div className="flex">
          <Search />
          <Export />
        </div>
      </div>

      <Table />
      <Pagination />
    </>
  );
}
