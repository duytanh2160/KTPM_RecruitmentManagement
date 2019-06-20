    
import {Pipe , PipeTransform} from "@angular/core";
import { Candidate } from './candidate';
import { Search } from './search'

/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
@Pipe({
    name: 'stringFilter'
})


export class StringFilterPipe implements PipeTransform {

    transform(value : Candidate[], q : Search) {

        if(!value){
            return value;
        }

        if (!q) {
            return value = value.filter(item => -1 < item.DeleteFlag.toLowerCase().indexOf('n'));
        }


        //filter DeleteFlag
        if(q.deleteFlag !== undefined){
            value = value.filter(item => -1 < item.DeleteFlag.toLowerCase().indexOf(q.deleteFlag.toLowerCase().trim()));
        }else{
            value = value.filter(item => -1 < item.DeleteFlag.toLowerCase().indexOf('n'));
        } 
        
        
        //filter Job Level
        if(q.levelSearch !== undefined && q.levelSearch !== ""){
            value = value.filter(item => item.Level === q.levelSearch);
        }


        //filter Job if q.jobSearch != undefined
        if(q.jobSearch !== undefined && q.jobSearch !== ""){
            value = value.filter(item => -1 < item.PositionApply.Name.trim().toLowerCase().indexOf(q.jobSearch.toLowerCase().trim()));
        }
        


        //filter ID and Fullname

        if(q.searchVal !== undefined){
            value = value.filter(item => -1 < item.Fullname.toLowerCase().indexOf(q.searchVal.toLowerCase().trim()) 
                                      || -1 < item.ID.toString().indexOf(q.searchVal.toLowerCase().trim())
            
                                );
        }

        return value;
    }



    lowerCaseThisList(list){
        for(var i = 0 ; i < list.length ; i++){
            list[i] = list[i].toLowerCase();
        }
    return list;
    }
    
}
