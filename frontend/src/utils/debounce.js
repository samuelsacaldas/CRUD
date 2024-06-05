export function debounce(func, wait) {
    let timeout
  
    return function() {
    
      clearTimeout(timeout)
      timeout = setTimeout(() => func(), wait)
    }
}