function removeDuplicates(arr)
{
  var temp=[];
  var x=0;
  var duplicate=false;
  for(var i=0;i<arr.length;i++){
      for(var j=0;j<temp.length;j++){
          if(arr[i]==temp[j])
          {
               duplicate=true; 
               break;
          }
      }
      if(!duplicate){
        temp[x]=arr[i];
        duplicate=false;
        x++;
    }
    duplicate=false;
  }
  console.log(temp);
}
removeDuplicates([2,3,4,2,4,5,6]);