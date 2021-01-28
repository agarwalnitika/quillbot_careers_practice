import React, { useState } from 'react';
import styles from "../styles/Home.module.css";
export default function Career({data}){
      
      const [currentPage,setCurrentPage]=useState(1);
      const [elementsPerPage,setTodoPage]=useState(3);
        
      console.log("original data",data)  
      
      // Logic for displaying limited elements
      
      const indexOfLastElement = currentPage * elementsPerPage;
      const indexOfFirstElement = indexOfLastElement - elementsPerPage;
      const currentData = data.slice(indexOfFirstElement, indexOfLastElement);
  
      const renderData = currentData.map((d) => {
      return (
        <div className={styles.jobs}>
            <h3>{d.Title}</h3> 
            <p>{d.Requirements}</p>
        </div>);
      });
  

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(data.length / elementsPerPage); i++) {
        pageNumbers.push(i);
      }
      

      function handleNext() {
        if(currentPage<pageNumbers.length){
            setCurrentPage(currentPage=>currentPage+1);
        }
      }

      function handlePrev() {
        if(currentPage>pageNumbers[0])
          setCurrentPage(currentPage=>currentPage-1);
        }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
        <div>{number}</div>
        );
      });
  
      return (
        <div className={styles.description} >
          <div>
         {/* <h4 className={styles.horizontal}>{renderPageNumbers}</h4> */}
                <p >{renderData}</p>  
              </div>
          <div>
          <button className={styles.button} onClick={handlePrev}>prev</button>
          <button className={styles.button} onClick={handleNext}>next</button>
          </div>
        </div>
      );
    
  }

  /*
  export async function getServerSideProps(){

    const url = "https://sheetsu.com/apis/v1.0su/b3f942bdd985"
    const res = await fetch(url);
    const data = await res.json();


    return { props:{data} };


  }
  */
