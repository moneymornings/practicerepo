Loop Review 3.22

Every loop has 3 conditions 
1. starting point which is i=0
2. ending point/exit point which is i< .length
3. increment or decrement which is i++ 


For Loop AUTOMATICALLY provides all 3 conditions 

While Loops AUTOMATICALLY provides 1 condition 
you have to manually add the other two conditions outside of the loop 

let i = 0; (<----added starting point) 
ex: while(i + 1 < region.length){ (<----end point)
    if (region[i].score > region[i + 1].score)
    
    region.splice(i + 1, 1);
      i--;
    } else {
      region.splice(i, 1);
      i--; 
}      
    i= i + 2 (<-----added increment)

