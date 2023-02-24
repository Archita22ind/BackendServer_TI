const sortObjectDesc = (obj) =>{

    const sorter = (a, b) => {
        return obj[b] - obj[a];
     };
     const keys = Object.keys(obj);
     keys.sort(sorter);
     const res = {};
     keys.forEach(key => {
        res[key] = obj[key];
     });
     return res;

}
  
  module.exports = sortObjectDesc;
  