let templates = {
  bdc: {
    url: 'https://www.broadwaydancecenter.com/schedule',
    selectors: '.view-content',
    parser: function(obj){
      return obj;
    }
  },
  peri: {
    url : "http://www.peridance.com/openclasses.cfm",
    selectors: 'table',
    parser: function(obj){
      return obj.replace(/\n/g, '').split('\t')
    }
  },
  expg: {
    url: '',
    selectors: '#classSchedule-mainTable',
    parser: function(obj){
      return obj;
    }
  }
  
}

export default templates;