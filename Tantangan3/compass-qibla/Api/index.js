let mecca = {
  lat: toRadians(21.3891),
  lon: toRadians(39.8579),
};
function getBearing(lat1, lon1, lat2, lon2) {
  var y = Math.sin(lon2 - lon1) * Math.cos(lat2);
  var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
  var brng = Math.atan2(y, x);
  return toDegrees(brng);
}

function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

export const kiblat = async (lat, long) => {
  let finalBearing = getBearing(toRadians(lat), toRadians(long), mecca.lat, mecca.lon);
  if (finalBearing < 0) {
    // console.log("Bearing: " + finalBearing + " / West of North");
    finalBearing = 360 + Math.round(finalBearing);
  }
  else {
    // console.log("Bearing: " + finalBearing + " / East of North");
    finalBearing = 0 + Math.round(finalBearing);
  }
  // console.log("finalBearing",finalBearing)
  return finalBearing;
}