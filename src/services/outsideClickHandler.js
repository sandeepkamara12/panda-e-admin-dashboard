export const handleClickOutside = (ref, callback) => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(); // Execute the callback when clicking outside
      }
    };
  
    // Attach event listener
    const addEventListener = () => {
      document.addEventListener("mousedown", listener);
    };
  
    // Remove event listener
    const removeEventListener = () => {
      document.removeEventListener("mousedown", listener);
    };
  
    return { addEventListener, removeEventListener };
  };