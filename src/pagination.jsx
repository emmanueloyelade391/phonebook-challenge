import React, { useState } from "react";

function Pagination() {
  const totalPages = 10; // you can change this
  const [currentPage, setCurrentPage] = useState(1);

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go directly to a page number
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={styles.paginationContainer}>
      <button onClick={prevPage} style={styles.button}>Previous</button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          style={{
            ...styles.button,
            ...(currentPage === page ? styles.activeButton : {}),
          }}
        >
          {page === 1 ? "Page 1" : `Part ${page}`}
        </button>
      ))}

      <button onClick={nextPage} style={styles.button}>Next</button>
    </div>
  );
}

  const styles = {
    pageNav: {
      display: "flex",
      gap: "18px",
      justifyContent: "center",
      marginTop: "30px", 
    },
    navButton: {
      cursor: "pointer",
      backgroundColor: "white",
      border: "2px solid #4184ff",
      borderRadius: "5px",
      padding: "10px 6px",
      fontSize: "18px",
      color: "black",
      transition: "background-color 0.25s, color 0.25s"
    },
    activeButton: {
      backgroundColor: "#4184ff",
      color: "white"
    },
  };

export default Pagination;