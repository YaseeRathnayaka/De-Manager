const events = [
  {
    appointment_id: 1,
    title: 'Full Service abs3456',
    start: new Date(2024, 5, 22, 10, 0), // June 22, 2024, 10:00 AM
    end: new Date(2024, 5, 22, 12, 0), // June 22, 2024, 12:00 PM
    customerName: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    NIC: 'A123456789',
    vehicleNumber: 'ABC123',
    vehicleModel: 'Toyota Camry',
    vehicleYear: 2018,
    vehicleType: 'Sedan',
    preferredDate: '2024-06-22',
    timeSlot: '10:00 AM - 12:00 PM',
    serviceTypes: ['Oil Change', 'Tire Rotation', 'Brake Inspection']
  },
  {
    appointment_id: 2,
    title: 'Oil Change abh3456',
    start: new Date(2024, 5, 21, 10, 0), // June 21, 2024, 10:00 AM
    end: new Date(2024, 5, 21, 12, 0), // June 21, 2024, 12:00 PM
    customerName: 'Jane Smith',
    email: 'jane.smith@example.com',
    mobile: '987-654-3210',
    address: '456 Elm St, Othertown, USA',
    NIC: 'B987654321',
    vehicleNumber: 'XYZ789',
    vehicleModel: 'Honda Civic',
    vehicleYear: 2020,
    vehicleType: 'Coupe',
    preferredDate: '2024-06-21',
    timeSlot: '10:00 AM - 12:00 PM',
    serviceTypes: ['Oil Change']
  },
  {
    appointment_id: 3,
    title: 'Tire Rotation gh2345',
    start: new Date(2024, 5, 30, 12, 0), // June 30, 2024, 12:00 PM
    end: new Date(2024, 5, 30, 14, 0), // June 30, 2024, 2:00 PM
    customerName: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    mobile: '456-789-0123',
    address: '789 Maple St, Sometown, USA',
    NIC: 'C456789012',
    vehicleNumber: 'DEF456',
    vehicleModel: 'Ford Focus',
    vehicleYear: 2019,
    vehicleType: 'Hatchback',
    preferredDate: '2024-06-30',
    timeSlot: '12:00 PM - 2:00 PM',
    serviceTypes: ['Tire Rotation', 'Battery Check']
  },
  {
    appointment_id: 4,
    title: 'Brake Inspection abs3456',
    start: new Date(2024, 5, 30, 10, 0), // June 24, 2024, 10:00 AM
    end: new Date(2024, 5, 30, 12, 0), // June 24, 2024, 12:00 PM
    customerName: 'Emily Davis',
    email: 'emily.davis@example.com',
    mobile: '321-654-0987',
    address: '101 Pine St, Anycity, USA',
    NIC: 'D321654098',
    vehicleNumber: 'GHI678',
    vehicleModel: 'Chevrolet Malibu',
    vehicleYear: 2017,
    vehicleType: 'Sedan',
    preferredDate: '2024-06-24',
    timeSlot: '10:00 AM - 12:00 PM',
    serviceTypes: ['Brake Inspection']
  },
  {
    appointment_id: 5,
    title: 'Battery Check abs3456',
    start: new Date(2024, 5, 30, 10, 0), // June 22, 2024, 10:00 AM
    end: new Date(2024, 5, 30, 12, 0), // June 22, 2024, 12:00 PM
    customerName: 'Chris Lee',
    email: 'chris.lee@example.com',
    mobile: '654-321-9870',
    address: '202 Birch St, Newtown, USA',
    NIC: 'E654321987',
    vehicleNumber: 'JKL890',
    vehicleModel: 'Nissan Altima',
    vehicleYear: 2016,
    vehicleType: 'Sedan',
    preferredDate: '2024-06-22',
    timeSlot: '10:00 AM - 12:00 PM',
    serviceTypes: ['Battery Check']
  },
];

export default events;
