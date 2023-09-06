export const academicDepartmentFilterableFields: string[] = [
  'searchTerm',
  'id',
  'academicFacultyId',
];

export const academicDepartmentSearchableFields: string[] = [
  'academicFacultyId',
];

export const academicDepartmentRelationalFields: string[] = [
  'academicFacultyId',
];

export const academicDepartmentRelationalFieldsMapper: {
  [key: string]: string;
} = {
  academicFacultyId: 'academicFaculty',
};
