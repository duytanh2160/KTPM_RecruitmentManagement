import { Pipe, PipeTransform } from '@angular/core';

/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
@Pipe({
  name: 'stringFilter'
})


export class StringFilterPipe implements PipeTransform {

  transform(value: any[], q: any) {

    if (!value) {
      return value;
    }

    if (!q) {
      return value = value.filter(item => -1 < item.DeleteFlag.toLowerCase().indexOf('n'));
    }


    //filter DeleteFlag
    if (q.deleteFlag !== undefined) {
      value = value.filter(item => -1 < item.DeleteFlag.toLowerCase().indexOf(q.deleteFlag.toLowerCase().trim()));
    } else {
      value = value.filter(item => -1 < item.DeleteFlag.toLowerCase().indexOf('n'));
    }


    //filter StartDate
    if (q.startDateSearch !== undefined && q.startDateSearch !== "") {
      value = value.filter(item => item.StartDate === q.startDateSearch);
    }
    //filter EndDate
    if (q.endDateSearch !== undefined && q.endDateSearch !== "") {
      value = value.filter(item => item.EndDate === q.endDateSearch);
    }


    //filter Result
    if (q.resultSearch !== undefined && q.resultSearch !== "") {
      value = value.filter(item => item.Result === q.resultSearch);
    }


    //filter Job Level
    if (q.levelSearch !== undefined && q.levelSearch !== "") {
      value = value.filter(item => item.Candidate.Level === q.levelSearch);
    }


    //filter Job if q.jobSearch != undefined
    if (q.jobSearch !== undefined && q.jobSearch !== "") {
      value = value.filter(item => -1 < item.Candidate.PositionApply.Name.trim().toLowerCase().indexOf(q.jobSearch.toLowerCase().trim()));
    }



    //filter ID and Fullname

    if (q.searchVal !== undefined) {
      value = value.filter(item => -1 < item.Candidate.Fullname.toLowerCase().indexOf(q.searchVal.toLowerCase().trim())
        || -1 < item.Candidate.ID.toString().indexOf(q.searchVal.toLowerCase().trim())

      );
    }

    return value;
  }


}
