import React from 'react';

export default ({searchRes}) => {
    return(
       <>
        <div className="search-bar">
         <h1>Search : {searchRes.search}</h1>
         <h1>Found : {searchRes.movies.length}</h1>
         </div>
       </> 
    )
}