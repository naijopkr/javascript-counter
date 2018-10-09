function Counter(props) {
  /*
    Props:
      year, month, day, hour, minutes, seconds (int): Used to instance baseDate
      element (element): HTML element that will display the counter
  */
  this.baseDate = new Date(
    props.year, props.month, props.day, 
    props.hour, props.minute, props.second
  ).getTime()
  this.element = props.element 
}

Counter.prototype.initCounter = function() {
  setInterval(() => {
    var now = new Date().getTime()

    var distance = this.baseDate > now
    ? this.baseDate - now
    : now - this.baseDate
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.element.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  }, 1000)
}