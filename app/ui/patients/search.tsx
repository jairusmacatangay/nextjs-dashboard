import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function Search() {
  return (
    <>
      <div className="flex items-center mr-3">
        <MagnifyingGlassIcon className="mr-3 h-5 w-5" />
        <input id="search" name="search" placeholder="Search" />
      </div>
    </>
  );
}
