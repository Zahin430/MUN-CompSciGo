import React from 'react';
import CourseDescription from '../../components/CourseDescription/CourseDescription';

function CoursePage({ match }) {
    const courses = [
        {
            "name": "Computer Science – An Introduction",
            "id": "CS1000", 
            "desc": "A breadth-first overview approach to the discussion of important aspects of computer science including fundamentals in algorithms, binary data representation, Boolean logic, systems software, networking concepts, introductory programming, databases, and selected Computer Science subfields.",
            "CR" : "COMP 1710",
            "LH": "3",
            "professors" : [
                {
                    "name" : "Mata-Montero, Manrique",
                    "email": "manrique@mun.ca" 
                },
                {
                    "name" : "Wareham, Todd",
                    "email": "harold@mun.ca" 
                },
                {
                    "name": "Johnstone, Steven",
                    "email": "stevenj@mun.ca"
                }

            ]
        },
        {
            "name": "Introduction to Programming",
            "id": "CS1001",
            "desc": "An introduction to fundamental programming techniques, primitive data types, and to simple algorithms and their design concepts. ",
            "professors" : [
                {
                    "name" : "Mata-Montero, Manrique",
                    "email": "manrique@mun.ca" 
                },
                {
                    "name" : "Wareham, Todd",
                    "email": "harold@mun.ca" 
                },
                {
                    "name": "Johnstone, Steven",
                    "email": "stevenj@mun.ca"
                }

            ]
        },
        {
            "name": "Introduction to Logic for Computer Scientists",
            "id": "CS1002",
            "desc": "Introduces methods of reasoning and logic tools that underlie computer science. In particular, this course covers propositional and predicate logic, sets and other discrete structures, as well as modular arithmetic and basic counting, with emphasis on their applications in computer science.",
            "professors" : [
                {
                    "name" : "Mata-Montero, Manrique",
                    "email": "manrique@mun.ca" 
                },
                {
                    "name" : "Wareham, Todd",
                    "email": "harold@mun.ca" 
                },
                {
                    "name": "Johnstone, Steven",
                    "email": "stevenj@mun.ca"
                }

            ]
        },
        {
            "name": "Foundations of Computing Systems",
            "id": "CS1003",
            "desc": "Provides an in-depth introduction to foundational topics in computer science: algorithms and data structures, theory of computing, machine architecture and their historical context.",
            "professors" : [
                {
                    "name" : "Mata-Montero, Manrique",
                    "email": "manrique@mun.ca" 
                },
                {
                    "name" : "Wareham, Todd",
                    "email": "harold@mun.ca" 
                },
                {
                    "name": "Johnstone, Steven",
                    "email": "stevenj@mun.ca"
                }

            ]
        },
        {
            "name": "Computing in the 20th Century and Beyond",
            "id": "CS1400"
        },
        {
            "name": "Computing at the Movies",
            "id": "CS1401"
        },
        {
            "name": "An Introduction to Programming for Scientific Computing",
            "id": "CS1510"
        },
        {
            "name": "Basic Computing and Information Technology ",
            "id": "CS1600"
        },
    ]

    const course = courses.find(({ id }) => id === match.params.courseId)
    return (
        <CourseDescription 
            title = {course.name} 
            id = {course.id}  
            desc = {course.desc} 
            CR = {course.CR} 
            professors = {course.professors}
            LH = {course.LH}/>
    );
}

export default CoursePage;
