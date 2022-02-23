const colorManager = (defaultColor) => {
    let stack = [defaultColor, "red", "green", "blue", "orange"];
    let index = 0;
  
    return {
      
      get: function () {
        return stack[index];
      },
  
      next: function () {
        index += 1;
        if (index >= stack.length) {
          index = 0;
        }
  
        return this.get();
      },
  
      prev: function () {
        index -= 1;
        if (index < 0) {
          index = stack.length - 1;
        }
  
        return this.get();
      },
  
      reset: function () {
        index = stack.indexOf(defaultColor);
        return this.get();
      },
  
      setPalette: function(colours) {
        stack = [defaultColor, ...colours]
      }
    };
  }
  
  const cm1 = colorManager("purple");
  
  console.log("The Current Selected is: " + cm1.get()); 
  console.log("The next color is: " + cm1.next());
  console.log("The next color is: " + cm1.next()); 
  console.log("The previous color is: " + cm1.prev()); 
  console.log("The next color is: " + cm1.next());
  console.log("The next color is: " + cm1.next()); 
  console.log("The next color is: " + cm1.next()); 
  console.log("The previous color is: " + cm1.prev()); 
  console.log("The color switch to its original : " + cm1.reset());