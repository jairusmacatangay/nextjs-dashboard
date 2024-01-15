export function Filters() {
  const dentists = [
    {
      id: 1,
      name: 'Dr. Stone Daugherty',
    },
    {
      id: 2,
      name: 'Dr. Maya Rath',
    },
    {
      id: 3,
      name: 'Dr. Vanessa Hilpert',
    },
  ];

  const lastVisits = [
    {
      id: 1,
      date: '6 Aug 2022',
    },
    {
      id: 2,
      date: '4 Aug 2022',
    },
    {
      id: 3,
      date: '3 Aug 2022',
    },
  ];

  return (
    <>
      <div className="flex items-center">
        <span className="mr-3">Filter by:</span>

        {/* Assigned Dentist Select List */}
        <select className="mr-3" name="assignedDentist" id="assignedDentist">
          <option value="" disabled selected hidden>
            Assigned Dentist
          </option>
          {dentists.map((dentist) => (
            <option key={dentist.id} value={dentist.id}>
              {dentist.name}
            </option>
          ))}
        </select>

        {/* Last Visit Select List */}
        <select name="lastVisit" id="lastVisit">
          <option value="" disabled selected hidden>
            Last Visit
          </option>
          {lastVisits.map((lastVisit) => (
            <option key={lastVisit.id} value={lastVisit.id}>
              {lastVisit.date}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
