'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((pre,cur)=>{
    if(cur>pre){
      return cur;
    }
    else{
      return pre;
    }
  });

}

module.exports = collect_max_number;