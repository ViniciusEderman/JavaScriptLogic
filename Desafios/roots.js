function roots(a, b, c) {
    const delta = (b * b) - (4 * a * c);
    
    if (delta < 0) {
      return null;
    }
  
    const sqrtDelta = Math.sqrt(delta);
    const firstRoot = (-b + sqrtDelta) / (2 * a);
    const secondRoot = (-b - sqrtDelta) / (2 * a);
    const sum = firstRoot + secondRoot;
    
    return parseFloat(sum.toFixed(2));
}