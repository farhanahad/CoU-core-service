<h2>Academic Semester related API's</h2>

1.Post

http://localhost:5000/api/v1/academic-semesters

body:
{
"year":2023,
"title":"Autumn",
"code":"01",
"startMonth":"January",
"endMonth":"June"

}
Output:
{
"statusCode": 200,
"success": true,
"message": "Academic Semester Created Successfully",
"data": {
"id": "56ab3679-c299-4b61-a3d0-db64eead6e9c",
"year": 2023,
"title": "Autumn",
"code": "01",
"startMonth": "January",
"endMonth": "June",
"createdAt": "2023-08-18T15:50:23.056Z",
"updatedAt": "2023-08-18T15:50:23.056Z"
}
}

2. Get:
   http://localhost:5000/api/v1/academic-semesters

3.Get:
http://localhost:5000/api/v1/academic-semesters?page=1&limit=10&searchTerm=fall&year=2023

4.Get:
http://localhost:5000/api/v1/academic-semesters?page=1&limit=1

http://localhost:5000/api/v1/academic-semesters?page=1&limit=2&searchTerm=fall&code=03

http://localhost:5000/api/v1/academic-semesters?page=1&limit=2&searchTerm=fall
http://localhost:5000/api/v1/academic-semesters?page=1&limit=2&searchTerm=02

5. Get: Filtering : http://localhost:5000/api/v1/academic-semesters?page=1&limit=2&startMonth=January

6.Get: http://localhost:5000/api/v1/academic-semesters/2c4c8acb-622e-45dc-a06d-bc4603b15ac8

<h2>Academic Faculty related API's</h2>

1. Post : http://localhost:5000/api/v1//academic-faculties
   Input:
   {
   "title":"Faculty of Engineering"
   }

2. Get: http://localhost:5000/api/v1//academic-faculties

<h2>Academic Department related API's</h2>

Create:
Post: http://localhost:5000/api/v1//academic-departments
Post:
{
"title":"ICT",
"academicFacultyId":"cc38abf1-6ddf-4772-a409-28789c4bcb06"
}

Get: http://localhost:5000/api/v1//academic-departments?page=1&limit=1

<h2>Faculty related API's</h2>

Post: http://localhost:5000/api/v1/faculties

Input:
{
"facultyId":"f-01",
"firstName":"Farhan",
"lastName":"Ahad",
"middleName":"",
"profileImage":"",
"email":"farhan@gmmail.com",
"contactNo":"016225225752",
"gender":"male",
"bloodGroup":"b+",
"designation":"professor",
"academicDepartmentId":"8281cfb1-2c77-4dea-bd6f-bf41c563c423",
"academicFacultyId":"cc38abf1-6ddf-4772-a409-28789c4bcb06"
}

<h2>Student Related API's</h2>

Post: http://localhost:5000/api/v1/students
Input:
{
"studentId":"s-01",
"firstName":"Farhan",
"lastName":"Ahad",
"middleName":"",
"profileImage":"",
"email":"farhan@gmmail.com",
"contactNo":"016225225752",
"gender":"male",
"bloodGroup":"b+",
"academicSemesterId":"2c4c8acb-622e-45dc-a06d-bc4603b15ac8",
"academicDepartmentId":"8281cfb1-2c77-4dea-bd6f-bf41c563c423",
"academicFacultyId":"cc38abf1-6ddf-4772-a409-28789c4bcb06"

}
npx prisma migrate dev --name init
