/* Author: Logan Stoltz */

import React, { useState } from 'react';
import '../styles/Classes.css';

const Classes = () => {
    let currentPage = 0;
    const classPages = document.querySelectorAll('.class-page');
    const totalPages = classPages.length;
    
    function updatePage() {
      classPages.forEach((page) => {
          page.style.transform = `translateX(-${currentPage * 100}%)`;
      });
    
      document.querySelector('.left-button').disabled = currentPage === 0;
      document.querySelector('.right-button').disabled = currentPage === totalPages - 1;
    }
    
    function prevPage() {
      if (currentPage > 0) {
          currentPage--;
          updatePage();
      }
    }
    
    function nextPage() {
      if (currentPage < totalPages - 1) {
          currentPage++;
          updatePage();
      }
    }

    return (
        <section id="classes">
            <h2 className="section-header">Classes</h2>
            <button className="scroll-button left-button" onClick={prevPage}>
                &#10094;
            </button>
            <button className="scroll-button right-button" onClick={nextPage}>
                &#10095;
            </button>
            <div className="classes-container">
                {/* Page 1 */}
                <div class="class-page">
                    {/* Class 1 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20202" target="_blank">
                            <div class="class-details">
                                <h4>CSCD202</h4>
                                <h3>COMPUTING ETHICS</h3>
                                <h4>A</h4>
                                <p>This course explores the uses of computing technologies from a socio-cultural and ethical perspective, including the impacts of information systems on individuals, organization, and society and future direction in which the forces of technology and computing are tending to move us.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 2 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20212" target="_blank">
                            <div class="class-details">
                                <h4>CSCD212</h4>
                                <h3>OBJECT ORIENTED PROGRAMMING</h3>
                                <h4>A-</h4>
                                <p>This course involves a deeper look at object-oriented principles including commonly used design patterns. UML class diagrams, unit testing, and code versioning will also be introduced. Programming projects and a group project are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 3 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20305" target="_blank">
                            <div class="class-details">
                                <h4>CSCD305</h4>
                                <h3>C++ PROGRAMMING</h3>
                                <h4>B+</h4>
                                <p>This course teaches the C++ programming language. Topics include basic syntax, pointers, memory management, classes, inheritance and polymorphism, exception handling, standard template library usage, namespaces, memory management, and graphical user interface (GUI) programming. Programming projects are required.</p>
                                
                            </div>
                        </a>
                    </div>
                    {/* Class 4 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20240" target="_blank">
                            <div class="class-details">
                                <h4>CSCD240</h4>
                                <h3>C AND UNIX PROGRAMMING</h3>
                                <h4>B</h4>
                                <p>This course includes program development tools of the UNIX operating system and syntax and programming techniques of the C language in that environment. UNIX topics include interactive shells, common text editors, utility programs, file system structure, libraries and operating system calls and system programming. C topics include data types, structures, pointers and pointer arithmetic, arrays, linked lists, and function design and use. Programming projects are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 5 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20260" target="_blank">
                            <div class="class-details">
                                <h4>EENG260</h4>
                                <h3>ARCHITECTURE & ORGANIZATION</h3>
                                <h4>B</h4>
                                <p>This is an introductory course on microprocessor and microcontroller systems organization. It provides low-level programming principles for microcomputer based systems. The course emphasizes assembly and C language programming techniques and laboratory experiments in input/output programming, memory organization, interrupts and interfacing methods.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 6 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20300" target="_blank">
                            <div class="class-details">
                                <h4>CSCD300</h4>
                                <h3>DATA STRUCTURES</h3>
                                <h4>B-</h4>
                                <p>This course covers fundamental abstract concepts of data structures as well as their implementation in a programming language. Topics include linked lists, stacks, queues, hashing, recursion, complexity analysis of algorithms, binary search trees and heaps. Programming projects with formal documentation are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 7 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?search=CSCD+477" target="_blank">
                            <div class="class-details">
                                <h4>CSCD477</h4>
                                <h3>VIRTUAL REALITY & DATA VISUALS</h3>
                                <h4>A</h4>
                                <p>This course introduces the concept of virtual reality (VR) using knowledge of computer graphics with hands-on projects and programming assignments. Students use game engines as the implementation platforms for graphics-related programming assignments and projects. With virtual devices, scientific results, visualization, and simulations are explored in unimodal and multimodal virtual environments.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 8 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20327" target="_blank">
                            <div class="class-details">
                                <h4>CSCD327</h4>
                                <h3>RELATIONAL DATABASE SYSTEMS</h3>
                                <h4>B-</h4>
                                <p>This course covers the basic concepts in relational database systems, including data manipulation language and data definition language. Relational models are covered in depth together with an overview of SQL, Relational Algebra, Entity-Relationship Model and its role in application development.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 9 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20437" target="_blank">
                            <div class="class-details">
                                <h4>CSCD437</h4>
                                <h3>SECURE CODING</h3>
                                <h4>A</h4>
                                <p>This course will introduce a variety of topics of concern to programmers when writing code. It will examine characteristics of secure programs and the ability to implement programs that are free from vulnerabilities, including evaluating software, understanding mechanisms for testing software for vulnerabilities, and understanding specific vulnerabilities such as buffer overflow. Java, C and C++ code will be examined. Written assignments and coding assignments are required.</p>
                            </div>
                        </a>
                    </div>
                </div>
                {/* End Page 1 */}

                {/* Page 2 */}
                <div class="class-page">
                    {/* Class 10 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20340" target="_blank">
                            <div class="class-details">
                                <h4>CSCD340</h4>
                                <h3>OPERATING SYSTEMS</h3>
                                <h4>A-</h4>
                                <p>This course covers major concepts in the design and modeling of operating systems for digital computers. Topics include historical development of operating systems; methods used in simulations, memory management, system protection mechanisms, I/O management, CPU scheduling, process management and file systems. Programming assignments, program analyses and written reports are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 11 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20350" target="_blank">
                            <div class="class-details">
                                <h4>CSCD350</h4>
                                <h3>SOFTWARE DEVELOPMENT PRINCIPLES</h3>
                                <h4>B+</h4>
                                <p>This course covers formal approaches and tools for conceiving, understanding, analyzing, designing,building, testing, deploying, documenting and maintaining large software systems. Topics may include software lifecycle models; project and team management; verification and validation techniques; legal and ethical issues; practical development and application of skills in critical thinking, communication and professionalism. A major team-based software development project is required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 12 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20420" target="_blank">
                            <div class="class-details">
                                <h4>CSCD420</h4>
                                <h3>COMPILERS</h3>
                                <h4>In Progress</h4>
                                <p>This course explores Automata Theory, Regular Expressions, the Backus-Naur metalanguage for specifying programming language syntax, and Interpreter and Compiler Design. Programming projects are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 13 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=EENG%20160" target="_blank">
                            <div class="class-details">
                                <h4>EENG160</h4>
                                <h3>DIGITAL CIRCUITS</h3>
                                <h4>B+</h4>
                                <p>This course covers the fundamentals of digital computer design including appropriate number systems, boolean algebra, and basic digital circuits. Methods introduced will include the use of Karnaugh Maps and the Quine-Mckluskey procedure. Computer laboratory work will involve the use of current software for the design, analysis, and simulation of digital circuits.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 14 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=MATH%20161" target="_blank">
                            <div class="class-details">
                                <h4>MATH161</h4>
                                <h3>CALCULUS I</h3>
                                <h4>B</h4>
                                <p>This course introduces the concepts of mathematical limits, derivatives, definite and indefinite integrals, and of real-valued functions of a single real variable, with applications.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 15 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=MATH%20162" target="_blank">
                            <div class="class-details">
                                <h4>MATH162</h4>
                                <h3>CALCULUS II</h3>
                                <h4>B-</h4>
                                <p>This course presents techniques of integration and improper integrals, with applications, and introduces transcendental functions.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 16 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=MATH%20231" target="_blank">
                            <div class="class-details">
                                <h4>MATH231</h4>
                                <h3>LINEAR ALGEBRA</h3>
                                <h4>C</h4>
                                <p>This course covers the theory and practice of vector geometry in R2 and R3, systems of linear equations, matrix algebra, determinants, vector spaces, bases and dimension, linear transformations, eigenvalues and eigenvectors, rank and nullity and applications.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 17 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=MATH%20301" target="_blank">
                            <div class="class-details">
                                <h4>MATH301</h4>
                                <h3>DISCRETE MATHEMATICS</h3>
                                <h4>C</h4>
                                <p>This course covers the theory and application of the mathematics most relevant to computer science. Foundation topics include logic, induction and recursion, methods of proof, set theory, relations and functions, and combinatorics. Implementation topics include graphs and matrices, including systems of linear equations, two dimensional rotation matrices and matrix representations of graphs, as well as selected topics in graph theory.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 18 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=MATH%20380" target="_blank">
                            <div class="class-details">
                                <h4>MATH380</h4>
                                <h3>ELEM PROBABILITY & STATISTICS</h3>
                                <h4>C+</h4>
                                <p>This course covers empirical and theoretical frequency distributions. Discrete and continuous random variables. The binomial random variable and the normal. Descriptive statistics including measures of location, spread and association. An introduction to inferential statistics including confidence intervals and hypothesis testing.</p>
                            </div>
                        </a>
                    </div>
                </div>
                {/* End Page 2 */}

                {/* Page 3 */}
                <div class="class-page">
                    {/* Class 19 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20330" target="_blank">
                            <div class="class-details">
                                <h4>CSCD330</h4>
                                <h3>COMPUTER NETWORKS</h3>
                                <h4>B-</h4>
                                <p>This course covers fundamental concepts, protocol mechanisms and programming skills for computer networks. It includes a technical overview of telecommunication media and fundamental protocols for the Internet such as ISO/OSI layers, Ethernet, collision detection and channel allocation. Programming projects are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 20 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20210" target="_blank">
                            <div class="class-details">
                                <h4>CSCD210</h4>
                                <h3>PROGRAMMING PRINCIPLES I</h3>
                                <h4>A</h4>
                                <p>This course covers the concepts and practices of information representation, computer algorithms, hardware organization and computer program design and implementation. Students write, run, debug, analyze and evaluate computer programs. Topics include primitive data types, number systems, file I/O classes, control structures, method design and usage, array–sorting and searching algorithms. Programming projects are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 21 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20211" target="_blank">
                            <div class="class-details">
                                <h4>CSCD211</h4>
                                <h3>PROGRAMMING PRINCIPLES II</h3>
                                <h4>A-</h4>
                                <p>This course continues coverage of concepts introduced in Programming Principles I. Topics include composition, recursion, data abstraction, polymorphism, inheritance, interfaces, inner classes, abstract classes, object cloning, array lists, linked lists, and exception handling. Programming projects are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 22 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20378" target="_blank">
                            <div class="class-details">
                                <h4>CSCD378</h4>
                                <h3>WEB APPLICATION DEVELOPMENT</h3>
                                <h4>B+</h4>
                                <p>This course examines the fundamental principles and techniques associated with the development of multi-tier web applications. Topics include web standards, portability, and usability. Programming projects are required.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 23 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20429" target="_blank">
                            <div class="class-details">
                                <h4>CSCD429</h4>
                                <h3>DATA MINING</h3>
                                <h4>C+</h4>
                                <p>This course will provide an introduction to the main topics in data mining and knowledge discovery, including: data preparation for knowledge discovery, frequent pattern and association mining, classification and cluster analysis.</p>
                            </div>
                        </a>
                    </div>
                    {/* Class 24 */}
                    <div class="class-box">
                        <a href="https://catalog.ewu.edu/search/?P=CSCD%20420" target="_blank">
                            <div class="class-details">
                                <h4>CSCD420</h4>
                                <h3>COMPILERS AND AUTOMATA</h3>
                                <h4>A-</h4>
                                <p>This course explores Automata Theory, Regular Expressions, the Backus-Naur metalanguage for specifying programming language syntax, and Interpreter and Compiler Design. Programming projects are required.</p>
                            </div>
                        </a>
                    </div>
                </div> 
                {/* End Page 3 */}
            </div> {/* End Classes Container */}
        </section>
    );
}

export default Classes;
