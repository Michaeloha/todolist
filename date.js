// Mon 8/6/20 L-289 Node Module Export
 // 6 ways to declare javascript https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/
// module.exports. = getDate;
//module. exports.getDate = function(){} // you can write function like this to use the module export

exports.getDate = function(){
const today = new Date();

const options = {
  weekday:"long",
  day: "numeric",
  month: "long",
  year: "numeric"
};

return day = today.toLocaleDateString("en-US", options);

};


module.exports.getDay = function (){
const today = new Date();

const options = {
  weekday:"long",

};

return day = today.toLocaleDateString("en-US", options);

};

// or like this

// module.exports.getDay = getDay;
// function getDay(){
// const today = new Date();
//
// const options = {
//   weekday:"long",
//
// };
//
// return day = today.toLocaleDateString("en-US", options);
//
// }
