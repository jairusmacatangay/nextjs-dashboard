import { EditPatient, DeletePatient } from '@/app/ui/patients/buttons';

export function Table() {
  const patients = [
    {
      id: 101,
      name: 'Josiane Koss',
      dentistName: 'Dr. Stone Daugherty',
      lastVisit: '6 Aug 2022',
      lastServices: ['Root Canal Therapy'],
      contactNo: '09758244086',
    },
    {
      id: 102,
      name: 'Sarina Cole',
      dentistName: 'Dr. Mya Rath',
      lastVisit: '6 Aug 2022',
      lastServices: ['Teeth Whitening'],
      contactNo: '09774250266',
    },
    {
      id: 103,
      name: 'Cyrus Klein',
      dentistName: 'Dr. Vanessa Hilpert',
      lastVisit: '4 Aug 2022',
      lastServices: ['Tooth Extraction'],
      contactNo: '09374550589',
    },
    {
      id: 104,
      name: 'Gabriela Hill',
      dentistName: 'Dr. Mya Rath',
      lastVisit: '3 Aug 2022',
      lastServices: ['Cosmetic Fillings'],
      contactNo: '09274980263',
    },
    {
      id: 105,
      name: 'Inverness McKenzie',
      dentistName: 'Dr. Stone Daugherty',
      lastVisit: '3 Aug 2022',
      lastServices: ['Dental Crowns'],
      contactNo: '09254250266',
    },
    {
      id: 106,
      name: 'Erna Cruikshank',
      dentistName: 'Dr. Vanessa Hilpert',
      lastVisit: '3 Aug 2022',
      lastServices: ['Braces Adjustment', 'Oral Prophylaxis'],
      contactNo: '09174099890',
    },
    {
      id: 107,
      name: 'Sally Schmeler',
      dentistName: 'Dr. Domenico Stark',
      lastVisit: '2 Aug 2022',
      lastServices: ['Consultation', 'Tooth Extraction'],
      contactNo: '09169395748',
    },
    {
      id: 108,
      name: 'Edmond Smith',
      dentistName: 'Dr. Domenico Stark',
      lastVisit: '31 July 2022',
      lastServices: ['Oral Prophylaxis'],
      contactNo: '09774250266',
    },
  ];

  return (
    <table className="mt-8 table-auto border-collapse border w-full">
      <thead>
        <tr className="border text-left">
          <th>ID</th>
          <th>PATIENT NAME</th>
          <th>LAST VISIT</th>
          <th>LAST SERVICE/S</th>
          <th>CONTACT NO.</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id} className="border">
            <td>P-{patient.id}</td>
            <td>{patient.name}</td>
            <td>{patient.lastVisit}</td>
            <td>{patient.lastServices.join(',')}</td>
            <td>{patient.contactNo}</td>
            <td>
              <div className="flex">
                <EditPatient />
                <DeletePatient />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
