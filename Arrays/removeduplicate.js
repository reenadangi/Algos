function removeDuplicates(arr)
{
  var temp=[];
  var x=0;
  var duplicate=0;
  for (var i=0; i<arr.length; i++) 
    {
      for(var j=i;j<arr.length;j++)
        {
          if(arr[i]===arr[j])
            {
              duplicate=1;
            }
        }
        if(duplicate!==1)
             {
               console.log(arr[i], "Not Duplicate");
               temp[x]=arr[i];
               x++;
               duplicate=0; 
              }
     
      else
        {console.log(arr[i], " Duplicate");
          duplicate=0;
        }
        
    }
  
  console.log(temp);
}
removeDuplicates([2,3,4,2,4,5,6]);