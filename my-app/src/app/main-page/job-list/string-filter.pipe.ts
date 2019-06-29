import { Pipe, PipeTransform } from '@angular/core';

/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
@Pipe({
  name: 'stringFilter'
})


export class StringFilterPipe implements PipeTransform {

  transform(value : any[], q : any) {
    console.log(q);
      if(!value){
          return value;
      }

      if (!q) {
        return value;
    }


      //filter ID and Fullname

      if(q !== undefined){
          value = value.filter(item => -1 < item.Name.toLowerCase().indexOf(q.toLowerCase().trim()) 
                                    || -1 < item.ID.toString().indexOf(q.toLowerCase().trim())
          
                              );
      }

      return value;
  }

  
}
