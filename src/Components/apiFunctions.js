// apiFunctions.js

// Keep the seededRandom function as is:
function seededRandom(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }
  
  // Convert fetchAPI into a named export
  export function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  }
  
  // Convert submitAPI into a named export
  export function submitAPI(formData) {
    return true;
  }