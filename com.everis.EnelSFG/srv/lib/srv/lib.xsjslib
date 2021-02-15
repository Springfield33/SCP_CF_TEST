function checkShipment() {
    var conn = $.hdb.getConnection();
    var query = 'SELECT * FROM "com.everis::shipment"';
    var results = conn.executeQuery(query);
    conn.close();

    $.response.contentType = "text/json";
    $.response.setBody(results);
    $.response.status = $.net.http.OK;

}