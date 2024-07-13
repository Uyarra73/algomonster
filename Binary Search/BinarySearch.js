function binarySearch(arr, target) {
    // Declarar las variables left desde 0 y right desde el final
      let left = 0;
      let right = arr.length -1;
  
    // Mientras left sea menor igual que right:
        //Declarar la variable mid
      while (left <= right){
        let mid = left + Math.floor((right - left) / 2 );
        
        // Si el valor del arr en mid es igual a target:
        //Devolver mid directamente
      if (arr[mid] === target) return mid;
  
    // Si el valor de del arr en mid NO es igaul al target:
      // Comprobamos si es menor a target:
          // Asignamos a left el valor de mid + 1 descartando la parte izda
      if (arr[mid] < target){
        left = mid + 1;
      }
      // Si es mayor que target:
          // Asignamos a right el valor de mid - 1 descartando la parte derecha
      else {
        right = mid -1;
      }
        
      }
  
    return -1;
}
