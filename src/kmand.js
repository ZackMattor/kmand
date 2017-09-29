class Kmand {
  constructor(destination_window, functions, events) {
    console.log('Kmand instance created');

    // Member declarations
    this.destination_window = destination_window;
    this.functions = functions;
    this.events = events;
    this.running_functions = {};

    window.addEventListener('message', this._on_message.bind(this), false);
  }

  exec(name, data) {

  }

  on(event_name, data) {

  }

  /*
   * Packet Structure
   * {
   *   _id: '',
   *   _is_request: true || false,
   *   name: '',
   *   data: {}
   * }
   */
  _on_message(evt) {
    let packet = evt.data;
    console.log('The following data packet was received');
    console.log(packet);

    if(!this._is_packet_valid(packet)) {
      console.error('Our packet is invalid! Thowing it out...');
      return;
    }

    if(packet.is_request) this._process_request(packet);
    else                  this._process_response(packet);
  }

  _is_packet_valid() {
    return false;
  }

  _process_request(packet) {
  }

  _process_response(packet) {

  }
};
