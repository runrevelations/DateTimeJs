function formatDate(input, opts){
   var epoch = new Date(0);
   epoch.setSeconds(parseInt(input));
   // epoch.setHours(epoch.getHours() + 1); hour offset
   var date = epoch.toISOString();
   date = date.replace('T', ' ');
   return date.split('.')[0].split(' ')[0] + ' ' + epoch.toLocaleTimeString().split(' ')[0];
};
