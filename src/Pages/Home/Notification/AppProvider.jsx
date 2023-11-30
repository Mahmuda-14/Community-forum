/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { createContext,  useEffect, useState } from "react";


// // Create the context
// export const AppContext = createContext();

// // Create a provider component
// const AppProvider = ({ children }) => {

//   const [announcementCount, setAnnouncementCount] = useState(0);
  
  


//   // Function to update announcement count
//   const updateAnnouncementCount = (count) => {
//     setAnnouncementCount(count);
//   };

//   // Value provided by the context
//   const contextValue = {
//     announcementCount,
//     updateAnnouncementCount,
//   };

//   useEffect(() => {
//     // Simulate fetching announcements and updating the count
//     fetch('https://community-forum-ass-12-server.vercel.app/news')
//       .then(res => res.json())
//       .then(data => {
//         setAnnouncementCount(data.length);
//       })
//       .catch(error => {
//         console.error('Error fetching announcements:', error);
//       });
//   }, []);

//   return (
//     <AppContext.Provider value={contextValue}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppProvider;





// AppProvider.jsx
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [announcementCount, setAnnouncementCount] = useState(0);

  const updateAnnouncementCount = (count) => {
    setAnnouncementCount(count);
  };

  const contextValue = {
    announcementCount,
    updateAnnouncementCount,
  };

  useEffect(() => {
    fetch('https://community-forum-ass-12-server.vercel.app/news')
      .then(res => res.json())
      .then(data => {
        setAnnouncementCount(data.length);
      })
      .catch(error => {
        console.error('Error fetching announcements:', error);
      });
  }, []);

  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
