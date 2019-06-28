import { Pipe, PipeTransform } from '@angular/core';

/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
@Pipe({
  name: 'stringFilter'
})


export class StringFilterPipe implements PipeTransform {

  transform(value : any[], q : any) {
      if(!value){
          return value.filter(item => item.DeleteFlag.toLowerCase() === 'n');
      }

      if (!q) {
        return value.filter(item => item.DeleteFlag.toLowerCase() === 'n');
    }


      //filter ID and Fullname

      if(q !== undefined){
          value = value.filter(item => -1 < item.UserName.toLowerCase().indexOf(q.toLowerCase().trim()) 
                                    || -1 < item.ID.toString().indexOf(q.toLowerCase().trim())
          
                              );
      }

      return value;
  }

  
}
