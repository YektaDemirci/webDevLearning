module.exports.getDate = getDate;

function getDate() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  return day;
}

// Shorter initialization

exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);;
}
