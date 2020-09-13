'use strict';

var verifikasi = require('./middleware/token_verifikasi');

module.exports = function (app) {
    var jsonku = require('./controller');

//    app.route('/')
  //      .get(jsonku.index);

    app.route('/relay')
        .get(verifikasi(),jsonku.tampilsemuarelay);

    app.route('/relayid')
        .get(verifikasi(),jsonku.m_tampilrelayid);


    app.route('/kondisirelay')
        .put(verifikasi(),jsonku.kondisirelay);



    //rotes mikrokontroler
     app.route('/m_relay')
        .get(verifikasi(),jsonku.m_mikrogetrelay);

    app.route('/m_relay')
        .delete(jsonku.m_hapusrelay);

    app.route('/m_relay')
        .post(jsonku.m_tambahrelay);

    app.route('/m_relayid')
        .get(jsonku.m_tampilrelayid);

    app.route('/m_relay')
        .put(jsonku.m_editerilay)


}
